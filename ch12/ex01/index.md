# 設問12-1
## 問題
以下のコードに示す関数 `counterIter()` 及び `counterGen()` を利用して、イテレータ及びジェネレータに対して「調査対象の操作」に示す操作をしたときに、どの部分が実行されるのかを調査するコードを作成し、実行結果と動作の説明を記述しなさい

## 回答
### イテレータ
#### next

```js
const it1 = counterIter(3);
console.log(it1.next());
console.log(it1.next());
```

実行結果：
counterIter
counterIter: next
{ value: 1, done: false }
counterIter: next
{ value: 2, done: false }

説明：
counterIter(3) が呼ばれ、"counterIter" が出力され、イテレータオブジェクト it1 が生成される。
it1.next() が呼ばれるたびに、next メソッド内の "counterIter: next" が出力され、{ value, done } 形式のオブジェクトが返却されている。

#### return 
```js
const it2 = counterIter(3);
console.log(it2.next());
console.log(it2.return("終了")); // イテレータを強制終了
```

実行結果：
counterIter
counterIter: next
{ value: 1, done: false }
counterIter: return: 終了
{ value: '終了', done: true }

説明：
it2.return("終了") が呼ばれると、return メソッドが実行され、"counterIter: return: 終了" が出力される。
return メソッドは引数で受け取った値を value に設定し、done: true としたオブジェクトが返却されている。

#### throw
```js
const it3 = counterIter(3);
try {
  it3.throw(new Error("エラー発生"));
} catch (e) {
  console.error(e.message);
}
```

実行結果：
counterIter
counterIter: throw: Error: エラー発生
    at file:///home/kawai/js-practice/exercises-public-main/ch12/ex01/index.js:75:13
    at ModuleJob.run (node:internal/modules/esm/module_job:262:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:474:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:109:5)
エラー発生

説明：
it3.throw() が呼ばれると、throw メソッドが実行され、"counterIter: throw:..." が出力される。
throw メソッド内で、受け取ったエラーオブジェクトが throw されるため、呼び出し元の try...catch で捕捉される。

#### for-of
```js
for (const val of counterIter(3)) {
  console.log(val);
}

```

実行結果：
counterIter
counterIter: Symbol.iterator
counterIter: next
1
counterIter: next
2
counterIter: next
3
counterIter: next

説明：
for...of が開始されると、まず counterIter(3) が呼ばれ、"counterIter" が出力される。
次に、イテレーションを開始するために [Symbol.iterator]() メソッドが呼ばれ、"counterIter: Symbol.iterator" が出力される。
ループの各反復で next() が呼ばれ、done: false であればその value が val に代入される。

#### break
```js
for (const val of counterIter(5)) {
  console.log(val);
  if (val === 2) {
    break; // ループを中断
  }
}
```

実行結果：
counterIter
counterIter: Symbol.iterator
counterIter: next
1
counterIter: next
2
counterIter: return: undefined

説明：
val が 2 になった時点で break が実行されている。
for...of はループを抜ける前に、イテレータの return() メソッドを呼び出す。
"counterIter: return: undefined" が出力され、イテレータが正常に終了処理を実行している。

#### 例外
```js
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
```

実行結果：
counterIter
counterIter: Symbol.iterator
counterIter: next
1
counterIter: next
2
counterIter: return: undefined
ループ内エラー

説明：
val が 2 のときに例外が throw される。
for...of 構文は、例外を外側の catch に渡す前に、イテレータの return() を呼び出して終了処理を行う。
その結果、"counterIter: return: undefined" が出力された後で、"ループ内エラー" が catch ブロックで表示されている。

### ジェネレータ
#### next
```js
const gen1 = counterGen(3);
console.log(gen1.next());
console.log(gen1.next());
```

実行結果：
counterGen
counterGen: next
{ value: 1, done: false }
counterGen: next
{ value: 2, done: false }

説明：
counterGen(3) を呼び出した時点では、まだ何も出力されない。
最初の gen1.next() が呼ばれたとき、"counterGen" が出力され、for ループが開始し、最初の yield で停止する。
このとき "counterGen: next" が出力され、value: 1 が返される。
2回目の gen1.next() では、停止した箇所から処理が再開され、次の yield まで進む。

#### return 
```js
const gen2 = counterGen(3);
console.log(gen2.next());
console.log(gen2.return("終了")); 

```

実行結果：
counterGen
counterGen: next
{ value: 1, done: false }
counterGen: finally
{ value: '終了', done: true }

説明：
gen2.return() が呼ばれると、ジェネレータ内の処理が終了する。
try...finally 構文があるため、finally ブロックが実行され、"counterGen: finally" が出力される。
return は引数の値を value に設定し、done: true としたオブジェクトを返却する。

#### throw
```js
const gen3 = counterGen(3);
console.log(gen3.next());
try {
  gen3.throw(new Error("エラー発生"));
} catch (e) {
  console.error(e.message);
}
```

実行結果
counterGen: next
{ value: 1, done: false }
counterGen: catch: Error: エラー発生
    at file:///home/kawai/js-practice/exercises-public-main/ch12/ex01/index.js:131:14
    at ModuleJob.run (node:internal/modules/esm/module_job:262:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:474:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:109:5)
counterGen: finally
エラー発生

説明：
gen3.throw() が呼ばれると、yield c の部分でエラー発生する。
ジェネレータ内の catch ブロックがこのエラーを捕捉し、"counterGen: catch: Error: エラー発生”が出力される。
catch ブロック内で throw e により再度エラーが投げられますが、
その前に finally ブロックが実行され、"counterGen: finally" が出力される。・

#### for-of
```js
for (const val of counterGen(3)) {
  console.log(val);
}

```

実行結果：
counterGen
counterGen: next
1
counterGen: next
2
counterGen: next
3
counterGen: finally

説明：
ループ開始時に next() が呼ばれ、counterGn の実行が開始されます。
各 yield で値が返され val に代入される。
ループが最後まで実行されると、finally ブロックが実行され "counterGen: finally" が出力される。

#### break
```js
for (const val of counterGen(5)) {
  console.log(val);
  if (val === 2) {
    break; // ループを中断
  }
}
```

実行結果：
counterGen
counterGen: next
1
counterGen: next
2
counterGen: finally

説明：
val が 2 のときに break が実行される。
for...of はループを抜ける前に、finally ブロックが実行される。

#### 例外処理
```js
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
```

実行結果：
counterGen
counterGen: next
1
counterGen: next
2
counterGen: finally
ループ内エラー

説明：
val が 2 のときに例外が throw される
例外が外側に伝播する前に、finally ブロックが呼び出される。
その後、例外が外側の catch ブロックで捕捉される。