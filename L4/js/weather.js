const API_KEY = config.apikey;

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    // url에 접속하면 얻을 수 있는 object를 열려있는 페이지로 fetch 함.
    // fetch 는 즉시 실행되지 않음. 
    // 
    fetch(url).then(response =>response.json()).then(data=> {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} / `;
        city.innerText = data.name;
    });

}
function onGeoError(){
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);