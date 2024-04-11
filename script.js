let button = document.querySelector('.form-button')
let userName = document.querySelector('.userName')
let userPassword = document.querySelector('.userPassword')
let userEmail = document.querySelector('.userEmail')
let phoneNum = document.querySelector('.phoneNum')

button.addEventListener('click', function(){
    let userNameVal = userName.value
    let userPasswordVal = userPassword.value
    let userEmailVal = userEmail.value
    let phoneNumVal = phoneNum.value
    if( userNameVal.length < 2){
        userName.classList.add('warning')
        alert('put your username')
    }
    else if (userPasswordVal.length < 6 || !/[a-z]/.test(userPasswordVal[0])) {
        userPassword.classList.add('warning');
        alert("Check out your password");
    }
    else if (userEmailVal.length < 6 || !userEmailVal.includes('@') ||!userEmailVal.includes('.com') ){
        userEmail.classList.add('warning')
        alert(`check out your email`)
    }
    else if(phoneNumVal.length !== 13 || !phoneNumVal.includes('+380') ){
        phoneNum.classList.add('warning')
        alert(`check out your number`)
    }
    
    else{
        alert(`you're good to go`)
    }
})  