// form 안에 button 있으면 알아서 submit 기능추가됨.
const range = document.getElementById("range");
const answer = document.getElementById("answer");
const gameForm = document.getElementById("gameForm");
let randomNumber = 0;

function shuffleNumber() {
    randomNumber = Math.ceil(Math.random() * range.value);
}

function validOfNumber() { // 입력값이 설정범위보다 큰 경우
    if (answer.value > range.value) {
        alert("입력값이 설정된 범위보다 큽니다!!");
        answer.value="";
        range.value="";
    }
}

function resultPrint(event) {
    event.preventDefault();
    const visible = document.getElementById("gameResult");
    const yourAnswerPrint = document.querySelector("#gameResult span:first-child");
    const computerAnswerPrint = document.querySelector("#gameResult span:nth-child(2)");
    const gameresult = document.querySelector("#gameResult p");

    if (visible.classList.contains("invisible")) {
        visible.classList.remove("invisible");
    }
    
    yourAnswerPrint.innerText = answer.value;
    computerAnswerPrint.innerText = randomNumber;

    if (answer.value == randomNumber) {
        gameresult.innerText = "You won!!";
    }else{
        gameresult.innerText = "You lose!!";
    }
}

setInterval(shuffleNumber, 100);
answer.addEventListener("change", validOfNumber);
gameForm.addEventListener("submit",resultPrint);