// DOM要素が解析される前にスクリプトが走るとエラーになる
// そこで、DonContentLoadedイベントが発生するのを待ってから、実行する。

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("1000").innerHTML = "Hello";
});