import { bigToLittle, littleToBig } from "./index.js";

describe('エンディアン変換関数のテスト', () => {

  // テストで使用するデータ
  const originalLittleEndian = new Uint32Array([
    0x12345678, // 一般的な値
    0xAABBCCDD, // もう一つの一般的な値
    0x00000000, // ゼロ
    0xFFFFFFFF  // 全ビットが1
  ]);

  const expectedBigEndian = new Uint32Array([
    0x78563412,
    0xDDCCBBAA,
    0x00000000, 
    0xFFFFFFFF  
  ]);

  describe('littleToBig', () => {
    it('リトルエンディアンのUint32Arrayを正しくビッグエンディアンに変換する', () => {
      const result = littleToBig(originalLittleEndian);
      expect(result).toEqual(expectedBigEndian);
    });
  });

  describe('bigToLittle', () => {
    it('ビッグエンディアンのUint32Arrayを正しくリトルエンディアンに変換する', () => {
      const result = bigToLittle(expectedBigEndian);
      expect(result).toEqual(originalLittleEndian);
    });
  });

  describe('相互変換', () => {
    it('littleToBigで変換した結果をbigToLittleで変換すると元に戻る', () => {
      const convertedToBig = littleToBig(originalLittleEndian);
      const restoredToLittle = bigToLittle(convertedToBig);
      expect(restoredToLittle).toEqual(originalLittleEndian);
    });
  });
});
