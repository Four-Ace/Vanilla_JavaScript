const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const body = document.body;
const btn = document.getElementById("btn");

handleBtn();
btn.addEventListener("click",handleBtn);

function handleBtn() {
    let deg = Math.floor(Math.random()*180);
    let num1 = Math.floor(Math.random()*colors.length);
    let num2 = Math.floor(Math.random()*colors.length);
    while(num1 === num2){
        num2 = Math.floor(Math.random()*colors.length);
    }
    body.style.background=`linear-gradient(${deg}deg,${colors[num1]},${colors[num2]})`;
}