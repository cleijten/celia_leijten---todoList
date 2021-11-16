//function for getting all the tasks in the todo list
const setToDoList = async () => {
  const toDos = await getToDos();
  const ulElement = document.getElementById("tasks");
  const reversedArray = toDos.reverse();

  reversedArray.forEach((todo) => {
    const li = document.createElement("li");
    li.setAttribute("class", "todo-item");
    li.setAttribute("data-key", todo._id);
    if (todo.done) {
      li.classList.add("done");
    }
    li.innerHTML = `<input type="checkbox" name="taskcheck" id="${todo._id}" /><label for="${todo._id}" class="tick"></label><span>${todo.description}</span>
    <img src="images/icons8-delete-64.png" class="delete-todo js-delete-todo">`;
    ulElement.appendChild(li);
  });
};

//function for adding a todo item
const toDoItem = () => {
  const button = document.getElementById("item-toevoegen");
  button.addEventListener("click", () => {
    const description = document.getElementById("todo-item").value.trim();
  
    if (description != "") {
      const ulElement = document.getElementById("tasks");
       const li = document.createElement("li");
      li.innerHTML = `<input type="checkbox" name="taskcheck" id="" /><label for="" class="tick"></label><span>${description}</span>
    <img src="images/icons8-delete-64.png" class="delete-todo js-delete-todo">`;
      ulElement.insertBefore(li, ulElement.childNodes[0]);
      postToDo(description);
      document.getElementById("todo-item").value = "";
      document.getElementById("todo-item").focus();
      location.reload();
    }
  });
};

//function for deleting a todo item
const deleteItem = async () => {
  await getToDos();
  const lis = document.getElementsByTagName("li");

  Array.from(lis).forEach((item) => {
    const id = item.dataset.key;
    const trash = item.getElementsByTagName("img");
    trash[0].addEventListener("click", (event) => {
      event.preventDefault();
      const li = event.target.parentElement;
      li.parentNode.removeChild(li);
      deleteToDo(id);
    });
  });
};

//function for ticking checkbox and set status done to true
const setTodoToDone = async () => {
  await getToDos();
  const checkbox = document.querySelectorAll("input[type=checkbox]");

  Array.from(checkbox).forEach((item) => {
    const id = item.id;
    item.addEventListener("change", (event) => {
      const li = event.target.parentElement;
      li.classList.add("done");
      putToDo(id);
    });
  });
};

//function for updating a todo item - werkt niet
const updateTodo = async () => {
  await getToDos();
  const span = document.getElementsByTagName("span");

  Array.from(span).forEach((item) => {
    console.log(item);
    item.addEventListener("dblclick", (event) => {
      const text = event.target.innerText;
      const parentLi = text;
      const id = parentLi.dataset.key;
      editable = item.contentEditable;
      item.contentEditable = "true";
    });
  });
};


document.addEventListener("DOMContentLoaded", () => {
  setToDoList();
  toDoItem();
  deleteItem();
  setTodoToDone();
  updateTodo();
});
