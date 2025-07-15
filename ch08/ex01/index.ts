/**
 * 以下のアロー関数を簡潔に記載しなさい。なお、引数や戻り値の括弧の要否などをコードコメントで説明しなさい。
 * 1. 自然数`n`と英数文字`c`を引数にとり、文字`c`を`n`回コンソール出力してから文字`c`を`n`個含む配列を返す
 * 2. 数値`x`を引数にとり、`x`の二乗の数値を返す
 * 3. 引数なしで、現在時刻のプロパティ`now`を含むオブジェクトを返す
 */


//1. 自然数`n`と英数文字`c`を引数にとり、文字`c`を`n`回コンソール出力してから文字`c`を`n`個含む配列を返す
// 引数があり、関数内もreturnのみではないため、引数と戻り値の括弧は必要である。
const outputC = (n:number, c:string) => {
    console.log(c.repeat(n));
    return Array.from({length:n}, ()=> c);
};

const output = outputC(5, "hello");
console.log(output);

//2. 数値`x`を引数にとり、`x`の二乗の数値を返す
//アロー関数内がreturnのみであるため、戻り値の括弧が不要である。
const squaredX = (x:number) => x**2;

console.log(squaredX(5));

//3. 引数なしで、現在時刻のプロパティ`now`を含むオブジェクトを返す
//引数はないが、丸括弧の記述は必要である。
const nowTime = () => ({
  now: Date.now()
});

console.log(nowTime());