# 出力結果

0 1 0
1 1 0

# 考察
処理としては、次のように処理されていると考える。

const c = a; 
++b; 

console.log(a, b, c); //1回目のconsole.log

const e = a++;
b;

console.log(a, b, e);

eの値が0であることについては、
const e = a++は、eにaの値が代入されてからa++の実行が処理されているためである。
