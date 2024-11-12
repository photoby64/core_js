


// class Todo {

//   constructor(obj){
    

//     const {input, button, renderPlace}= obj;


//     this.input =  document.querySelector(input);
//     this.button =  document.querySelector(button);
//     this.renderPlace =  document.querySelector(renderPlace);


//   }

// }

// const todo = new Todo({
//   input: '.todo',
//   button: '.btn',
//   renderPlace: '.todoList',

// })




// class Todo {

//   constructor({input,button,renderPlace}){

//     this.input = document.querySelector(input);
//     this.button = document.querySelector(button);
//     this.renderPlace = document.querySelector(renderPlace);

//     this.attachEvent()

//   }


//   get currentInputTodoData(){
//     return this.input.value
//   }

//   set currentInputTodoData(value){
//     this.input.value = value
//   }

// // 버튼에 클릭 이벤트 등록 input 값이 콘솔창에 나올 수 있도록 
// /* 
//   1. attachEvent 메서드를 만든다.
//   2. 해당 메서드 안에서 button에게 click event를 바인딩 한다.
//   3. click event에 연결할 handleClick 메서드를 만든다.
//   4. handleClick 함수 안에서 input의 value를 가져온다.
//   5. 콘솔창에 출력한다.
//  */

//   handleClick(){
//     console.log( this );
    
//   }

//   attachEvent(){
//     this.button.addEventListener('click',()=> {
      
//       this.handleClick()
      
//     })
//   }

// }


// const todo = new Todo({
//   input: '.todo',
//   button: '.btn',
//   renderPlace: '.todoList'
// })


// 클래스도 나눌수 있다!!!!!! 
// model -> 데이터 모델
// view -> 랜더링
// control -> 이벤트
// 근데 우리는 하나로 합쳐서 만들었음~

// 프로토 타입..?

class Todo {

  

  constructor({input,button,renderPlace}){

    this.input = document.querySelector(input);
    this.button = document.querySelector(button);
    this.renderPlace = document.querySelector(renderPlace);
    this.todoListArray = []; // 5번
    this.attachEvent() // 4번 끝나고 연결해줌

  }


  get currentInputTodoData(){
    return this.input.value
  }

  set currentInputTodoData(value){
    this.input.value = value
  }

// 버튼에 클릭 이벤트 등록 input 값이 콘솔창에 나올 수 있도록 
/* 
  1. attachEvent 메서드를 만든다.
  2. 해당 메서드 안에서 button에게 click event를 바인딩 한다.
  3. click event에 연결할 handleClick 메서드를 만든다.
  4. handleClick 함수 안에서 input의 value를 가져온다.
  5. 콘솔창에 출력한다.
  6. 태그 만들기 
  7. 랜더링 하기 
 */

  addTodoData(){ // 5번 데이터 저장과 연결
    this.todoListArray.push(this.currentInputTodoData); 
  }
  
  createTag(){ // 3번
    return `<li> ${this.currentInputTodoData} </li>` // 템플릿 리터럴 
  }

  #render(){ // 4번
    this.renderPlace.insertAdjacentHTML('beforeend',this.createTag()) // beforeend: 끝나는 지점에
    this.input.value = ''
  }


  handleClick(){ // 2번
    console.log( this.currentInputTodoData );
    this.#render()
    
  }

  attachEvent(){ // 1번
    this.button.addEventListener('click',(e)=> {
      e.preventDefault();
      this.addTodoData()
      this.handleClick()
    })
  }

}


const todo = new Todo({
  input: '.todo',
  button: '.btn',
  renderPlace: '.todoList'
})



// 이렇게 만들면 재사용성 있음..