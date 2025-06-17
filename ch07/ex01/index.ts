/**
 * 設問 7.1
 * 2次元配列を行列として扱い、行列の加算・乗算を行う関数を作成しなさい。
 */

export function addMatrices(matrixA: number[][], matrixB: number[][]): number[][] {
    if (matrixA.length === 0 || matrixB.length === 0) {
        throw new Error("片方もしくは両方の行列の長さが0です。");
    }
    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        throw new Error("両方の行列が、同じ次元である必要があります。");
    }

    const result = [];
    for (let i = 0; i < matrixA.length; i++) {
    const row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
        row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
    }
    return result;
}

export function multiplyMatrices(matrixA: number[][], matrixB: number[][]): number[][] {
    if (matrixA.length === 0 || matrixB.length === 0) {
        throw new Error("片方もしくは両方の行列の長さが0です。");
    }
    if (matrixA[0].length !== matrixB.length) {
        throw new Error("行列の乗算ができません。");
    }

    const result = [];
    for (let r = 0; r < matrixA.length; r++) {
        const row = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for (let i = 0; i < matrixA[r].length; i++) {
                sum += matrixA[r][i] * matrixB[i][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}