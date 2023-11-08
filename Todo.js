// Function to add a task to the list
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  
  const task = taskInput.value;
  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(task));
  taskList.appendChild(li);

  // Save task to local storage
  saveTask(task);

  taskInput.value = "";
}

// Function to save the task to local storage
function saveTask(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage when the page loads
window.onload = function () {
  const taskList = document.getElementById("taskList");
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.appendChild(document.createTextNode(task));
      taskList.appendChild(li);
    });
  }
}
