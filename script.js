document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const taskInput = document.getElementById("todo-input");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const todoList = document.getElementById("todo-list");
    
    const li = document.createElement("li");
    li.textContent = taskText;
    
    // Add "Complete" button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Add "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function() {
        todoList.removeChild(li);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    
    todoList.appendChild(li);
}
