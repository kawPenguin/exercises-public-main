import { getDaysInMonth, getFirstDayOfLastMonth, getLocalizedDayOfWeek, getWeekdaysInPeriod } from "./index.js";

describe('getDaysInMonth', () => {
  it('その月の日付', () => {
    // 31日の月
    expect(getDaysInMonth(2023, 8)).toBe(31);
    // 30日の月
    expect(getDaysInMonth(2023, 9)).toBe(30);
    // うるう年ではない2月
    expect(getDaysInMonth(2023, 2)).toBe(28);
    // うるう年の2月
    expect(getDaysInMonth(2024, 2)).toBe(29);
  });
});

describe('getWeekdaysInPeriod', () => {
  it("その期間(開始日と終了日を含む)の土日以外の日数を返す", () => {
    // 週末を1回またぐ期間
    const startDate1 = '2023-08-01'; // 火曜日
    const endDate1 = '2023-08-10'; // 木曜日
    expect(getWeekdaysInPeriod(startDate1, endDate1)).toBe(8);

    // 週末を含まない期間
    const startDate2 = '2023-08-07'; // 月曜日
    const endDate2 = '2023-08-09'; // 水曜日
    expect(getWeekdaysInPeriod(startDate2, endDate2)).toBe(3);
  });
});

describe('getLocalizedDayOfWeek', () => {
  it('その日の曜日をロケールの形式の文字列で返す', () => {
    const date = '2025-12-25'; // この日は木曜日
    expect(getLocalizedDayOfWeek(date, 'ja-JP')).toBe('木曜日');
    expect(getLocalizedDayOfWeek(date, 'en-US')).toBe('Thursday');
    expect(getLocalizedDayOfWeek(date, 'ko-KR')).toBe('목요일');
  });
});

describe('getFirstDayOfLastMonth', () => {
  // タイマーをモック（偽物）に置き換える設定
  beforeEach(() => {
    jest.useFakeTimers();
  });

  // テスト後にタイマーを本物に戻す
  afterEach(() => {
    jest.useRealTimers();
  });

  it('ローカルのタイムゾーンにおいて先月 1 日 0 時 0 分 0 秒の Date オブジェクトを返す関数', () => {
    // テストを実行する「今日」の日付を2025年8月19日に固定
    jest.setSystemTime(new Date('2025-08-19T10:20:30'));

    const result = getFirstDayOfLastMonth();
    const expected = new Date('2025-07-01T00:00:00');
    expect(result).toEqual(expected);

    // 年をまたぐケースもテスト
    jest.setSystemTime(new Date('2024-01-15T10:00:00'));
    
    const result2 = getFirstDayOfLastMonth();
    const expected2 = new Date('2023-12-01T00:00:00');
    expect(result2).toEqual(expected2);
  });
});