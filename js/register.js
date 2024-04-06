let userName = document.querySelector('#username')
let email = document.querySelector('#email')
let passWord = document.querySelector('#password')

let registerBtn = document.querySelector('#sign_up')

registerBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (userName.value === '' || email.value === '' || passWord.value === '') {
        alert('please fill your data...')
    } else {
        localStorage.setItem('userName', userName.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('passWord', passWord.value);

        setTimeout(() => {
            window.location = "login.html"
        }, 1500);
    }
})