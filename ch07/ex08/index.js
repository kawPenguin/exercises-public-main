export function reverse(str) {

  // 書記素単位でセグメント化するためのSegmenterを作成
  const segmenter = new Intl.Segmenter('ja', { granularity: "grapheme" });
  
  // 文字列を書記素単位に分割
  const segments = Array.from(segmenter.segment(str), segment => segment.segment);
  
  // 書記素の配列を反転して結合
  return segments.reverse().join('');
}