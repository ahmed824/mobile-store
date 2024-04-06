let userName = document.querySelector('#username');
let passWord = document.querySelector('#password');
let loginBtn = document.querySelector('#sign_in');

let getUserName = localStorage.getItem('userName');
let getPassword = localStorage.getItem('passWord');

loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (userName.value === "" || passWord.value === "") {
        alert('Please fill in username and password');
    } else {
        if (getUserName && getUserName.trim() === userName.value.trim() && getPassword && getPassword.trim() === passWord.value) {
            setTimeout(() => {
                window.location = "index.html";
            }, 1500);
        } else {
            alert("Username or password is incorrect");
        }
    }
});