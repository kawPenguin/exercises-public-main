
export function newHashTable(capacity) {
  return {
    size: 0, // マッピング数を示すプロパティ
    entries: new Array(capacity), // マッピングを格納する固定長の配列
    get(key) {
      // keyにマップされた値を取得する
      const hash = key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const index = hash % this.entries.length;
      let current = this.entries[index];
      while (current) {
        if (current.key === key) {
          return current.value; // キーが一致した場合は値を返す
        }
        current = current.next; // 次へ移動
      }
      return undefined; // キーが見つからない場合はundefinedを返す
    },
    put(key, value) {
      // key, valueのマッピングを追加する(keyが存在する場合はvalueを上書きする)
      const hash = key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const index = hash % this.entries.length;
      const entry = { key, value, next: undefined };
      if (!this.entries[index]) {
        this.entries[index] = entry;
        this.size++;
      } else {
        let current = this.entries[index];
        while (current) {
          if (current.key === key) {
            current.value = value; // 既存のキーの場合は値を更新
            return;
          }
          if (!current.next) {
            current.next = entry; // 新しいエントリを追加
            this.size++;
            return;
          }
          current = current.next;
        }
      }
    },
    remove(key) {
      // keyのマッピングを削除する
      const hash = key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const index = hash % this.entries.length;
      let current = this.entries[index];
      let previous = null;
      while (current) {
        if (current.key === key) {
          if (previous) {
            previous.next = current.next; // 前のエントリのnextを更新
          } else {
            this.entries[index] = current.next; // 先頭を削除
          }
          this.size--;
          return;
        }
        previous = current;
        current = current.next; // 次へ移動
      }
      // キーが見つからない場合は何もしない 
    },
  };
}

function sample() {
  const hashTable = newHashTable(10);
  hashTable.put("key1", "value1");
  hashTable.put("key2", { value: "value2" });

  console.log(`size=${hashTable.size}`); // => size=2
  console.log(`key1=${hashTable.get("key1")}`); // => key1=value1
  console.log(`key2=${JSON.stringify(hashTable.get("key2"))}`); // => key2={"value":"value2"}

  hashTable.put("key2", "new value");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=new value

  hashTable.remove("key2");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=undefined
  console.log(`size=${hashTable.size}`); // => size=1
}