/**
 * 設問 14-5
 * テンプレートリテラルを受けとり文字列を返す関数を作成しなさい。ただし戻り値において補間値はその値ではなく、その型名を展開しなさい。（厳密な型でなくて可）
 */


export function template(strings, ...values) {
  let result = '';
  
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    
    if (i < values.length) {
      const value = values[i];
      let typeName = typeof value;
      
      // nullの場合は特別に"object"として扱う
      if (value === null) {
        typeName = 'object';
      }
      
      result += typeName;
    }
  }
  
  return result;
}