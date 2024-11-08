/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */


// 자바스크립트의 객체는 명세서에서 명명한 [[Prototype]]이라는 숨김 프로퍼티를 갖습니다. 
// 이 숨김 프로퍼티 값은 null이거나 다른 객체에 대한 참조가 되는데, 
// 다른 객체를 참조하는 경우 참조 대상을 '프로토타입(prototype)'이라 부릅니다.
// __proto__을 사용하면 값을 설정할 수 있습니다.






// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우







// enumerable

const animal = {
  legs:4,
  tail:true,
  stomach:[],
  get eat(){  // getter
    return this.stomach
  },
  set eat(food){  // setter
    this.stomach.push(food)
  }
}





// 함수 실행
// animal.eat = '고기' // setter
// animal.eat // getter

// set은 매개변수 필요, get은 return 필요


const tiger = {
  pattern: '호랑이 무늬',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__: animal
}
console.log(tiger.hunt('여우')); 







// tiger.legs // 출력: 4

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger
}

const 한라산호랑이 = {
  color: 'orange',
  name: '한돌이',
  __proto__: tiger

}

// 위에 처럼 쓸수 있지만 공장 처럼 찍어낼 수 없기 때문에
// 우리는 생성자 함수를 써서 이를 만들 수 있다.
// 

// 함수의 prototype 프로퍼티
// 생성자 함수는 겟터 셋터 구분못해서 나눠서 써야한다. 구려.. 그래서 잘 안씀ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ



function Animal(){
  this.legs = 4;
  this.tail = true
  this.getEat = function(){
    return this.stomach ?? []

  }
  this.setEat = function(food){
    this.stomach = [];
    this.stomach.push(food)
  }

}

// const a = new Animal;

function Tiger(name){
  Animal.call(this)
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt - function(target){
    this.prey = target;
    this.eat = target;
    return `${target}에게 조용히 접근한다.`
  }

}

// Tiger.prototype = a;

const 금강산호랑이 = new Tiger('금순이');

console.log(금강산호랑이);







// call -> 빌려쓰기
// apply
// bind




function sum(a, b, c) {
  console.log(this);
  return a + b + c
}

// [call]
// this를 전달함 인수를 개별로 받음 => 함수 실행 o
// this를 내맘대로 바꿀 수 있음
// 함수를 대신 실행시켜줌
// 안에 디스를 종종 바꿔줘야할때가 있기 때문에 함수를 대실 실행
sum.call('hello', 1, 2, 3) 


sum.apply('hello', 1, 2, 3) // this를 전달함 인수를 배열로 받음 => 함수 실행 o

const b = sum.bind('hello', 1, 2, 3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함 