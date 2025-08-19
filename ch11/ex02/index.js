// f はオブジェクトを1つ引数に取る関数
export function cache(f) {
  // この関数を実装する
  const cache = new WeakMap();

  return function(obj) {
    if (cache.has(obj)) {
      return cache.get(obj);
    } else {
      const result = f(obj);
      cache.set(obj, result);
      return result;
    }
  };
}

function slowFn(obj) {
  // 時間のかかる処理
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }

  return `Result for ${obj.id}`;

}

// cachedSlowFnを同じ引数で複数回呼び出すと、2回目以降はキャッシュが返る
const cachedSlowFn = cache(slowFn);