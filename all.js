
//指定與監聽DOM
var registeSend = document.querySelector('.register .send');
// console.log(registeSend);
var loginSend = document.querySelector('.login .send');
// console.log(loginSend);
registeSend.addEventListener('click', register, false);
loginSend.addEventListener('click', login, false);

//註冊與判斷是否註冊成功
function register() {
    var emailStr = document.querySelector('.register .account').value;
    var passwordStr = document.querySelector('.register .password').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;

    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function () {
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        var veriStr = callbackData.message;
        if (veriStr == "帳號註冊成功") {
            alert('帳號註冊成功！！');
        } else {
            alert("帳號註冊失敗！");
        }
    }
}

//登入與判斷是否登入成功
function login() {
    var emailStr = document.querySelector('.login .account').value;
    var passwordStr = document.querySelector('.login .password').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;

    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function () {
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        var veriStr = callbackData.message;
        if (veriStr == "登入成功") {
            alert('帳號登入成功！！');
        } else {
            alert("帳號登入失敗！");
        }
    }
}
