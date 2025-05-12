# 設問 5.7

以下のプログラムの出力を予想し、実際の実行結果を確認しなさい。

```
function f() {
    try {
        return true;
    } finally {
        return false;
    }
}

console.log(f());
```

# 回答
## 予想

finallyブロックは tryブロックが処理完了したのち、必ず実行される。
そのため、true falseの両方が表示される。

## 実行結果

false

## 実行結果からの考察

tryブロック内で return true;が実行された時点で、関数はtrueを返そうとするが、
その直後にfinallyブロックが実行される事は保証されている。
そして、finallyブロック内でreturn false;が実行されると、
その時点でのreturnが最終的な戻り値として扱われ、tryブロックで返そうとした値(true)
が上書きされる。