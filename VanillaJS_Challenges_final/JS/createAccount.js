const accountID = document.getElementById("id");
const accountPW = document.getElementById("pw");
const create = document.querySelector("#create-account-form button");
let successCreate = false;

function createAcc(event) {
    event.preventDefault();
    if (localStorage.getItem(accountID.value) != null) {
        alert("이미 존재하는 아이디 입니다.");
        return;
    }
    if (!successCreate) {
        const form = document.getElementById("create-account-form");
        let successTextBox = document.createElement('p');
        successTextBox.innerText = "Success to create account!!"
        form.appendChild(successTextBox);
        localStorage.setItem(accountID.value,accountPW.value);
        successCreate = true;
    }
    
    
}

create.addEventListener("click",createAcc);