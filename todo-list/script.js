function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach((ele) => {
    const li = document.createElement("li");
    li.innerText = ele.task;
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    const span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");
    const lineIcon = document.createElement("i");
    const deleteIcon = document.createElement("i");
    deleteIcon.style.marginLeft = "3px";
    lineIcon.classList.add("fa", "fa-check");
    deleteIcon.classList.add("fa", "fa-trash");
    lineIcon.onclick = () => {
      li.classList.toggle("line");
    };
    deleteIcon.onclick = () => {
      li.remove();
    };
    span.append(lineIcon, deleteIcon);
    li.append(span);
    list.append(li);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
populateTodoList(todos);
const currentLi = document.querySelectorAll("#d");
currentLi.forEach((li) => li.remove());

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo() {
  const form = document.querySelector("form");
  let list = document.getElementById("todo-list");
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // The code below prevents the page from refreshing when we click the 'Add Todo' button.
    const li = document.createElement("li");
    li.innerText = e.target.todoInput.value;
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    const span = document.createElement("span");
    span.classList.add("badge", "bg-primary", "rounded-pill");
    const lineIcon = document.createElement("i");
    const deleteIcon = document.createElement("i");
    deleteIcon.style.marginLeft = "3px";
    lineIcon.classList.add("fa", "fa-check");
    deleteIcon.classList.add("fa", "fa-trash");
    lineIcon.onclick = () => {
      li.classList.toggle("line");
    };
    deleteIcon.onclick = () => {
      li.remove();
    };
    span.append(lineIcon, deleteIcon);
    li.append(span);

    if(e.target.todoInput.value!==""){
      list.append(li)
    }else{
      alert('Golam Am i joke to you ??')
    }
    
    e.target.todoInput.value = "";
  });
}

// Write your code here... and remember to reset the input field to be blank after creating a todo!

// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
