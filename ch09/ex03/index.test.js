import { createPositiveNumber } from "./index.js";

describe('createPositiveNumber', () => {
  test('正の値で初期化し、getXとsetXが正常に動作する', () => {
    const positiveNum = createPositiveNumber(5);
    
    expect(positiveNum.getX()).toBe(5);
    
    positiveNum.setX(10);
    expect(positiveNum.getX()).toBe(10);
    
    expect(() => {
      positiveNum.setX(-1);
    }).toThrow("Xに正の値を与えてください");
    
    expect(() => {
      positiveNum.setX(0);
    }).toThrow("Xに正の値を与えてください");
  });
});