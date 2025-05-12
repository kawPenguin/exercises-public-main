/**
 * 設問 5.6
 * 
 * try-catch-finally の実行順序が確認できるコードを書きなさい。
 */

function testTryCatchFinally() {
    try {
        console.log("try");
        throw new Error("エラーが発生しました");
    } catch (error) {
        console.log("catch");
    } finally {
        console.log("finally");
    }
}

testTryCatchFinally();
// 出力結果
/**
 * try
 * catch
 * finally
 */