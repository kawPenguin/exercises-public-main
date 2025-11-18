const template = document.createElement("template");
template.innerHTML = `\
<style>
.completed {
  text-decoration: line-through;
}
</style>

<form id="new-todo-form">
  <input type="text" id="new-todo" placeholder="What needs to be done?" />
  <button>Add</button>
</form>
<ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.form = this.shadowRoot.querySelector("#new-todo-form");
    // TODO: 残りを実装
    this.input = this.shadowRoot.querySelector("#new-todo");
    this.todoList = this.shadowRoot.querySelector("#todo-list");
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo();
    });
  }

  addTodo() {
    const text = this.input.value.trim();
    if (!text) return;

    // li 要素を作成
    const li = document.createElement("li");

    // チェックボックスを作成
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      label.classList.toggle("completed", checkbox.checked);
    });

    // ラベルを作成
    const label = document.createElement("label");
    label.textContent = text;

    // 削除ボタンを作成
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    // 要素を組み立て
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    this.todoList.appendChild(li);

    // 入力をクリア
    this.input.value = "";
  }
}

customElements.define("todo-app", TodoApp);
