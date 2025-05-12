# 設問5.8

以下のプログラムの出力を予想し、実際の実行結果を確認しなさい。

```
let x = 0;

for(let i = 1; i <= 5; i++) {
    x = i;
    try {
        throw Error();
    } catch {
        break;
    } finally {
        continue;
    }
}

console.log(x);
```
# 回答
## 予想

finallyブロックは必ず実行されるため、finallyブロック内のcontinueが実行される
そのため、console.log(x)の値は"5"が出力されると考える。

## 実行結果

5