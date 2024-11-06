
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


// [1] 단순히 콘솔 로그를 출력하고, 반환 값은 없다.

function a(){

}
a()


// [2] 같은 로그를 출력하지만, 빈 객체가 생성되고 반환된다

new a()

console.log(new a());


console.log('⭐️ 함수 예시⭐️');

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

// Array

// function

// this


