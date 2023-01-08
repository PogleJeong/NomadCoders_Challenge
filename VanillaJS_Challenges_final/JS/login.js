const user_id = document.getElementById("inputID");
const user_pw = document.getElementById("inputPW");
const enterAcc = document.querySelector("#inputText button");
const createAcc = document.querySelector("#sign-up button");
const printContainer = document.querySelector(".invisible-container");
const printUserName = document.querySelector(".invisible-container h2");

function openCreateAccount(event) {
    window.open("createAccount.html","Create your account!!","width=400, height=400, left=520, top=200"); //resizable=no 는 IE에서만 됨(보안상문제)
}
function login(event) {
    event.preventDefault();
    if (localStorage.getItem(user_id.value) == user_pw.value) {
        confirm("로그인 성공.");
        document.getElementById("entire-Box").remove();
        printContainer.classList.toggle("overlay-container");
        printUserName.innerText = `반가워요 ${user_id.value}님!!`;
    }
    else {
        alert("로그인 실패, 패스워드를 다시 입력해주세요");
    }
}

createAcc.addEventListener("click", openCreateAccount);
enterAcc.addEventListener("click", login);
