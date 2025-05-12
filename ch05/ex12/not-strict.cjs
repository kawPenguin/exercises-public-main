// 暗黙のグローバル変数
undeclaredVariable = 10;
console.log("非 strict モード: undeclaredVariable =", undeclaredVariable);

// with 文 (非推奨だが非 strict モードでは動作する)
const obj = { x: 1 };
with (obj) {
  console.log("非 strict モード (with 文): x =", x);
}

// 関数呼び出し時の this (null または undefined はグローバルオブジェクトになる)
function checkThisApplyNonStrict() {
  console.log("非 strict モード (apply の this):", this.a);
}
global.a = 20;
checkThisApplyNonStrict.apply(null);

// 実行結果
/**
 * 非 strict モード: undeclaredVariable = 10
 * 非 strict モード (with 文): x = 1
 * 非 strict モード (apply の this): 20
 */