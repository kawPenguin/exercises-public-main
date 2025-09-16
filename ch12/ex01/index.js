/**
 * 設問12-1
 * 以下のコードに示す関数 counterIter() 及び counterGen() を利用して、
 * イテレータ及びジェネレータに対して「調査対象の操作」に示す操作をしたときに、
 * どの部分が実行されるのかを調査するコードを作成し、実行結果と動作の説明を記述しなさい
 * - 明示的に[イテレータプロトコル](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Iteration_protocols)の next() を呼び出す
 * - 明示的に[イテレータプロトコル](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Iteration_protocols)の return() を呼び出す
 * - 明示的に[イテレータプロトコル](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Iteration_protocols)の throw() を呼び出す
 * - for-of ループを実行
 * - for-of ループを実行途中で break
 * - for-of ループを実行中に例外発生
 */

function counterIter(max) {
  console.log("counterIter");
  let c = 1;
  return {
    [Symbol.iterator]() {
      console.log("counterIter: Symbol.iterator");
      return this;
    },
    next() {
      console.log("counterIter: next");
      if (c >= max + 1) {
        return { value: undefined, done: true };
      }
      const value = c;
      c++;
      return { value, done: false };
    },
    return(value) {
      console.log("counterIter: return:", value);
      return { value, done: true };
    },
    throw(e) {
      console.log("counterIter: throw:", e);
      throw e;
    },
  };
}

function* counterGen(max) {
  console.log("counterGen");
  try {
    for (let c = 1; c <= max; c++) {
      console.log("counterGen: next");
      yield c;
    }
  } catch (e) {
    console.log("counterGen: catch:", e);
    throw e;
  } finally {
    console.log("counterGen: finally");
  }
}

console.log("---------------------")
// イテレータ：nextを呼び出し
const it1 = counterIter(3);
console.log(it1.next());
console.log(it1.next());

console.log("---------------------")

// イテレータ：returnを呼び出し
const it2 = counterIter(3);
console.log(it2.next());
console.log(it2.return("終了")); // イテレータを強制終了

console.log("---------------------")

// イテレータ：throwを呼び出し
const it3 = counterIter(3);
try {
  it3.throw(new Error("エラー発生"));
} catch (e) {
  console.error(e.message);
}

console.log("---------------------")

// イテレータ：for-ofループ
for (const val of counterIter(3)) {
  console.log(val);
}

console.log("---------------------")

// イテレータ：break
for (const val of counterIter(5)) {
  console.log(val);
  if (val === 2) {
    break; // ループを中断
  }
}

console.log("---------------------")

// イテレータ＋例外
try {
  for (const val of counterIter(5)) {
    console.log(val);
    if (val === 2) {
      throw new Error("ループ内エラー");
    }
  }
} catch (e) {
  console.error(e.message);
}

console.log("---------------------")

// ジェネレータ：next
const gen1 = counterGen(3);
console.log(gen1.next());
console.log(gen1.next());

console.log("---------------------")

// ジェネレータ：return
const gen2 = counterGen(3);
console.log(gen2.next());
console.log(gen2.return("終了")); 

console.log("---------------------")

// ジェネレータ：throw
const gen3 = counterGen(3);
console.log(gen3.next());
try {
  gen3.throw(new Error("エラー発生"));
} catch (e) {
  console.error(e.message);
}

console.log("---------------------")

//ジェネレータ：for-of
for (const val of counterGen(3)) {
  console.log(val);
}

console.log("---------------------")

// ジェネレータ：break
for (const val of counterGen(5)) {
  console.log(val);
  if (val === 2) {
    break; // ループを中断
  }
}

console.log("---------------------")

// ジェネレータ：例外
try {
  for (const val of counterGen(5)) {
    console.log(val);
    if (val === 2) {
      throw new Error("ループ内エラー");
    }
  }
} catch (e) {
  console.error(e.message);
}