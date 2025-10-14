/**
 * 設問　14-4
 * ひらがな 1 文字とその UTF-16 コード単位をプロパティとしてもつ独自クラスを、50 音順(UTF-16 コード単位順)で<や>で比較、ソートできるよう Symbol.toPrimitive を用いて実装し、テストコードを書きなさい。
 * 文字列が期待される場合にはひらがなを、数字が期待される場合には UTF-16 コード単位を、どちらでもない場合にはひらがなを返すようにし、テストコードで確認しなさい。
 */

export class Hiragana {
  constructor(char) {
    if (typeof char !== 'string' || char.length !== 1) {
      throw new Error('ひらがな 1 文字を指定してください');
    }
    this.char = char;
    this.code = char.charCodeAt(0);
  }

  /**
   * @param {string} hint - "string", "number", "default"のいずれか
   * @returns {string|number}
   */
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case 'string':
        return this.char;
      case 'number':
        return this.code;
      case 'default':
        return this.char;
      default:
        return this.char;
    }
  }

  toString() {
    return this.char;
  }

  valueOf() {
    return this.code;
  }
}