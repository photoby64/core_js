/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty =null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태 undefined
let undef;
console.log(typeof undef);


// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
// 자바스에서 문자를 만드는 방법은 str literal, str constuructor function 2가지

// 1. str literal
const double = "hi";
const single = 64;
const backtick = `인도는 ${double / 30}이 맛있다.`; //값을 반환함.
console.log(double, single, backtick,);
console.log(typeof single,typeof backtick);

// 2. str constuructor function
const str = new String('hello');
// String 생성자 함수를 사용하여 문자열 객체를 만든다
// 문자를 담고 있는 '객체'다. 
// 생성자 함수는 앞을 대문자 Pascal Case를 따른다.


// 문자도 만들 수 있다!
const num = new Number(23); //number constuructor function


// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 64;
const floatingPointNumber = 64.3;
console.log(typeof floatingPointNumber);



// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;
console.log(typeof bigInt);


// 6. 참(true, yes) 또는 거짓(false, no)
//is has를 써서 참 또는 거짓을 표현하기!
const isActive = true;
console.log(typeof isActive);


// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = {
  name: 'sixfour',
  age: 20,
};
console.log(typeof obj);


const obj_1 = new Object();



// 8. 고유한 식별자(unique identifier)

const uuid = Symbol('uuid');
const uuid2 = Symbol('uuid');
console.log(typeof uuid===uuid2); //일치형 비교연산자. 자료형과 값이 모두 일치해야만 true
// ==는 자료형을 변환하여 비교하고 값만 같으면 ture가 될 수 있음.




/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object
// 객체에 메서드 정의하는 방법



//1. normal function
//2. arrow function => this를 찾기 위해서 매서드 안에서 함수를 정의해야 할 때.
//3. concise method(축약된) => this를 찾기 위해서  객체의 메서드를 정의할 때.


// 1. normal function

// construtor(생성자)를 포함한다. 
// 동일한 코드를 반복적으로 찍어낼 때 필요.

const user = {
  name: 'tiger',
  age: 20,
  sayHi: function () {
    console.log('hello');
  },


// 2. arrow function

  // construtor(생성자) 없음. 
  // arrow는 함수를 만들때 대소문자만 구분하는건 위험하다. 확실하게 함수로써만 사용하는 기능을 만들자.
  // 문법적 구분.
  // 생성자의 기능없이 함수의 역할만 하는 것
  // new키워드를 같이 못씀. 안전하게 사용
  // this를 바인딩하지 않습니다. (못가져오는건 아니고 상위 컨텍스트에서 this를 찾는다.)
  // 상위 컨텍스트에서 this를 찾는다.


  sayHi2:()=>{

  },


// 3. concise method 축약된 

  // 줄여서 쓰는 장점이 있다. 제일 많이 씀
  // 함수로써만 쓰기때문에 construtor(생성자) 없음
  // this 나를 호출한 대상.

  sayHi3(){

  }
}




// Array

// function

// this


