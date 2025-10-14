# 設問15.01-03 - 1

index.html ファイル内の script タグから `type="module"` 属性を削除した場合、期待通り動作させるにはどうすべきか答えなさい。

# 回答

scriptタグに対して、defer属性を追加する

```html
 <script defer src="/ch15.01-03/ex01/index.js"></script>
```