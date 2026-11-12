// Get the HTML elements that we need to work with.
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const emptyState = document.getElementById("empty-state");
const message = document.getElementById("message");

// Load saved tasks when the page opens.
let tasks = JSON.parse(localStorage.getItem("myTasks")) || [];

// Save the current task list in the browser.
function saveTasks() {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// Display all tasks on the page.
function renderTasks() {
    // Clear the old list before adding the updated tasks.
    taskList.innerHTML = "";

    tasks.forEach(function(task) {
        const listItem = document.createElement("li");
        listItem.className = "task-item";

        if (task.completed) {
            listItem.classList.add("completed");
        }

        // Checkbox is used to mark a task as completed.
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", "Mark task as completed");

        checkbox.addEventListener("change", function() {
            toggleTask(task.id);
        });

        // Create the task text.
        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = task.text;

        // Create the delete button.
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("aria-label", "Delete " + task.text);

        deleteButton.addEventListener("click", function() {
            deleteTask(task.id);
        });

        // Add all elements to the list item.
        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });

    // Update the task counter and empty message.
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(function(task) {
        return task.completed;
    }).length;

    taskCount.textContent = totalTasks + " tasks · " + completedTasks + " completed";
    emptyState.style.display = totalTasks === 0 ? "block" : "none";
}

// Add a new task.
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        message.textContent = "Please enter a task first.";
        taskInput.focus();
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskName,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();

    taskInput.value = "";
    message.textContent = "";
    taskInput.focus();
});

// Mark a task as completed or active.
function toggleTask(taskId) {
    tasks = tasks.map(function(task) {
        if (task.id === taskId) {
            task.completed = !task.completed;
        }
        return task;
    });

    saveTasks();
    renderTasks();
}

// Delete a task from the list.
function deleteTask(taskId) {
    tasks = tasks.filter(function(task) {
        return task.id !== taskId;
    });

    saveTasks();
    renderTasks();
}

// Show saved tasks when the application first loads.
renderTasks();
