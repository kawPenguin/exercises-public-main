import { parseJson } from "./index.ts";

describe('parseJson', () => {
  it('有効なJSON文字列（オブジェクト）を正しくパースする', () => {
    const validJsonObject = '{"name": "太郎", "age": 30}';
    const result = parseJson(validJsonObject);
    expect(result).toEqual({ success: true, data: { name: '太郎', age: 30 } });
  });

  it('有効なJSON文字列（配列）を正しくパースする', () => {
    const validJsonArray = '[1, 2, 3]';
    const result = parseJson(validJsonArray);
    expect(result).toEqual({ success: true, data: [1, 2, 3] });
  });

  it('空の文字列に対してエラーを返す', () => {
    const emptyString = '';
    const result = parseJson(emptyString);
    expect(result).toEqual({ success: false, error: expect.stringContaining('Unexpected end of JSON input') });
  });

  it('null のJSON文字列を正しくパースする', () => {
    const nullString = 'null';
    const result = parseJson(nullString);
    expect(result).toEqual({ success: true, data: null });
  });

  it('数値のJSON文字列を正しくパースする', () => {
    const numberString = '123';
    const result = parseJson(numberString);
    expect(result).toEqual({ success: true, data: 123 });
  });

  it('真偽値のJSON文字列を正しくパースする', () => {
    const trueString = 'true';
    const resultTrue = parseJson(trueString);
    expect(resultTrue).toEqual({ success: true, data: true });

    const falseString = 'false';
    const resultFalse = parseJson(falseString);
    expect(resultFalse).toEqual({ success: true, data: false });
  });
});