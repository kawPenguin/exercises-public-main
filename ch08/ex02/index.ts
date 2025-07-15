/**
 * べき乗 ($x^n$) を計算する関数を、べき乗演算子 (`**`) を使わずに [時間計算量](https://atcoder.jp/contests/apg4b/tasks/APG4b_w?lang=ja) が $O(\ln n)$ となるように再帰およびループでぞれぞれ実装しなさい。$n$ は正の整数とする。
 */

export const pow = (x:number, n:number): number => {
    if(n == 1){
        return  x;
    }else if(n%2 === 0){
        return pow(x, n/2) * pow(x, n/2);
    }else{
        return x * pow(x, n-1);
    }
}

const result = pow(5, 4);
console.log(result);