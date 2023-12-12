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
        } else {
            alert("Please enter a task!");
        }
    });

    function addTask(taskContent, isCompleted = false) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");

        const taskText = document.createElement("span");
        taskText.textContent = taskContent;

        const action = document.createElement("div");
        action.classList.add("action");

        if (isCompleted) {
            taskText.classList.add("completed");
        }

        const markDoneBtn = document.createElement("button");
        markDoneBtn.classList.add("markDoneBtn");
        markDoneBtn.textContent = "Done";
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

        action.appendChild(markDoneBtn);
        action.appendChild(deleteBtn);

        taskItem.appendChild(taskText);
        taskItem.appendChild(action);
        taskList.appendChild(taskItem);
        taskList.parentNode.appendChild(clearAllBtn);

        saveTasksToLocalStorage();
    }

    function saveTasksToLocalStorage() {
        const tasks = document.querySelectorAll(".task");
        const tasksStatus = [];

        tasks.forEach(task => {
            const taskText = task.querySelector("span");
            const isCompleted = taskText.classList.contains("completed");
            tasksStatus.push({ content: taskText.textContent, isCompleted });
        });

        localStorage.setItem("tasks", JSON.stringify(tasksStatus));
    }

    function loadTasksFromLocalStorage() {
        const tasksStatus = JSON.parse(localStorage.getItem("tasks"));
        if (tasksStatus) {
            tasksStatus.forEach(taskStatus => {
                addTask(taskStatus.content, taskStatus.isCompleted);
            });
        }
    }

    loadTasksFromLocalStorage();
});
