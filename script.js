const imgContainer = document.querySelector('.ad-images')
const img = document.querySelectorAll('.ad-images img')
const leftBtn = document.querySelector('.left')
const rightBtn = document.querySelector('.right')
const circles = document.querySelectorAll('.circle')
const loginEl = document.querySelector('.login')
const passwordEl = document.querySelector('.password')
const phoneEl = document.querySelector('.phone')
const container = document.querySelector('.daraz-container')
const closeEl = document.querySelector('#close')
const loginContainer = document.querySelector('.login-container')



let idx = 0;

let interval = setInterval(run,2000)

function run(){
    idx++
    changeImg();
    changeCircle();
   
}

function changeCircle(){
    circles[idx].classList.add('active');
    if(idx>0){
        circles[idx].previousElementSibling.classList.remove('active');
    }
    else if(idx<=0){
        circles[4].classList.remove('active');
    }
   
}



function changeImg(){
    if(idx>img.length-1){
        idx = 0
    }
    else if(idx<0){
        idx = img.length-1
    }
    imgContainer.style.transform = `translate(${-idx * 2300}px)`
}
function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000);
}

leftBtn.addEventListener('click',()=>{
    idx--
    if(idx<0){
        idx=img.length-1
    }
    changeImg()
    resetInterval()

    circles[idx].classList.remove('active')
})
rightBtn.addEventListener('click',()=>{
   
    idx++
    changeImg()
    resetInterval()
    circles[idx].classList.add('active')
    circles[idx-1].classList.remove('active');
    if(idx===0){
        circles[4].classList.remove('active');
    }
  
})
loginEl.addEventListener('click',()=>{
    const login = document.createElement('div')
    login.classList.add('login-container')
    login.innerHTML = `
    <div class="login-container__top">
            <button class="password">
                Password
            </button>
            <p>|</p>
            <button class="phone">
                Phone Number
            </button>
            <i id="close" class="fa-solid fa-xmark"></i>
        </div>
            <div class="login-container__bottom active ">
                <div class="login-container__bottom-password">
                    <input type="email" class="email" placeholder="Please enter your Phone Number or Email">
                    <div class="password-container">
                        <input type="password" class="password" placeholder="Please Enter Your Password">
                        <i class="fa-solid fa-eye"></i>
                        <i class="fa-solid fa-eye-slash"></i>
                    </div>
                    <p>Forgot Password?</p>
                    <button class="logIn">
                        Log In
                    </button>
                    <p class="signText">Don't have an account?<a href="#">  Sign up</a></p>
                    <p class="logText">Or, log in with</p>
                    <div class="icons">
                        
                        <a href="https://www.google.com/" target="_blank">
                        <button class="google">
                            <i class="fa-brands fa-google"></i>
                            <p>Google</p>
                        </button>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                        <button class="facebook">
                            <i class="fa-brands fa-facebook"></i>
                            <p>Facebook</p>
                        </button>
                        </a>
                    </div>
                </div>
                <div class="login-container__bottom-phoneNumber">
                    
                </div>
            </div>
            <div class="login-container__PhoneNumber ">
                <div class="login-container__PhoneNumber-Number">
                    <button>
                        NP+977
                    </button>
                    <input type="text" placeholder="Enter Your Phone Number">
                </div>
                <button class="whatsapp">
                    <i class="fa-brands fa-whatsapp"></i>
                    <p>Send code via Whatsapp </p>
                </button>
                <button class="sms">
                    <i class="fa-solid fa-mobile-screen"></i>
                    <p>Send Code Via SMS</p>
                </button>
                <p class="signText">Don't have an account?<a href="#">  Sign up</a></p>
                    <p class="logText">Or, log in with</p>
                    <div class="icons">
                        <button class="google">
                            <i class="fa-brands fa-google"></i>
                            <p>Google</p>
                        </button>
                        <button class="facebook">
                            <i class="fa-brands fa-facebook"></i>
                            <p>Facebook</p>
                        </button>
                    </div>
            </div>
    `
    container.appendChild(login)

    const passwordBtn = login.querySelector('.password')
    const phoneBtn = login.querySelector('.phone')
    const passwordContainer = login.querySelector('.login-container__bottom')
    const phoneContainer = login.querySelector('.login-container__PhoneNumber')

    function toggleButton(method){
        if(method === 'password'){
            phoneBtn.style.color = "#777"
            passwordBtn.style.color = "black"
            passwordContainer.classList.add('active');
            phoneContainer.classList.remove('active');
        }
        else{
            phoneBtn.style.color = "black"
            passwordBtn.style.color = "#777"
            passwordContainer.classList.remove('active');
            phoneContainer.classList.add('active');
        }
    }
    passwordBtn.addEventListener('click',()=>toggleButton('password'))
    phoneBtn.addEventListener('click',()=>toggleButton('phone'))
})
document.addEventListener('click', (event) => {
    if (event.target.id === 'close') {
        document.querySelector('.login-container').remove();
    }
});





