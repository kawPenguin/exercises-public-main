import { Hiragana } from "./index.js";

describe('Hiragana クラス', () => {
  it("文字列コンテキストではひらがなを返す", () => {
    const a = new Hiragana('あ');
    expect(String(a)).toBe('あ');
    expect(`${a}`).toBe('あ');
  });

  it("数値コンテキストでは UTF-16 コード単位を返す", () => {
    const a = new Hiragana('あ');
    expect(Number(a)).toBe(12354);
    expect(+a).toBe(12354);
  });

  it("デフォルトコンテキストではひらがなを返す", () => {
    const a = new Hiragana('あ');
    expect(a + 'です').toBe('あです');
  });

  it("< > で UTF-16 コード単位順に比較できる", () => {
    const a = new Hiragana('あ');
    const ka = new Hiragana('か');
    expect(a < ka).toBe(true);
    expect(ka > a).toBe(true);
  });
  it("ひらがな2文字を渡すとエラーになる", () => {
    expect(() => new Hiragana("あい")).toThrow("ひらがな 1 文字を指定してください");
  });
});