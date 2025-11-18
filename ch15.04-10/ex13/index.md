## ex13
### 設問：hashbangと呼ばれるスタイルがなぜ存在したのか？

### 回答
Hashbang（#!/）は SEO対策 のために使われていた。
従来、SPAでルーティングを実現するには # を使うしかなかったが、検索エンジンは# 以降を無視するため、すべてのページが同じコンテンツとして扱われていた。
そこで2009年、Googleが「AJAX クローリング仕様」を提案した。#! で始まるURLを特別扱いし、クローラが example.com/#!/products を見つけると、サーバーは静的HTMLスナップショットを返すことで、検索エンジンにコンテンツをインデックスさせる仕組みとなっていた。
しかし検索エンジンでJavaScript実行が可能になったため、2015年にGoogleはこの仕様を廃止した。

### 参考
https://developers.google.com/search/blog/2015/10/deprecating-our-ajax-crawling-scheme?hl=ja