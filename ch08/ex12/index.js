export function f(bodyStr) {
  const args = [];
  
  // より正確な最大引数番号の検索
  let maxArgNum = 0;
  const matches = bodyStr.match(/\$(\d+)/g);
  if (matches) {
    for (const match of matches) {
      const num = parseInt(match.substring(1));
      if (num > maxArgNum) {
        maxArgNum = num;
      }
    }
  }
  
  // 引数リストの作成
  for (let i = 1; i <= maxArgNum; i++) {
    args.push(`arg${i}`);
  }
  
  // プレースホルダーの置換
  let processedBody = bodyStr;
  for (let i = 1; i <= maxArgNum; i++) {
    processedBody = processedBody.replace(new RegExp(`\\$${i}`, 'g'), `arg${i}`);
  }
  
  return Function(...args, `return ${processedBody};`);
}