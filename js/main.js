const form = document.querySelector("#new-task-form");
const taskList = document.querySelector("#tasks");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const enteredTask = formData.get("task-input")?.trim();
  console.log(enteredTask);

  if (enteredTask === "" || enteredTask === undefined) {
    alert("Bitte gebe einen Task ein!");
    return;
  }

  createNewTask(enteredTask);
  form.reset();
});

function createNewTask(enteredTask) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.classList.add("text");
  inputElement.value = enteredTask;
  inputElement.readOnly = true;

  const actionsElement = document.createElement("div");
  actionsElement.classList.add("task-actions");

  const editButton = document.createElement("button");
  editButton.classList.add("edit");
  editButton.innerHTML = "Bearbeiten";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerHTML = "Löschen";

  editButton.addEventListener("click", () => {
    if (inputElement.readOnly) {
      inputElement.readOnly = false;
      inputElement.focus();
      editButton.innerHTML = "Speichern";
    } else {
      inputElement.readOnly = true;
      editButton.innerHTML = "Bearbeiten";
    }
  });

  deleteButton.addEventListener("click", () => {
    taskElement.remove();
  });

  actionsElement.appendChild(editButton);
  actionsElement.appendChild(deleteButton);

  taskElement.appendChild(inputElement);
  taskElement.appendChild(actionsElement);

  taskList.appendChild(taskElement);
}
