const API_KEY = "8cf6d085728f3abc26b34c18a83e6817"
const translateWeather = {
    'Haze':'안개낌',
    'rain':'비',
    'clear':'맑음',
    'cloudy': '흐림',
    'snow':"눈"
}
function kelvinToCelsius(kelvin) {
    let celsius = kelvin-273.15;
    celsius = celsius.toFixed(2);
    return celsius;
}

function onGeoOk(position) { // geolocation object 이용
    const lat = position.coords.latitude; // 위도
    const lng = position.coords.longitude; // 경도
    console.log(lat);
    const link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(link)
    .then(Response => Response.json())
    .then(data => {
            console.log(data); // 요소 확인
            const city = document.querySelector("#info-Container span:nth-child(1)");
            const weather = document.querySelector("#info-Container span:nth-child(2)");
            weather.innerText = `| 날씨 : ${translateWeather[data.weather[0].main]} | 온도 : ${kelvinToCelsius(data.main.temp)}℃`;
            city.innerText = `${data.sys.country} - ${data.name}`;
        });
}

function onGeoError() {
    alert("Fail to get infomation of location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 오류 onGeoOk function 에서 경도 위도 불러올때 coords 누락함.
// const temp 와 promise.main.temp 에서 충돌남. const temp 삭제.