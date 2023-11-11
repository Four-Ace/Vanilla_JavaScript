 const loginForm = document.querySelector("#login-form"); 
 const loginInput = document.querySelector("#login-form input"); 
 const greeting= document.querySelector("#greeting");

 const HIDDEN_CLASSNAME = "hidden";
 const USERNAME_KEY = "username";


 const savedUsername = localStorage.getItem(USERNAME_KEY);
 console.log(savedUsername);

if(savedUsername===null){
   //show the form
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit",onLoginSubmit);
}else{
   //show the greeting
   paintGreeting(savedUsername);
}


 function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreeting(username);
 }

 function paintGreeting(username){
   greeting.innerText = `Hello ${username}`;
   // "Hello " + username; 같은 동작임
   // ' 이거 아니고 ` 이거임
   greeting.classList.remove(HIDDEN_CLASSNAME);
 }

 /*
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
    <body>
        <form id="login-form" class="hidden">
            <input required maxlength="15" type="" placeholder="What is your name?"/>
            <input type="submit" value="Log In">
        </form>
        <h1 id="greeting" class="hidden"></h1>
        <script src="app.js"></script>
    </body>
</html>
 */