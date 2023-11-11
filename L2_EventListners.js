/*
JS 는 document 라는 클래스를 이용하여 Html에 접근, 수정 할 수 있다. 

ex)
document.title = "avdse";
document.body
*/


// Html ID 를 이용하여 요소 가져오기. 
const titlee = document.getElementById("title");
titlee.innerText="Got you!";

console.log(titlee);


// Html Class 를 이용하여 요소 가져오기. 
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

// <div class ="hola"> <h1> text </h1> </div>
// div 내부의 text 가져오기
// querySelector은 CSS 방식으로 쓸 수 있음. .hola 클래스 안에 있는 h1
const title = document.querySelector(".hola h1");
// div h1 같은것도 됨
// 단, 조건에 맞는 첫번째 element만 취급함
// 모두 가져오려면 querySelectorAll을 사용할 것. 
console.log(title);

/*
document.getElementById("title");
=== document.querySelector("#title");
querySelector로는 하위 태그들에도 접근 할 수 있다.
=== document.querySelector("#title:first-cild");
*/


console.dir(title);
title.style.color = "blue";


// event를 감지하는 listen 하는 함수.
// 검색 키워드 : "web APIs","MDN"
title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter",handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);
// removeEventListner을 이용해서 이벤트 listining을 지울 수 있음

// event 앞에 on을 붙여서 사용할 수 있음
// 이벤트를 지울 수 없음
/*
title.onclick = handleTitleClick;
title.onmouseenter = handleMouseEnter;
title.onmouseleave = handleMouseLeave;
*/

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleCopy);

h1.addEventListener("mouseenter",handleMouseEnter);

function handleMouseEnter(){
    const curColor = h1.style.color;
    let newColor;
    if(curColor ==="blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }
    h1.style.color = newColor;
}

function handleTitleClick(){
    console.log("title was clicked!");
    if(title.style.color === "blue"){
        title.style.color = "tomato";
    }
    else{
        title.style.color = "blue";
    }
}

function handleMouseEnter(){
    title.innerText="Wellcome!";
}

function handleMouseLeave(){
    title.innerText="Come back!";
}

function handleWindowResize() {
    //document의 body, head, title는 중요해서 이렇게 가져올 수 있음
    document.body.style.backgroundColor= "#B1B3B5";
}

function handleCopy(){
    title.innerText="Don't Copy!";
}


/*<body>
    <h1 id="title">Grab me!</h1>
    <h1 class="hello">oi</h1>
    <h1 class="hello">oii</h1>
    <h1 class="hello">oiii</h1>
    <h1 class="hello">ovi</h1>
    <h1 class="hello">ov</h1>

    <div class="hola">
        <h1>Grab1</h1>
    </div>
    <div class="hola">
        <h1>Grab2</h1>
    </div>
    <div class="hola">
        <h1>Grab3</h1>
    </div>
    
    <script src="app.js"></script>
</body>*/


const h1 = document.querySelector("div h1");

function handleTitleClick(){
    const clickedClass = "active";
    h1.classList.toggle(clickedClass);
   /* toggle과 같은 기능을 함.
     클래스가 있으면 빼고, 없으면 추가함. 
   if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    } 
    console.log(h1.className);
    */
}
/*
    Js에서 class자체를 교체하는것 보다, 기존의 클래스를 유지한채
    class를 추가 또는 삭제하여 적용하는 방법.
*/


h1.addEventListener("click",handleTitleClick);