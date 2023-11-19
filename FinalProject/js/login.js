const loginform = document.getElementById("id-form");
const userName= document.querySelector("#id-form input");
const loginMessage= document.querySelector("#id-form span");

const INVISIBLE_CLASS ="invisible";
const USERNAME = "userName"; 

if(localStorage.getItem(USERNAME)!==null){
    paintUser();
}


loginform.addEventListener("submit",login);

function login(event){
 event.preventDefault();
 localStorage.setItem(USERNAME,userName.value);
 paintUser();
}

function paintUser(){ 
    loginMessage.innerText = "Welcome " + localStorage.getItem(USERNAME);
    loginMessage.classList.remove(INVISIBLE_CLASS);
    userName.classList.add(INVISIBLE_CLASS);
}