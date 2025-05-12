import { has31DaysIfElse, has31DaysSwitch } from "./index.ts";

describe('has31DaysIfElse', () => {
  it("31日を持つ月に対して true を返す", () => {
    expect(has31DaysIfElse('Jan')).toBe(true);
    expect(has31DaysIfElse('Mar')).toBe(true);
    expect(has31DaysIfElse('May')).toBe(true);
    expect(has31DaysIfElse('Jul')).toBe(true);
    expect(has31DaysIfElse('Aug')).toBe(true);
    expect(has31DaysIfElse('Oct')).toBe(true);
    expect(has31DaysIfElse('Dec')).toBe(true);
  });

  it("31日を持たない月に対してfalse", () => {
    expect(has31DaysIfElse('Feb')).toBe(false);
    expect(has31DaysIfElse('Apr')).toBe(false);
    expect(has31DaysIfElse('Jun')).toBe(false);
    expect(has31DaysIfElse('Sep')).toBe(false);
    expect(has31DaysIfElse('Nov')).toBe(false);
  });
});

describe('has31DaysSwitch', () => {
    it("31日を持つ月に対して true を返す", () => {
        expect(has31DaysSwitch('Jan')).toBe(true);
        expect(has31DaysSwitch('Mar')).toBe(true);
        expect(has31DaysSwitch('May')).toBe(true);
        expect(has31DaysSwitch('Jul')).toBe(true);
        expect(has31DaysSwitch('Aug')).toBe(true);
        expect(has31DaysSwitch('Oct')).toBe(true);
        expect(has31DaysSwitch('Dec')).toBe(true);
    });
    
    it("31日を持たない月に対してfalse", () => {
        expect(has31DaysSwitch('Feb')).toBe(false);
        expect(has31DaysSwitch('Apr')).toBe(false);
        expect(has31DaysSwitch('Jun')).toBe(false);
        expect(has31DaysSwitch('Sep')).toBe(false);
        expect(has31DaysSwitch('Nov')).toBe(false);
    });
});