import getUsers from "./repo.js";
import ncrypt from "ncrypt-js";


var _secretKey = "jfksfiuu39148fio091378f0akj";

function copyToClipboard(val) {
    alert("복사완료");
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}


//firebase에서 users가져오기 함수
console.log(await getUsers());
console.log("hi");

//firebase에서 가져온 users와 비밀번호비교 함수 
async function isNewUser(pwd){
    let bool = 1;
    userList = await getUsers();
    userList.forEach(element => {
        if(element === pwd){
            bool = 0;
            return false;
        }
    });
    return bool;
}

async function login(pwd) {
    if(await isNewUser(pwd) === 0) {
        const ncryptObject = new ncrypt(_secretKey);
        const encryptedData = ncryptObject.encrypt(pwd);
        console.log(encryptedData);
        //gogo next page with pwd
        //location.href = "../choice_page/choice.html";
    } else {
        // pop up modal
    }
}

// 로그인 함수
// 비교 결과 같은 것이 있으면 해당 비밀번호를 다음페이지에 post로 넘겨줌

// 같은 것이 없으면 새로운 유저군요! 다음 비밀번호가 맞는지 확인하고 계속 진행해 주세요! 창을 띄워주고 확인과 취소 버튼 만들기

document.querySelector('#copybtn').addEventListener('click', function(e){
    copyToClipboard("https://introduce-ku-1a16c.web.app/answer_page/answer.html");
});

document.querySelector('start').addEventListener('click', async function(e){
    const pwd = document.querySelector('.pwd').value
    await login(pwd);
});