# 設問13-9
## i1
### 実行結果
42
100

### 解説
Promise.any() は、引数で渡された Promise のうち、最初に成功になったものの結果を返す。
・wait1().then(() => 42) は 1秒後に 42 を返して成功
・wait2().then(() => (v = 100))... は 2秒後に成功

## i2
### 実行結果
C
B
A
[ 'A', 'B', 'C' ]

### 解説
Promise.allは全てのPromiseが完了するまで待つ。
ログは待ち時間が短い順 (C, B, A) に出力され、
最後に全てのPromiseの結果が引数で渡された順に配列 ['A', 'B', 'C'] として返される。

## i3
### 実行結果
Y
42
B
0

### 解説
Promise.allはいずれか1つのPromiseが失敗した時点 (errY) で即座に失敗し、catchブロックに移る
他の未完了のPromiseは裏で実行を続けるため、後からlogBの出力や変数vの更新 (v=0) が行われる。

## i4
### 実行結果
5

### 解説
2つの非同期関数が共有変数vを「読み込み」、awaitで中断し、その後に「書き込む」ため、競合状態が発生。
一方の関数が、もう一方が更新する前の古い値を基に値を書き込んでしまうため、更新の一部が失われる。

### 修正したコード
```js

async function i4() {
  let v = 0;

  const p1 = async () => {
    await wait1();
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      await wait2();
      v = next;
    }
  };

  const p2 = async () => {
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      await wait2();
      v = next;
    }
  };

  // Promise.all を使わずに、await で順番に呼び出す
  await p1();
  await p2();
  
  log(v); 
}
```