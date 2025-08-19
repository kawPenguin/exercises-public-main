// add 関数
export function add2(a, b) {
  return a + b;
}

// デフォルトエクスポート
export default class User2 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`こんにちは、${this.name}です。`);
  }
}