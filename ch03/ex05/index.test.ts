import { convertCrlfToLf, convertLfToCrlf } from "./index.ts";

describe('改行コード変換関数のテスト', () => {
    test("LFをCR+LFに正しく変換すること", () => {
        const input = "Hello\nWorld";
        const expected = "Hello\r\nWorld";
        expect(convertLfToCrlf(input)).toBe(expected);
    });

    test("CR+LFをLFに正しく変換すること", () => {
        const input = "Hello\r\nWorld";
        const expected = "Hello\nWorld";
        expect(convertCrlfToLf(input)).toBe(expected);
    })
    
});
  