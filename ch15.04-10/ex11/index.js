const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const template = document.querySelector("#todo-template");

// { content: "...", completed: true or false } の配列
const todos = [];

// 現在のフィルタを取得する関数
function getCurrentFilter() {
  const hash = window.location.hash;
  if (hash === "#/active") {
    return "active";
  } else if (hash === "#/completed") {
    return "completed";
  }
  return "all";
}

// フィルタに基づいて ToDo をフィルタリング
function getFilteredTodos() {
  const filter = getCurrentFilter();
  if (filter === "active") {
    return todos.filter(todo => !todo.completed);
  } else if (filter === "completed") {
    return todos.filter(todo => todo.completed);
  }
  return todos;
}

function renderTodos() {
  const filteredTodos = getFilteredTodos();
  list.innerHTML = "";
  
  filteredTodos.forEach((todo) => {
    const clone = template.content.cloneNode(true);
    const li = clone.querySelector("li");
    const toggle = clone.querySelector("input");
    const label = clone.querySelector("label");
    const destroy = clone.querySelector("button");

    li.classList.toggle("completed", todo.completed);
    toggle.addEventListener("change", () => {
      todo.completed = toggle.checked;
      renderTodos();
    });
    label.textContent = todo.content;
    toggle.checked = todo.completed;
    destroy.addEventListener("click", () => {
      const index = todos.indexOf(todo);
      if (index > -1) {
        todos.splice(index, 1);
      }
      renderTodos();
    });

    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  input.value = "";

  todos.push({ content: todo, completed: false });
  renderTodos();
});

window.addEventListener("hashchange", () => {
  renderTodos();
});

// 初回レンダリング
renderTodos();