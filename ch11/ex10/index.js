// 特定の年と月(1-12)を数値の引数で受け取り、その月の日数を返す関数
export const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

// 期間の開始日と終了日を'YYYY-MM-DD'形式の日付で二つ引数で受け取り、その期間(開始日と終了日を含む)の土日以外の日数を返す関数
export const getWeekdaysInPeriod = (startDate, endDate) => {
  let count = 0;
  const current = new Date(startDate);
  const last = new Date(endDate);

  // currentがlastを超えるまでループ
  while (current <= last) {
    const dayOfWeek = current.getDay();
    // 0 = 日曜日, 6 = 土曜日
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      count++;
    }
    // 日付を1日進める
    current.setDate(current.getDate() + 1);
  }
  
  return count;
};

// 'YYYY-MM-DD'形式の日付とロケールを引数で受け取り、その日の曜日をロケールの形式の文字列で返す関数
export const getLocalizedDayOfWeek = (dateString, locale) => {
  const date = new Date(dateString);
  // DateTimeFormatを使用して、指定ロケールの曜日を取得
  return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
};

// ローカルのタイムゾーンにおいて先月 1 日 0 時 0 分 0 秒の Date オブジェクトを返す関数。ただし getMonth、setMonth は利用してはいけない。
export const getFirstDayOfLastMonth = () => {
  const date = new Date();
  
  // setDate(0)で、日付を先月の最終日に設定
  date.setDate(0); 
  
  // その状態から日付を1日に設定することで、先月１日に設定
  date.setDate(1);
  
  // 時刻を0時0分0秒0ミリ秒にリセット
  date.setHours(0, 0, 0, 0);
  
  return date;
};

