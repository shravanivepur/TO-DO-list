
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    // Don't add an empty task
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Create the task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // Mark task as completed when clicked
    span.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Delete the task when clicked
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Add elements to the list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Add the task to the page
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = "";
    taskInput.focus();
}

// Run addTask when the button is clicked
addBtn.addEventListener("click", addTask);

// Allow Enter key to add a task
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});