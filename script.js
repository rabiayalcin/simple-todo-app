console.log("JS calisiyor");

// 🔹 LocalStorage'dan al
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// 🔹 Sayfa açılınca eski todoları bas
todos.forEach(todo => {
    addTodoToList(todo);
});

button.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const newTodo = {
        text: taskText,
        completed: false
    };

    todos.push(newTodo);
    saveTodos();

    addTodoToList(newTodo);
    input.value = "";
});

// 🔹 Todo ekleme fonksiyonu
function addTodoToList(todo) {
    const listItem = document.createElement("li");

    if (todo.completed) {
        listItem.classList.add("completed");
    }

    const span = document.createElement("span");
    span.textContent = todo.text;

    span.addEventListener("click", () => {
        listItem.classList.toggle("completed");
        todo.completed = !todo.completed;
        saveTodos();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", () => {
        todos = todos.filter(t => t !== todo);
        saveTodos();
        listItem.remove();
    });

    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}

// 🔹 Storage'a kaydet
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
