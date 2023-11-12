const todoform = document.querySelector("#todo-form");
const todotext = document.querySelector("#todo-form input");
const todoID = ["todo0","todo1","todo2","todo3","todo4","todo5"];
const imgID =[false,false,false,false,false,false,false,false,false];

const TASKKEY = "taskId";
const CNTKEY =  "todoCNT";

let todoCNT = 0;
let taskId = [];


const savedTasks = localStorage.getItem(TASKKEY);

if (savedTasks !== null){
    taskId = JSON.parse(savedTasks);
    taskId.forEach(displayTodo);
    taskId.forEach(item => imgID[item.imgId]=true);
    todoCNT = Number(localStorage.getItem(CNTKEY));
}

todoform.addEventListener("submit",addTodo);

// 이벤트 리스닝 
function addTodo(event){
    event.preventDefault();
    const task = todotext.value;
    todotext.value ="";

    // 요소 카운팅 
    if(todoCNT <=5){
    // 요소 추가, id 
    const newImgId = selectImage();
    const todoObj ={
        id : `${todoID[todoCNT]}`,
        imgId : newImgId,
        text : task,
        memo : "",
    };


    todoCNT = todoCNT + 1;

    displayTodo(todoObj);

    // 오브젝트 선언이후 todo  display
    // local Stroage에 저장
    taskId.push(todoObj);
    saveTasks(taskId);
    
    }else{
        alert("Maximum 6 task at once");
    }
    // todo id와 img id, 할일 text를 local stroage에 저장. 
    localStorage.setItem(CNTKEY,JSON.stringify(todoCNT));
}

// id로 요소 삭제
// 삭제시 1~3 이 빠지면 위로 올림. 

function displayTodo(todoObj) {
    
    const Todo = document.getElementById(todoObj.id);
    const TodoText = document.querySelector(`#${todoObj.id} .upline span`);
    const TodoMemo = document.querySelector(`#${todoObj.id}>input`);
    const button = document.querySelector(`#${todoObj.id} .upline input`);

    Todo.classList.remove(INVISIBLE_CLASS);
    TodoText.innerText = todoObj.text;
    
    Todo.style.backgroundImage = `linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
        ),url('img/${todoObj.imgId}.jpg')`;
    TodoMemo.value = todoObj.memo;

    imgID[todoObj.imgId] = true;
 
    //이벤트 리스너는 새로고침하면 사라지기 때문에, 화면에 띄울떄 넣어줘야 함
    TodoMemo.addEventListener("blur",addMemo);
    button.addEventListener("click",deleteTodo);
}

function selectImage(){
    let randN = Math.floor(Math.random()*imgID.length);
    while(imgID[randN]){
        randN = Math.floor(Math.random()*imgID.length);
    }
    imgID[randN]=true;
    return randN;
}

function saveTasks(taskId) {
    localStorage.setItem(TASKKEY,JSON.stringify(taskId));
}

function addMemo(event){
    const newMemo = event.target.value;
    const target = event.target.parentElement;
    let targetIdx =0;
    for(let i=0;i<taskId.length;i++){
        if(taskId[i].id == target.id){
            targetIdx=i;
            break;
        }
    }
    taskId[targetIdx].memo = newMemo;
    saveTasks(taskId);
}

function deleteTodo(event){

    const target = event.target.parentElement.parentElement;
    const targetObj = taskId.filter(item => target.id == item.id);

    // imgID 제거하기
    imgID[targetObj[0].imgId] = false;

    // 지우기 : local storage에서 요소 지우기.
    taskId = taskId.filter(item =>target.id !== item.id);
    saveTasks(taskId);

    // todoCnt 감소해주기
    todoCNT=todoCNT-1;
    localStorage.setItem(CNTKEY,JSON.stringify(todoCNT));

    // invisible class 넣기
    target.classList.add(INVISIBLE_CLASS);

    // 순서 재정렬

    const match = targetObj[0].id.match(/\d+/);
    const number = parseInt(match[0], 10); 
    rematch(number);
}

function rematch(deletedID) {
    for(let i=deletedID;i<taskId.length;i++){
        //invisible 처리
        const forInvisible =document.getElementById(taskId[i].id);
        forInvisible.classList.add(INVISIBLE_CLASS);

        //id를 하나씩 앞당기기
        taskId[i].id =`todo${i}`;
    }
    saveTasks(taskId);
    taskId.forEach(displayTodo);
}