/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.
// html 13-1 때문에 cta 주석 처리함





/*

class MyClass {
  // 여러 메서드를 정의할 수 있음
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}

*/

class Animal {

  legs = 4; 
  tail = true; // 퍼플릭 클래식 필드, constructor 밑에 적는거랑 기능상은 똑같은데......
  #name = 'unknown' // #은 프라이빗 필드가 됨. 일종의 캡슐화 



  constructor(name){ // 최초 1회만 실행, 초기화에 주로 씀
    
    
    this.#name = name
    this.stomach = [];
    //console.log(this.#name);

  }

  get eat(){
    return this.stomach;
  }

  set eat(food){
    this.stomach.push(food);
  }




}




// const a = new Animal(); // 결과: 프로토타입 오브젝트




// a.eat
// a.eat = '사과'
// console.log(a.name);



// 이 클래스를 확장시켜 타이거를 만들겠다.
class Tiger extends Animal{

  static optins = {
    version: '1.0.0',
    company: '8-b studio',
    ceo: '신선범'
  }

  constructor(name){
    super (name) 
    this.pattern = '호랑이 무늬'
  }
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }

  static bark(sound){
    return sound + '🐯'
  }

}

// const a = new Animal('몽실이');
// const 호랑이 = new Tiger('호돌이');

// 호랑이.hunt('늑대')


/*

const button = document.querySelector('.btn');

let count = 0;

function handleClick(){

  const tag = `
    <div>${++count + 'clicked'}</div>
  `

  document.body.insertAdjacentHTML('beforeend',tag)
  
}

button.addEventListener('click',handleClick)

*/










/*
// 코드를 1차 분리함 

const button = document.querySelector('.btn');

let count = 0;

function handleClick(){

  const tag = `
    <div>${++count + 'clicked'}</div>
  `

  document.body.insertAdjacentHTML('beforeend',tag)
  
}

button.addEventListener('click',handleClick)

*/











// class Button{
//   constructor(selector){

//     this.button = document.querySelector(selector)
//     this.count = 0;
//     this.attachEvent();


//   }

//   handleClick(){
//     // console.log('clicked!!!');
//     console.log(this);

//   }

//   attachEvent(){
//     this.button.addEventListener('click', this.handleClick.bind(this))
//     // this.button.addEventListener('click', ()=> this.handleClick())

//   }



// }

// const button = new Button('.btn');



class Button{
  constructor(selector){

    this.button = document.querySelector(selector)
    this.count = 0;
    this.attachEvent();


  }

  createTag(){
    return `<div>${++this.count + 'clicked'}</div>`

  }

  #render(){
    document.body.insertAdjacentHTML('beforeend', this.createTag())
  }

  handleClick(){
    // console.log('clicked!!!');
    // console.log(this);
    this.#render()

  }

  attachEvent(){
    this.button.addEventListener('click', this.handleClick.bind(this))
    // this.button.addEventListener('click', ()=> this.handleClick())

  }



}

const button = new Button('.btn');
const button2 = new Button('.btn2');








class User {

  #password

  constructor(userId, userPW){

    this.userId = userId;
    this.#password = this.hashPassword(userPW);
  }


  hashPassword(pw){
    return 'hashCODE' + pw + '소금촵촵';
  }

  



}

// user.hashPassword // 출력:return 'hashCODE' + pw + '소금촵촵';


const user = new User('64','hello123');
