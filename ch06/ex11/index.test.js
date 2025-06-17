import { polarCartesianObject } from './index.js';

describe('polarCartesianObject', () => {
  beforeEach(() => {
    polarCartesianObject.r = 0;
    polarCartesianObject.theta = 0;
  });

  test('極座標を設定してデカルト座標が正しく計算される', () => {
    polarCartesianObject.r = 5;
    polarCartesianObject.theta = Math.PI / 4;

    expect(polarCartesianObject.x).toBeCloseTo(3.536, 3);
    expect(polarCartesianObject.y).toBeCloseTo(3.536, 3);
  });

  test('デカルト座標を設定して極座標が正しく計算される', () => {
    polarCartesianObject.x = 3;
    polarCartesianObject.y = 4;

    expect(polarCartesianObject.r).toBeCloseTo(5, 3);
    expect(polarCartesianObject.theta).toBeCloseTo(0.927, 3);
  });

  test('x に NaN を設定するとエラーが発生', () => {
    expect(() => {
      polarCartesianObject.x = NaN;
    }).toThrow('x cannot be NaN');
  });

  test('y に NaN を設定するとエラーが発生', () => {
    expect(() => {
      polarCartesianObject.y = NaN;
    }).toThrow('y cannot be NaN');
  });
});