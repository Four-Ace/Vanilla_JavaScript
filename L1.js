// index.html에서는 app.js만 받게 쓰여있음


const a = 5;

console.log(a+6);

/*
변수 선언

let a = b; 
let a = c; x
a = c; o

const a = b; 
const a = b;x
a = c;x 

var a = b; 
var a = c; o
a = d; o

*/

const week = ["sun","mon","tue","wed","thu","fri"];

console.log(week);
console.log(week[3]);

// 요소를 더해보기
week.push("sat");
console.log(week);

// object 만들기
const player = {
    name:"Ju",
    points:5,
    sex:"male",
    sayHello : function(name){
        console.log("Hello my name is " + name);
    }
};

console.log(player);
console.log(player.name);
console.log(player["name"]);
console.log(player.points);
player.points=player.points+10;
console.log(player.points);
player.addProperty="new";
console.log(player);


//함수
sayHello("뭘까여?",10);

function sayHello(name,age){
    console.log("Hello my name is " + name +" I'm " + age + " years old");
}

player.sayHello("Cu")

// 객체 함수
// 객체에 : function(인수) {내용} 이렇게
const calculatorlog ={
    add:function(a,b){ console.log(a+b);},
    minus:function(a,b){ console.log(a-b);},
    div:function(a,b){ console.log(a/b);},
    multi:function(a,b){ console.log(a*b);},
    pow:function(a,b){ console.log(a**b);},
}

calculatorlog.pow(3,3);

// 함수에서 값 받아오기
const age= 17;
function calKRage(age){
    return age+2;
}

const Krage=calKRage(age);
console.log(Krage);

// 조건문 //prompt는 사용자에게 창을 띄워 줌
const agee = prompt("몇살이야? 입력받기");
console.log(agee);

//변수의 type 보기/ 위의 경우는 string이 되어서 나옴
// parseInt string ->number
console.log(typeof agee, parseInt(agee));


const aagee = parseInt(prompt("몇살이야? if문 사용"));
console.log("use parseInt " + aagee);

//isNaN() 괄호 안의 내용이 NaN 인지 아닌지 반환
// 괄호가 NaN이면 true, NaN이 아니면 false를 반환

if(isNaN(aagee)){
    const aageee = parseInt(prompt("숫자를 써야지."));
} else if(aagee<19){
    console.log(aagee + " 살 애들은 가라~");
} 
else{
    console.log(aagee + " 살 이구나!");
}

/* 
== 은 값만을 비교하고
=== 은 유형도 비교함. (추천)
*/