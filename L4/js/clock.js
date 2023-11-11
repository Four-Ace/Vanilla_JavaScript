const clock =document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours());
    const minuits = String(date.getMinutes());
    const seconds = String(date.getSeconds());
    clock.innerText =`${hours.padStart(2,"0")}:${minuits.padStart(2,"0")}:${seconds.padStart(2,"0")}`;
}
getClock();
setInterval(getClock,1000);