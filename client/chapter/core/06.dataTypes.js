/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty =null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);


// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "hi";
const single = 64;
const backtick = `hi${64}`;
console.log(double, single, backtick,);
console.log(typeof single,typeof backtick);


// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 64;
const floatingPointNumber = 64.3;
console.log(typeof floatingPointNumber);



// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;
console.log(typeof bigInt);


// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = true;
console.log(typeof isActive);


// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = {
  name: 'sixfour',
  age: 20,
};
console.log(typeof obj);


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

// Array

// function

// this


