/**
 * 設問 5.4
 * 
 * 初項と第 2 項を 1 とするフィボナッチ数列 (1, 1, 2, 3, ...) の最初の 10 個を配列として返す関数を、while 文によるループを使って書きなさい。
 * 同様に、do/while 文を使って書きなさい。
 * 同様に、for 文を使って書きなさい。
 */

/**
 * while文を使ったフィボナッチ数列の生成
 * @returns フィボナッチ数列の最初の10個の要素を持つ配列
 */
export function fibonacciWhile(): number[] {
    const result: number[] = [1, 1];
    let i = 2;
    while (i < 10) {
        result[i] = result[i - 1] + result[i - 2];
        i++;
    }
    return result;
}

/**
 * do/while文を使ったフィボナッチ数列の生成
 * @returns フィボナッチ数列の最初の10個の要素を持つ配列
 */
export function fibonacciDoWhile(): number[] {
    const result: number[] = [1, 1];
    let i = 2;
    do {
        result[i] = result[i - 1] + result[i - 2];
        i++;
    } while (i < 10);
    return result;
}

/**
 * for文を使ったフィボナッチ数列の生成
 * @returns フィボナッチ数列の最初の10個の要素を持つ配列
 */
export function fibonacciFor(): number[] {
    const result: number[] = [1, 1];
    for (let i = 2; i < 10; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result;
}