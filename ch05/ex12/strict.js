// 暗黙のグローバル変数の代入 (ReferenceError)
undeclaredVariable = 10;
console.log("strict モード: undeclaredVariable =", undeclaredVariable);

// with 文 (SyntaxError)
const objStrict = { y: 2 };
with (objStrict) {
  console.log("strict モード (with 文): y =", y);
}

// 関数呼び出し時の this (null または undefined はそのまま)
function checkThisApplyStrict() {
  console.log("strict モード (apply の this):", this ? this.a : undefined);
}
global.a = 20;
checkThisApplyStrict.apply(null);

// 実行結果
/**
 * file:///home/kawai/js-practice/exercises-public-main/ch05/ex12/strict.js:7
with (objStrict) {
^^^^

SyntaxError: Strict mode code may not include a with statement
    at compileSourceTextModule (node:internal/modules/esm/utils:337:16)
    at ModuleLoader.moduleStrategy (node:internal/modules/esm/translators:164:18)
    at callTranslator (node:internal/modules/esm/loader:429:14)
    at ModuleLoader.moduleProvider (node:internal/modules/esm/loader:435:30)
    at async ModuleJob._link (node:internal/modules/esm/module_job:106:19)

Node.js v22.3.0
 */