/**
 * 設問14-6
 * 以下のような関数を作成しなさい。
 * - 任意のオブジェクトを引数に取る
 * - そのオブジェクトの任意のメソッド呼び出しに対して、以下を持つオブジェクトを配列に追加して保存する Proxy を作成する。言い換えると Proxy 経由のオブジェクトのメソッド呼び出し履歴を配列に記録する
 * - 呼び出された時刻
 * - メソッド名
 * - パラメータ(引数)
- Proxy と 配列 双方への参照を返却する
*/

export function makeProxyAndLogs(obj) {
  const logs = [];
  
  const proxy = new Proxy(obj, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      
      // メソッド(関数)の場合のみラップする
      if (typeof value === 'function') {
        return function(...args) {
          // メソッド呼び出しを記録
          logs.push({
            name: prop,
            args: args,
            timestamp: new Date()
          });
          
          // 元のメソッドを実行
          return value.apply(this === proxy ? target : this, args);
        };
      }
      
      // プロパティの場合はそのまま返す
      return value;
    }
  });
  
  return [proxy, logs];
}

// const a = {
//   p: 1,
//   f: (x, y) => {
//     return x + y;
//   },
// };

// const [proxy, logs] = makeProxyAndLogs(a);

// console.log(logs); // []
// console.log(proxy.p); // 1
// console.log(proxy.f(1, 2)); // 3
// console.log(logs); // [ { name: 'f', args: [ 1, 2 ], timestamp: 2025-9-30T11:26:22.230Z } ]