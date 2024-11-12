
/* ------------------------ */
/* Data Types               */
/* ------------------------ */










/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
//let empty = null;
//console.log(empty);

const empty= null;
console.log(typeof empty); //object

// 2. 값이 할당되지 않은 상태

let undef = undefined;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const str = new String('hellow');
console.log(typeof str);

console.log(str.toUpperCase());



function example() {}
console.log(typeof example);



const person= {
  name: 'may',
  greet: function() {
    console.log('Hello, ' + this.name);

  }
};

person.greet();

const propertyName= 'name';
console.log('대괄호 연산자: ' +person[propertyName]);

console.log('점 연산자: ' + person.name);




const person2= {
  'nick name': '64',
  age: 20
};

const propertyName2 = 'nick name';
console.log(person2[propertyName2]);
console.log(person2.age);




const car = {

  make: 'Toyota',
  model: 'Corolla',

} ;

const key = 'model';
console.log(car[key]);

car[key] = 'Camry';
console.log(car.model);


// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;
console.log(integer);

const flotingPointNumber= 123.5;

const num= new Number(23);
console.log(typeof num);


// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// 6. 참(true, yes) 또는 거짓(false, no)


const bool = new Boolean(true);
console.log(bool);
console.log(typeof bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)


// (1) 변수 선언자를 이용하여 객체 생성

// 객체를 한 번에 정의하는 것 -1

const obj= {
  name: 'sixfour',
  age: 18,
  job: 'housekeeper',
  sex: 'non-binary',
};
console.log(obj);


// 기존 속성 obj에 새로운 속성 추가
obj.marrid = true; //점 표기법

// 기존 속성 obj에 속성을 복사하고 
// 새로운 속성 추가하여
// 새로운 속성을 만드는 방법

const newObj= {
  
  ...obj, // 기존 obj 속성 복사
  
  married: true,
  country: 'Korea',
};

console.log(newObj);



// (2) new Object를 이용해서 새로운 객체를 생성
// 객체에 속성 하나씩 추가
const obj_1= new Object();
obj_1['name'] = '64';
obj_1['age'] = 18;

console.log(obj_1);

// 객체 속성을 동시에 추가하는 방법 -1 

const obj_3= new Object();
Object.assign(obj_3, {
  name: '64',
  age: 18,


});
console.log(obj_3);





const map= new Map();
map.set('name', 'sixfour');

map.set('age', 18);

console.log(map);




// **Object.keys(obj)**는 
// 객체의 키들을 배열로 반환합니다.

const obj_4= {
  name: 'sixfour',
  age: 18,
  job: 'housekeeper',
  sex: 'non-binary',
};
console.log(Object.keys(obj_4));






// **Object.values(obj)**는 
// 객체의 값들을 배열로 반환합니다.

const obj_5= {
  name: 'sixfour',
  age: 18,
  job: 'housekeeper',
  sex: 'non-binary',
};
console.log(Object.values(obj_5));




// **Object.entries(obj)**는 
// 객체의 키와 값을 배열의 배열로 반환합니다.

const obj_6= {
  name: 'sixfour',
  age: 18,
  job: 'housekeeper',
  sex: 'non-binary',
};
console.log(Object.entries(obj_6));


// 8. 고유한 식별자(unique identifier)

const uuid = Symbol('uuid');
const uuid2 = Symbol('uuid');



/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof

console.log(typeof uuid);    // "symbol" (문자열)

console.log(uuid === uuid2); // false (각각 다른 고유의 심볼)

console.log(typeof uuid === uuid2); // false (타입 비교에서 문자열과 심볼 객체 비교)

console.log(typeof uuid === typeof uuid2);  // true (타입은 동일)








// 2) 함수 typeof()



console.log('❗️');

// [1] 
function a(){ // 함수를 정의
// 함수의 내용은 비어 있음
}
a() // 함수를 호출 => 출력되는 값은 없음
console.log(a());

console.log('✅');
// [2] 
// 생성자 함수를 호출하는 방식으로 객체를 생성 하는것.

new a() 

console.log(new a());






console.log('🌈');
function b() {
  this.name = 'ObjectB';
}

const objj = new b();
console.log(objj.name); // "ObjectA" 출력



console.log('⭐️');

function aa(){
  this.name= 'lazzy64';
}

const obj_7= new aa();

console.log(obj_7.name);
console.log(obj_7);



  // 점. 표기법 다시 정리//
  // 객체의 속성에 접근 하는 가장 직관적이고 쉬운 방법
  // 객체와 그 속성 이름을 .점으로 구분하여 속성값을 가져오거나 설정하는 방식






// 언어 상, 오류



// Object

