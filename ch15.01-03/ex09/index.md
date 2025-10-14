## 設問15.01-03 - 9
## 問題
React, jQuery などの主要なフロントエンドフレームワークを選び、そのフレームワークを使っていればどのように XSS 対策がされるか、また使っていてもどのような XSS の危険が残るか記述しなさい。

## 回答
### フレームワーク
React<br>

### XSS対策
reactが提供しているXSS対策として、以下がある
1. 自動エスケープ機能
"< div>{userInput}</ div>"のように記載すれば、userInput内の< script>などは自動的に無害化される。
そのため、開発者が特別な対策を行う必要がない。

### XSSの危険性
以下のようなことを行った場合、XSSの危険は残る
1. dangerouslySetInnerHTMLの利用
```jsx
// HTMLがそのまま挿入される
<div dangerouslySetInnerHTML={{__html: userInput}} />
```

1. イベントハンドラへの動的コード
```jsx
<button onClick={eval(userInput)}>クリック</button>
```