import { DynamicSizeArray } from "./index.js";

describe('DynamicSizeArray', () => {
  describe('基本的な機能テスト', () => {
    let arr;

    beforeEach(() => {
      arr = new DynamicSizeArray();
    });

    test('push操作で要素を追加できる', () => {
      arr.push('A');
      arr.push('B');
      arr.push('C');
      
      expect(arr.length()).toBe(3);
      expect(arr.get(0)).toBe('A');
      expect(arr.get(1)).toBe('B');
      expect(arr.get(2)).toBe('C');
    });

    test('set操作で要素を更新できる', () => {
      arr.push('A');
      arr.push('B');
      
      arr.set(1, 'X');
      
      expect(arr.get(1)).toBe('X');
      expect(arr.get(0)).toBe('A'); // 他の要素は変わらない
    });

    test('初期サイズを超えた場合に配列が拡張される', () => {
      // 初期サイズは4なので、5個目を追加した時に拡張される
      for (let i = 0; i < 5; i++) {
        arr.push(i);
      }
      
      expect(arr.length()).toBe(5);
      expect(arr.get(4)).toBe(4);
    });

    test('配列拡張時に既存の値が保持される', () => {
      // 8個の要素を追加（初期サイズ4を超えて拡張される）
      for (let i = 0; i < 8; i++) {
        arr.push(i);
      }
      
      expect(arr.length()).toBe(8);
      
      // すべての値が正しく保持されているかチェック
      for (let i = 0; i < 8; i++) {
        expect(arr.get(i)).toBe(i);
      }
    });
  });
});