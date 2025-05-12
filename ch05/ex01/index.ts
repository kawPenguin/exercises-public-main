/**
 * 設問 5.1
 * 
 * 文ブロックを使って同じ関数内に同じ変数名の const を複数宣言する関数を書きなさい。
 */

function blockFunction() {
    {
        const x = 1;
        console.log(x); // 1
    }
    {
        const x = 2;
        console.log(x); // 2
    }
    {
        const x = 3;
        console.log(x); // 3
    }
}

blockFunction();