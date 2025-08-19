export function stringifyJSON(json) {
  // null 
  // typeof null は 'object' となるため、最初に対処
  if (json === null) {
    return 'null';
  }

  const type = typeof json;

  // プリミティブ型
  switch (type) {
    case 'string':
      // 文字列はダブルクォートで囲み、特殊文字をエスケープ
      const escapeMap = {
        '"': '\\"',
        '\\': '\\\\',
        '\b': '\\b',
        '\f': '\\f',
        '\n': '\\n',
        '\r': '\\r',
        '\t': '\\t',
      };
      // 正規表現を使って、エスケープが必要な文字を一度に置換
      const escapedString = json.replace(/[\\"\u0000-\u001f]/g, (char) => {
        return escapeMap[char] || `\\u${('0000' + char.charCodeAt(0).toString(16)).slice(-4)}`;
      });
      return `"${escapedString}"`;

    case 'number':
      // Infinity, -Infinity, NaN は JSON では表現できないため null
      return isFinite(json) ? String(json) : 'null';

    case 'boolean':
      return String(json);

    case 'undefined':
    case 'function':
    case 'symbol':
      // これらの型はトップレベルの値としてはJSONに変換できず、undefinedを返却
      return undefined;
  }

  // 配列
  // typeofよりも先に Array.isArrayで判断
  if (Array.isArray(json)) {
    const elements = json.map(element => {
      const stringifiedElement = stringifyJSON(element);
      // 配列内の undefined や function は null に変換
      return stringifiedElement === undefined ? 'null' : stringifiedElement;
    });
    return `[${elements.join(',')}]`;
  }

  // オブジェクト
  if (type === 'object') {
    const keys = Object.keys(json);
    const pairs = [];

    for (const key of keys) {
      const val = json[key];
      const valType = typeof val;

      // オブジェクトの値が undefined, function, symbol の場合、
      // そのキーと値のペアは無視されます。
      if (valType === 'undefined' || valType === 'function' || valType === 'symbol') {
        continue;
      }

      // キーと値をそれぞれ文字列化し、コロンで連結
      const stringifiedKey = stringifyJSON(key);
      const stringifiedValue = stringifyJSON(val);
      pairs.push(`${stringifiedKey}:${stringifiedValue}`);
    }
    return `{${pairs.join(',')}}`;
  }

  return undefined;
};