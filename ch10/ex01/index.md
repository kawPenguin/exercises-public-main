# 設問
以下のページに対応する sets.cjs、stats.cjs、index.cjs を書き写して作成し、それらを Webpack で mode を none、developemnt、production のそれぞれでバンドルし、各結果が、p.276 の上のコードに対してどの様な差異があるかを、それぞれ 1 行程度で記述しなさい。

# 回答
## --mode=none
requireで指定したモジュールを、1つのファイルにそのまままとめている。

## --mode=development
requireで指定したモジュールのコードが、eval関数内に格納されている。

## --mode=production
最適化が行われ、使用されていないコードや不要な空白などが削除されている。