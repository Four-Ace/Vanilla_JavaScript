const APIKEY = config.apikey;
const weatherTxt = document.getElementById("weather");

navigator.geolocation.getCurrentPosition(run,fail);

function run(event){
const lat = event.coords.latitude;
const lon = event.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;
fetch(url).then(response =>response.json()).then(data =>{
    weatherTxt.innerText = `${data.name} / ${data.main.temp}°C`;
    })
}

function fail(){
    alert("We can't use your Location.");
}