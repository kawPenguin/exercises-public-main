# 問題
JavaScript/TypeScript の有名な日付操作の OSS リポジトリである[date-fns](https://github.com/date-fns/date-fns)、[Luxon](https://github.com/moment/luxon)、[Day.js](https://github.com/iamkun/dayjs)のそれぞれが、src ディレクトリ以下がどのようなまとまりでモジュール分割されているか分析して、それぞれ 2、3 段落程度で記述しなさい。

# 回答
## data-fns
addHoursやaddQuartersなどの関数ごとにファイルが分割されている。
また、ファイル内には、index.tsとtest.tsがそれぞれ記載されており、関数を小さいモジュールとして管理している。

## Luxon
datatimeやduration、errorなど、各ファイルが責務の大きなクラスや関連機能をまとめて管理しており、
date-funsのように関数事の細分化は行われていない。

## Day.js
index.jsというコアになるファイルが存在し、pluginディレクトリ内でタイムゾーンなどの追加機能が格納されている。
「コア＋プラグイン」の形でモジュールが分割されている。