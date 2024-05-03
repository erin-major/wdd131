// events.js
let tasks = [];

function taskTemplate(task) {
    return `
    <li ${task.completed ? 'class="strike"' : ""}>
        <p>${task.detail}</p>
        <div>
            <span data-function="delete">❌</span>
            <span data-fucntion="complete">✅</span> 
        </div>
    </liv>`
}

function renderTasks(tasks) {
    const listElement = document.querySelector("#todoList");
    listElement.innerHTML = "";
    const html = tasks.map(taskTemplate).join("");
    listElement.innerHTML = html;

  // get the list element from the DOM
  // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
}

function newTask() {
  const task = document.querySelector("#todo").value;
  tasks.push({ detail: task, completed: false });
  renderTasks(tasks);
  // get the value entered into the #todo input
  // add it to our arrays tasks
  // render out the list
}

function removeTask(taskElement) {
  // Note the use of Array.filter to remove the element from our task array
  // Notice also how we are using taskElement instead of document as our starting point?
  // This will restrict our search to the element instead of searching the whole document.
  tasks = tasks.filter(
    (task) => task.detail != taskElement.querySelector('p').innerText
  );

  // this line removes the HTML element from the DOM
  taskElement.remove();
}

function completeTask(taskElement) {
    const taskIndex = tasks.findIndex(
      (task) => task.detail === taskElement.querySelector('p').innerText
    );
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    taskElement.classList.toggle("strike");
    console.log(tasks);
  }

function manageTasks(event) {
  // did they click the delete or complete icon?
  console.log(event.target);
  const parent = event.target.closest("li");
  if (event.target.dataset.action === "delete") {
    removeTask(parent);
  }
  else {
    completeTask(parent);
  }

  console.log(event.currentTarget);

  // event.target will point to the actual icon clicked on. We need to get the parent li to work with however. HINT: Remember element.closest()? Look it up if you don't

  // because we added 'data-action="delete"' to each icon in a task we can access a dataset property on our target (e.target.dataset.action)
  // use that in a couple of if statements to decide whether to run removeTask or completeTask
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(tasks);
// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
