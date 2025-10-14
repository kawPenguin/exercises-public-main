
const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

form.addEventListener("submit", (e) => {
  // フォームのデフォルト送信動作をキャンセル
  // 理由: フォーム送信によるページリロードを防ぐため
  e.preventDefault();

  // 両端からホワイトスペースを取り除いた文字列を取得する
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  // new-todo の中身は空にする
  input.value = "";

  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = todo;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  // toggle が変化した際に label.style.textDecorationLine を変更
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      label.style.textDecorationLine = "line-through";
    } else {
      label.style.textDecorationLine = "none";
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";
  // destroy がクリックされた場合に elem を削除
  destroy.addEventListener("click", () => {
    elem.remove();
  });

  // elem 内に toggle, label, destroy を追加
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  
  list.prepend(elem);
});