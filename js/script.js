const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("task-input");
const taskContainer = document.getElementById("task-container");
const taskCountElement = document.getElementById("task-count");
const clearAll = document.getElementById("clear-button");

let count = 0;

taskInput.addEventListener("input", () => {
    addButton.disabled = taskInput.value.trim() === "";
});

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const newItem = document.createElement("div");
    newItem.className = "bg-white/10 w-[350px] h-[50px] rounded-lg mt-5 flex items-center text-white font-semibold px-5 relative max-md:w-[300px]";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    checkbox.addEventListener("change", () => {
        newItem.classList.toggle("completed", checkbox.checked);
    });

    newItem.addEventListener("dblclick", () => {
        newItem.remove();
        count--;
        taskCountElement.textContent = `You have ${count} Tasks`;
    });

    newItem.appendChild(checkbox);
    newItem.appendChild(taskTextElement);
    taskContainer.appendChild(newItem);

    count++;
    taskCountElement.textContent = `You have ${count} Tasks`;
    taskInput.value = "";
});

clearAll.addEventListener("click", () => {
    taskContainer.innerHTML = "";
    count = 0;
    taskCountElement.textContent = `You have 0 Tasks`;
});
