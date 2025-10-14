// 変数の宣言
const declaredVariable = 10;
console.log("strict モード (修正済): declaredVariable =", declaredVariable);

// with 文の削除
const objStrictFixed = { y: 2 };
console.log("strict モード (修正済、with 文): y =", objStrictFixed.y);

// 関数呼び出し時の this を明示的にバインド
function checkThisApplyStrictFixed() {
  console.log("strict モード (修正済、apply の this):", this ? this.a : undefined);
}
const context = { a: 30 };
checkThisApplyStrictFixed.apply(context);

// 実行結果
/**
 * strict モード (修正済): declaredVariable = 10
 * strict モード (修正済、with 文): y = 2
 * strict モード (修正済、apply の this): 30
 */