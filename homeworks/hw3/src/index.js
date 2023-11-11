const genenum = document.querySelector(".genenum");
const playernum = document.querySelector(".playernum");
const form = document.querySelector('form'); 

const display = document.querySelector(".playedDisplay");

const yourN = document.querySelector(".yourNdisplay");
const machineN = document.querySelector(".machineNdisplay");
const result = document.querySelector(".result");


form.addEventListener("submit",handleBtnClicked);

function handleBtnClicked(event) {
    event.preventDefault();

    const playernumber =  playernum.valueAsNumber;
    const genenumber = genenum.valueAsNumber;

    // 생성하려는 수보다 플레이어 수가 작아야 함. 
    if(genenumber<playernumber){
        alert("your number should less then generate number!");
        display.classList.add("hide");
    }
    else{
        display.classList.remove("hide");
        yourN.innerText = playernumber;
        // 랜덤 수 돌리기
        const randomNumber = Math.ceil(Math.random() * (genenumber+1))-1;
        // 텍스트 업데이트
        machineN.innerText = randomNumber;

        // 플레이어 넘버와 비교
        if(randomNumber===playernumber){
            result.innerText = "You won!";
        }else{
            result.innerText = "You lost!";
        }
    }
}