import { sequenceToObject } from "./index.ts";

describe('sequenceToObject', () => {
  test('正常な文字列と数値のペアでオブジェクトを作成する', () => {
    const result = sequenceToObject('name', 'John', 'age', 25, 'city', 'Tokyo');
    
    expect(result).toEqual({
      name: 'John',
      age: 25,
      city: 'Tokyo'
    });
  });
});