const clock = document.getElementById("clock");

function xMasClock() {
    const date = new Date();
    const currentTime = date.getTime();

    // 올해 크리스마스 이브가 지났으면 다음년도로 설정
    let xMasDate = new Date(date.getFullYear(),12,25);
    if (xMasDate - currentTime <= 0 ) {
        xMasDate = new Date(date.getFullYear()+1,12,25);
    }

    const xMasTime = xMasDate.getTime();
    const timeDiff = xMasTime-currentTime;
    const resultTime = calculatorTime(timeDiff);

    const day = String(resultTime[0]).padStart(2,"0");
    const hour = String(resultTime[1]).padStart(2,"0");
    const min = String(resultTime[2]).padStart(2,"0");
    const sec = String(resultTime[3]).padStart(2,"0");

    clock.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}
// 매개변수이름과 지역변수 이름 겹치면 안됨.
// js 몫연산자 없음.
// js 에서는 return 값을 한번에 받을 수 없음, 배열로 받는것이 좋음.
function calculatorTime(ms) { 
    let msTime = Math.round(ms/1000); // getTime 단위 ms
    const remainDays = Math.floor(msTime / 86400);
    msTime = msTime % 86400;
    const remainHour = Math.floor(msTime / 3600);
    msTime = msTime % 3600;
    const remainMin = Math.floor(msTime / 60);
    const remainSec = msTime % 60;

    return [remainDays, remainHour, remainMin, remainSec];
}

setInterval(xMasClock, 1000);
