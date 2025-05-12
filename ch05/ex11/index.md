# 問題 5.11

Node で debugger 文を使ってデバッグする方法を調べなさい。

# 回答

ブレークポイントを置きたい所に、debuggerと書く。
そののち、node inspect xxx.jsとコマンドを打つ。

以下のように表示されるため、cでデバッグを進める。

< Debugger listening on ws://127.0.0.1:9229/faf4b076-4e8e-4bdd-beec-ca8293e7df34
< For help, see: https://nodejs.org/en/docs/inspector
< 
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
< 
Break on start in index.js:1
> 1 function add(a, b){
  2   let sum = a + b;
  3   debugger; 
debug> c
break in index.js:3
  1 function add(a, b){
  2   let sum = a + b;
> 3   debugger; 
  4   return sum;
  5 }
debug> c
< 和: 15
< 
break in index.js:17
 15 console.log(`和: ${resultSum}`);
 16 
>17 debugger; 
 18 
 19 let resultProduct = multiply(num1, num2);
debug> c
< 積: 50
< 
< Waiting for the debugger to disconnect...
< 
debug> 