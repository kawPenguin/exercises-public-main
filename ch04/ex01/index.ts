/**
 * 問題 4.1
 * 
 * 実部と虚部をプロパティとして持つ 2 つの複素数オブジェクトを引数として
 * 四則演算の結果を返す関数 `add`、`sub`、`mul`、`div` を実装しなさい。
 */

/**
 * 複素数を表すオブジェクトの型定義
 * @typedef {object} complex_num
 * @property {number} real_num - 複素数の実部
 * @property {number} imaginary_num - 複素数の虚部
 */
export type complex_num = {
    real_num: number,
    imaginary_num : number
}

/**
 * 二つの複素数を加算
 *
 * @param {complex_num} input1 - 最初の複素数
 * @param {complex_num} input2 - 二番目の複素数
 * @returns {complex_num} 二つの複素数の和。実部同士、虚部同士がそれぞれ加算された新しい複素数を返す
 */
export function add (input1:complex_num, input2:complex_num) : complex_num{

    const result: complex_num = {
        real_num: input1.real_num + input2.real_num,
        imaginary_num: input1.imaginary_num + input2.imaginary_num
    };

    return result;
}

/**
 * 二つの複素数を減算
 *
 * @param {complex_num} input1 - 最初の複素数
 * @param {complex_num} input2 - 二番目の複素数
 * @returns {complex_num} 二つの複素数の差。実部同士、虚部同士がそれぞれ減算された新しい複素数を返す
 */
export function sub(input1 :complex_num, input2: complex_num) : complex_num {
    
    const result : complex_num = {
        real_num: input1.real_num - input2.real_num,
        imaginary_num: input1.imaginary_num - input2.imaginary_num
    }

    return result;
}

/**
 * 二つの複素数を掛ける
 * 
 * @param {complex_num} input1 - 最初の複素数
 * @param {complex_num} input2 - 二番目の複素数
 * @returns {complex_num} 二つの複素数の積
 */
export function mul(input1 :complex_num, input2: complex_num) : complex_num {

    const result : complex_num = {
        real_num: (input1.real_num * input2.real_num) + (input1.imaginary_num * input2.imaginary_num * (-1)),
        imaginary_num: (input1.real_num * input2.imaginary_num) + (input1.imaginary_num * input2.real_num)
    }

    return result;
}

/**
 * 二つの複素数を割る
 * @param {complex_num} input1 - 最初の複素数(分子)
 * @param {complex_num} input2 - 二番目の複素数(分母)
 * @returns {complex_num | null} 二つの複素数の割り算結果、計算不可の場合はnullを返す。
 * 
 */
export function div(input1 :complex_num, input2: complex_num) : complex_num | null {

    if(input2.real_num === 0 && input2.imaginary_num === 0){
        console.log("分母を0にすることはできません。");
        return null;
    }

    // 共役複素数 (c - di)
    const conjugate: complex_num = {
        real_num: input2.real_num,
        imaginary_num: -input2.imaginary_num
    };

    const mul_result = mul(input1, conjugate);

    const result : complex_num = {
        real_num : mul_result.real_num / (input2.real_num ** 2 + input2.imaginary_num ** 2),
        imaginary_num : mul_result.imaginary_num / (input2.real_num ** 2 + input2.imaginary_num ** 2)
    }

    return result;

}