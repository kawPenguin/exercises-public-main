const editorFront = document.getElementById("editor-front");
const editorBack = document.getElementById("editor-back");

if (editorFront && editorBack) {
  // 1. div 要素をクリックすると input 要素が focus される
  editorFront.addEventListener("click", () => {
    editorBack.focus();
  });

  // 2. div 要素は通常白色で input 要素に focus されると灰色 (silver)になる
  editorBack.addEventListener("focus", () => {
    editorFront.style.backgroundColor = "silver";
  });

  // input 要素から focus が外れると白色に戻る
  editorBack.addEventListener("blur", () => {
    editorFront.style.backgroundColor = "white";
  });

  // 3. input 要素に入力された text は div 要素にも表示される
  editorBack.addEventListener("input", (event) => {
    editorFront.textContent = event.target.value;
  });

  // 初期状態の背景色を設定
  editorFront.style.backgroundColor = "white";
}