const dropdown_btn = document.querySelector('.dropdown-1')
const list = document.querySelector('.dropdown-list')
let hello = false;
dropdown_btn.addEventListener('click',function(){
    if(hello == false){
        list.style.display = 'block'
        hello = true
    }
    else if (hello == true){
        list.style.display = 'none'
        hello = false
    }
})

const signin = document.querySelector('#signin');
const login = document.querySelector('#login');
const signin_section = document.querySelector('.signin-section');
const login_section = document.querySelector('.login-section')
let signin_option = 'signin';
// console.log(login);

signin.addEventListener('click',function(){
    if(signin_option === 'login'){
        signin.style.color = '#8064A2';
        signin.style.textDecoration = 'underline'
        signin_section.style.display = 'block';
        login_section.style.display = 'none';
        login.style.textDecoration = 'none'
        login.style.color = 'black';
        signin_option = 'signin';
    }
})
login.addEventListener('click',function(){
    if(signin_option === 'signin'){
        login.style.color = '#8064A2';
        login.style.textDecoration = 'underline'
        login_section.style.display = 'block';
        signin_section.style.display = 'none';
        signin.style.textDecoration = 'none'
        signin.style.color = 'black'
        signin_option = 'login';
    }
})