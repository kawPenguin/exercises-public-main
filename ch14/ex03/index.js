/**
 * 設問 14-3
 * [合成可能なダイアクリティカルマーク](https://ja.wikipedia.org/wiki/%E5%90%88%E6%88%90%E5%8F%AF%E8%83%BD%E3%81%AA%E3%83%80%E3%82%A4%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%86%E3%82%A3%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%BC%E3%82%AF)を無視して文字列比較を行うパターンクラス定義しなさい。
 * 合成可能なダイアクリティカルマークは文字列を Unicode 正規化して分解し、 `\u0300-\u036f` の範囲を取り除くと除去できます 
 * */

export class IgnoreAccentPattern {
  constructor(pattern) {
    this.pattern = pattern instanceof RegExp 
      ? pattern 
      : new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  }

  removeAccents(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  [Symbol.search](string) {
    const normalized = this.removeAccents(string);
    const pattern = new RegExp(
      this.removeAccents(this.pattern.source),
      this.pattern.flags
    );
    return normalized.search(pattern);
  }

  [Symbol.match](string) {
    const normalized = this.removeAccents(string);
    const pattern = new RegExp(
      this.removeAccents(this.pattern.source),
      this.pattern.flags
    );
    return normalized.match(pattern);
  }
}