// 객체에 메서드를 정의하는 방법

// 1. normal function 

const user= {
  name: 'pyk',
  age: 20,
  payment: false,
  
  
  
// this는 메서드가 호출된 컨텐츠 즉, user 객체를 가르킨다.
  sayHi: function(){
    console.log(this);
  },


// 화살표 함수는 자신의 this를 가지고 있지 않고 상위 스코프 this를 참고한다.
// 만약 user.sayHi2()를 호출하면 this는 user가 아닌 글로버객체나
// 상위 스코프에 있는 this를 가르킨다.
// 즉, window 객체 혹은 global 객체를 출력한다.
  sayHi2: ()=>{
    console.log(this); 
  },

  // 일반 함수 내 화살표 함수
  sayHi3(){

    const sayBye = () => {
      console.log( this.age = 30);
    }

    sayBye();

  }
};





  const sayHi4 = {
    sayBye: function() {
      console.log(this.age = 30);
    }
  };

console.log('1️⃣');
user.sayHi();

// 2. arrow function 
console.log('2️⃣');
user.sayHi2();

// 3. concise method
console.log('3️⃣');
user.sayHi3();




// 함수를 호출하면서 동시에 생성
function User(){
  this.payment = false;
  this.age = 29;
}

const _a = new User;
const _a2 = new User;
const _a3 = new User;
const _a4 = new User;
const _a5 = new User;
const _a6 = new User;

console.log(_a2);




// Array

console.log('⭐️');

const arr = ['a', {name:'lazzy-64'}, ()=>{}, 6, 4];

// [[Prototype]] Array(0) 출력
console.log(arr); 

console.log('🥹');


// 근데 타입은 객체로 표시됨ㅋㅋ 골때려
console.log(typeof arr); 






// ⭐️ 나중에 읽어보기 ⭐️
// 엄격한 타입 구분을 위한 방법:
// Array.isArray(): 배열인지 아닌지를 정확히 구분할 수 있습니다.

// javascript
// 코드 복사
// const arr = [1, 2, 3];
// console.log(Array.isArray(arr));  // true
// instanceof 연산자: 객체가 특정 생성자 함수의 인스턴스인지 확인할 수 있습니다. 배열뿐만 아니라 다양한 객체를 구별할 수 있어요.

// javascript
// 코드 복사
// const arr = [1, 2, 3];
// console.log(arr instanceof Array);  // true
// console.log(arr instanceof Object);  // true
// constructor 속성: 객체의 생성자 정보를 통해 더 세밀하게 타입을 확인할 수 있습니다.

// javascript
// 코드 복사
// const arr = [1, 2, 3];
// console.log(arr.constructor === Array);  // true
// console.log(arr.constructor === Object);  // false
// Object.prototype.toString.call(): 이 방법은 객체의 내부 클래스를 정확히 구분할 수 있는 가장 엄격한 방법입니다. 이를 사용하면 배열, 객체, 함수 등을 정확하게 구별할 수 있습니다.

// javascript
// 코드 복사
// const arr = [1, 2, 3];
// console.log(Object.prototype.toString.call(arr));  // "[object Array]"
// const obj = { a: 1 };
// console.log(Object.prototype.toString.call(obj));  // "[object Object]"
// 이 방법들을 사용하면 typeof로만 확인할 때의 한계를 넘어서서 더욱 정확한 타입 체크를 할 수 있습니다! 😄
// ⭐️ 나중에 읽어보기 ⭐️




// function
console.log('⭐️');



function sum(a,b){
  return a+ b
}

const result= sum(10, 5);

console.log(result);



function 붕어빵틀(재료){
  return `따끈하고 맛있는 ${재료} 맛 붕어빵 입니다!`
}

const 팥붕= 붕어빵틀('팥');
const 슈붕= 붕어빵틀('슈크림');
const 와붕= 붕어빵틀('와사비');
const 피붕= 붕어빵틀('피자');

console.log(팥붕); 
console.log(슈붕); 
console.log(와붕); 
console.log(피붕); 




// 익명 함수 (예시)

// 익명의 함수처럼 동작하는 함수
// 런타임에 코드가 실행되기 전에 
// 함수 본문을 동적으로 정의할 수 있게 해주는 
// 자바스크립트의 내장 기능

const f= new Function('sjdjsndjsd');
console.log(f);


// this



// 'name' 매개변수
// 'Parameter'
// 함수의 괄호 안에서 선언된 변수. 
// 함수 내부에서 사용할 값의 이름입니다.

function greet(name) { 
  console.log(`Hello, ${name}!`);
}

greet('Alice');  
// 'Alice'는 인자
// 'Argument'