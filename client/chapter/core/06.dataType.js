
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

const obj= {
  name: 'sixfour',
  age: 18,
};
console.log(obj);
console.log(typeof obj);


const obj_1= new Object;
obj_1['name'] = '64';
obj_1['age'] = 18;
console.log(obj_1);



// **Object.keys(obj)**는 객체의 키들을 배열로 반환합니다.
// **Object.values(obj)**는 객체의 값들을 배열로 반환합니다.
// **Object.entries(obj)**는 객체의 키와 값을 배열의 배열로 반환합니다.

// 8. 고유한 식별자(unique identifier)


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object

// Array

// function

// this


