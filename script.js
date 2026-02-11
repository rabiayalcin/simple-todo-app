
console.log("JS calisiyor");
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");


button.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", () => {
        listItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    input.value = "";
});

