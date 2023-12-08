document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const clearAllBtn = document.createElement("button");
    clearAllBtn.textContent = "Clear All";
    clearAllBtn.classList.add("clearAllBtn");

    clearAllBtn.addEventListener("click", function () {
        taskList.innerHTML = "";
        localStorage.removeItem("tasks"); 
    });

    taskForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const taskContent = taskInput.value.trim();
        if (taskContent !== "") {
            addTask(taskContent);
            taskInput.value = "";

            saveTasksToLocalStorage();
        } else {
            alert("Please enter a task!");
        }
    });

    function addTask(taskContent) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");

        const taskText = document.createElement("span");
        taskText.textContent = taskContent;

        const actions = document.createElement("div");
        actions.classList.add("actions");

        const markDoneBtn = document.createElement("button");
        markDoneBtn.classList.add("markDoneBtn");
        markDoneBtn.textContent = " Done";
        markDoneBtn.addEventListener("click", function () {
            taskText.classList.toggle("completed");
            saveTasksToLocalStorage();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            taskItem.remove();
            saveTasksToLocalStorage();
        });

        actions.appendChild(markDoneBtn);
        actions.appendChild(deleteBtn);

        taskItem.appendChild(taskText);
        taskItem.appendChild(actions);
        taskList.appendChild(taskItem);
        taskList.parentNode.appendChild(clearAllBtn);

        saveTasksToLocalStorage(); 
    }

    function saveTasksToLocalStorage() {
        const tasks = document.querySelectorAll(".task span");
        const tasksContent = Array.from(tasks).map(task => task.textContent);
        localStorage.setItem("tasks", JSON.stringify(tasksContent));
    }

    function loadTasksFromLocalStorage() {
        const tasksContent = JSON.parse(localStorage.getItem("tasks"));
        if (tasksContent) {
            tasksContent.forEach(taskContent => addTask(taskContent));
        }
    }

    loadTasksFromLocalStorage(); 
});
