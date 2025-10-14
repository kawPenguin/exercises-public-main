## 設問15.01-03 - 7
## 問題

自分が運営する販売サイトに YouTube のトップページを iframe で組込み、更に自作の script.js により iframe 内のデータを分析しようとしています。

```html
<iframe id="other" src="https://www.youtube.com/"></iframe>
<script src="./script.js"></script>
...
```

```js
async () => {
  // YouTube が利用者に推薦する動画タイトルを取得すれば、利用者に最適な商品セットを表示できるのではないか？
  const titles = document
    .getElementById("other")
    .contentWindowquerySelectorAll("#video-title");
  for (const t of titles) {
    await fetch("your-server-path", { method: "POST", body: t.textContent });
  }
};
```

しかし、トップページを読み込むとエラーになります。用語「クリックジャッキング」を調べて理由を説明しなさい。<br>
また、script.js も動作しません。ここで、同一オリジンポリシーがなく、iframe 内の他サイトの DOM 変更が可能な仕様を想定し、どのような重大な問題が発生しうるか記載しなさい。<br>

## 回答
### トップページを読み込むとエラーになる原因
クリックジャッキングは、攻撃者が透明または視覚的に隠した iframe 内に標的サイトを埋め込み、ユーザーに意図しない操作をさせる攻撃手法のことである。<br>
Youtubeは、X-Frame-OptionsヘッダーやCSPのframe-ancestorsを使用して、自サイトがほかのiframe内に埋め込まれることを禁止している。<br>
そのため、Youtubeが埋め込まれたトップページを開くと、エラーになる。<br>

### 他サイトのDOMが変更可能な使用を想定したときに、どのような重大な問題が発生するか
個人情報の窃取やフォーム入力値の盗聴などが発生すると考える。<br>