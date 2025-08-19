# 予測
型付き配列は、要素の型が固定されている。
JavaScriptが型の推論を行う必要がなくなるため、型付き配列の方が大幅に早くなると考えられる。

# 実行結果
## [100, 200, 300]の場合
arrayMultiply: 430.2308680000001
typedArrayMultiply: 527.3439819999999

## [200, 400, 500]の場合
arrayMultiply: 5072.162197
typedArrayMultiply: 5752.54493

## [500, 600, 700]の場合
arrayMultiply: 27211.444020000003
typedArrayMultiply: 31080.162284000005