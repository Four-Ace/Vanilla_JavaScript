const datetxt = document.getElementById("date");
const timetxt = document.getElementById("time");

setInterval(count,1000);
count();

function count(){
const time =new Date();
const month = time.toLocaleString('en-US', {month: 'short'});
const date = time.getDate();
const hour = String(time.getHours());
const min = String(time.getMinutes());
const sec = String(time.getSeconds());
datetxt.innerText = `${date} / ${month}`;
timetxt.innerText = `${hour.padStart(2,"0")} : ${min.padStart(2,"0")} : ${sec.padStart(2,"0")}`
}