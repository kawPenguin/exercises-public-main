// エラトステネスの篩

/**
 * nから始まる整数の無限シーケンスを生成するジェネレータ
 */
function* integersFrom(n) {
  while (true) {
    yield n++;
  }
}

/**
 * ジェネレータを受け取り、フィルタリングした新しいジェネレータを返す
 */
function* filter(generator, predicate) {
  for (const value of generator) {
    if (predicate(value)) {
      yield value;
    }
  }
}

/**
 * 遅延評価を用いて素数を無限に生成するジェネレータ
 */
export function* primes() {
  // 2から始まる整数の無限列
  let numbers = integersFrom(2);

  while (true) {
    // 列の先頭の数は必ず素数
    const p = numbers.next().value;
    yield p;

    // 現在の列から、今見つかった素数 p の倍数を除いた新しい列を作成する
    numbers = filter(numbers, n => n % p !== 0);
  }
}