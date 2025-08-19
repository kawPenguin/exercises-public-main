export const sortJapanese = (arr) => {
  return arr.sort((a, b) => {
    // 'ja'ロケールを指定し、sensitivityを'base'に設定することで、濁点などを無視可能
    return a.localeCompare(b, 'ja', { sensitivity: 'base' });
  });
};

export const toJapaneseDateString = (date) => {
  // Intl.DateTimeFormatを使用して和暦に変換
  const formatter = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
    era: 'long',   // 元号を漢字で (例: "令和")
    year: 'numeric', // 年
    month: 'numeric', // 月
    day: 'numeric',   // 日
  });

  const parts = formatter.formatToParts(date);
  const era = parts.find(p => p.type === 'era').value;
  const year = parts.find(p => p.type === 'year').value;
  const month = parts.find(p => p.type === 'month').value;
  const day = parts.find(p => p.type === 'day').value;

  // 「1年」の場合は「元年」に置換する
  const yearString = year === '1' ? '元' : year;

  return `${era}${yearString}年${month}月${day}日`;
};
