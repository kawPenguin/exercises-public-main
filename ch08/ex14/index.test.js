import { any, catching } from "./index.js";

describe('any関数のテスト', () => {
  test('いずれかの関数がtrueを返すときにtrueを返す', () => {
    const isEven = (n) => n % 2 === 0;
    const isGreaterThan10 = (n) => n > 10;
    
    const anyCondition = any(isEven, isGreaterThan10);
    
    expect(anyCondition(12)).toBe(true); 
    expect(anyCondition(15)).toBe(true); 
    expect(anyCondition(7)).toBe(false); 
  });
});

describe('catching関数のテスト', () => {
  test('エラーが発生しない場合は元の関数の結果を返す', () => {
    const divide = (a, b) => a / b;
    const errorHandler = (error) => 'エラーが発生しました';
    
    const safeDivide = catching(divide, errorHandler);
    
    expect(safeDivide(10, 2)).toBe(5);
    expect(safeDivide(15, 3)).toBe(5);
  });
  
  test('エラーが発生した場合はエラーハンドラーの結果を返す', () => {
    const throwError = () => {
      throw new Error('テストエラー');
    };
    const errorHandler = (error) => `エラーをキャッチしました: ${error.message}`;
    
    const safeFunction = catching(throwError, errorHandler);
    
    expect(safeFunction()).toBe('エラーをキャッチしました: テストエラー');
  });
});