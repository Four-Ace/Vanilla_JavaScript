const toDoForm =document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList =document.getElementById("todo-list");

const TODOS_KEY = "todos"; 

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function handelToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDoInput.value ="";
    todos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodo.id;
    span.innerText=newTodo.text + "  ";
    button.innerText = "✔"
    button.addEventListener("click",deleteTodo);


    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement;

    //local storage에 저장되는 배열 (todos)에서 id 를 빼는 부분
    // todo.id는 숫자이고, li.id는 문자열이어서, paresInt로 숫자로 바꿔준다. 
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));

    // local storage는 아직 바뀐게 아니어서, local storage에 업데이트 해줌.
    saveTodos();
    console.log("delete!");
    li.remove();
}

toDoForm.addEventListener("submit",handelToDoSubmit);

// todo 저장하기 
// todo 가 생길떄마다 arry에 저장하기
// array 를 local storage에 저장하기
// string의 형태로 저장하고, 그 string를 배열로 가져오기 

const savedTodos = localStorage.getItem(TODOS_KEY);


if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}


