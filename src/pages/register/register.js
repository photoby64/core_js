import '@/pages/register/register.css'
import { gsap } from 'gsap'
import pb from '../../api/pocketbase'
import Swal from 'sweetalert2';

console.log('register');




function render(){
  
  const tag = ` 
     <div class="container">
        <h2>회원가입</h2>
        <div class="line">
          <div></div>
        </div>
        <div class="wrapper">
          <div class="step-1">
            <h3>
              로그인에 사용할 <br />
              아이디를 입력해주세요.
            </h3>
            <label for="idField"></label>
            <input type="email" id="idField" placeholder="아이디(이메일)입력"/>
            <button disabled type="button" class="next-1">다음</button>
          </div>
          <div class="step-2">
            <h3>
              로그인에 사용할 <br />
              비밀번호를 입력해주세요.
            </h3>
            <label for="pwField"></label>
            <input type="password" id="pwField" placeholder="비밀번호 입력"/>
            <button disabled type="button" class="next-2">회원가입</button>
          </div>
        </div>
      </div>
  `
  document.body.insertAdjacentHTML('beforeend',tag)
}





function register(){
 
  const idField = document.querySelector('#idField')
  const pwField = document.querySelector('#pwField')
  const next1 = document.querySelector('.next-1')
  const next2 = document.querySelector('.next-2')
  
  function handleValidation(e){
    const target = e.currentTarget

    if(target.value.length > 5){
      target.nextElementSibling.disabled = false;
    }else{
      target.nextElementSibling.disabled = true;
    }
  }

  function handleNext(){
    gsap.to('.wrapper',{x:-460,ease:'power2.inOut'})
    gsap.to('.line > div',{width:'70%'})
  }

  function handleRegister(){
    pb.collection('users').create({
      email:idField.value,
      password:pwField.value,
      passwordConfirm:pwField.value
    })
    .then(()=>{
      Swal.fire({ text: '가입완료 넘어가유'})
      .then(()=>{
        location.href = '/src/pages/login/'
      })
    })
    .catch(()=>{
      Swal.fire({text:'잘못입력하셨음여'})
      .then(()=>{
        location.reload()
      })
    })
    

  }

  idField.addEventListener('input',handleValidation);
  pwField.addEventListener('input',handleValidation);

  next1.addEventListener('click',handleNext)
  next2.addEventListener('click',handleRegister)

}


render()
register()