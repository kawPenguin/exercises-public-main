/**
 * 問題4.2
 * 
 * 三項演算子を用いた複雑な式は可読性が低く、一般的に避けたほうが良いとされている。
 * 複雑な式の例として、以下のプログラムは 1 から 100 までの [FizzBuzz](https://ja.wikipedia.org/wiki/Fizz_Buzz) を出力する。
 * このプログラムを三項演算子のかわりに `if` 文を用いて実装し直しなさい。
 * 
 * ```javascript
 * for (i = 1; i < 101; i++)
 *   console.log(i % 15 ? (i % 3 ? (i % 5 ? i : "Buzz") : "Fizz") : "FizzBuzz");
 * ```
 */


/**
 * 三項演算子を用いた FizzBuzz の実装
 */
export function ternary_operator_fizzBuzz() {
    for (let i = 1; i < 101; i++){
        console.log(i % 15 ? (i % 3 ? (i % 5 ? i : "Buzz") : "Fizz") : "FizzBuzz");
    }
}

/**
 * if文を用いた FizzBuzz の実装
 */
export function fizzBuzz() {
    for (let i: number = 1; i < 101; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}