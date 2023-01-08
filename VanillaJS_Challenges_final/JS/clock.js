let clock = document.createElement("p");
const clockParent = document.getElementById("info-Container");
clockParent.appendChild(clock);

function getClock () { // ctrl+shift+L 한번에 변수 바꾸기
    const date = new Date();
    const currentHour = String(date.getHours()).padStart(2,"0");
    const currentMinute = String(date.getMinutes()).padStart(2,"0");
    const currentSecond = String(date.getSeconds()).padStart(2,"0");
   
    clock.innerText = `현재 시각 : ${currentHour}:${currentMinute}:${currentSecond}`;
}

getClock();
setInterval(getClock,1000);


// 오류 : innerText 는 함수가 아님.