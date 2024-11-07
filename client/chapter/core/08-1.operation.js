/* ---------------- */
/* Operators        */
/* ---------------- */


// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상


let a= 10;
let b= 30;


// 단항 연산자
let unary = -a;
console.log(unary);

// 이항 연산자
let binary = (a / 1) + (b * 1);
console.log(binary);

// 삼항 연산자
let ternary = a > 10 ? '사실입니다.' : '거짓입니다';
console.log(ternary);

ternary = a > 9 ? 'true' : 'false';
console.log(ternary); 



// 산술 연산자: 덧셈
let addition = 1 + 2;
console.log(addition);




// 산술 연산자: 뺄셈
let subtraction = 10 - 1;
console.log(subtraction);





// 산술 연산자: 곱셈
let multiplication = 20 * 3;
console.log(multiplication);


// 산술 연산자: 나눗셈
let division = 30 / 3;

// 산술 연산자: 나머지
let remainder = 10 % 2;
console.log(remainder);

// 산술 연산자: 거듭 제곱
// 자바스크립트에서 안전하게 표현할 수 있는 
// 최대 정수인 Number.MAX_SAFE_INTEGER와 같은 값

let power = (2** 53) -1 ;
console.log(power);

console.log(Number.MAX_SAFE_INTEGER);

console.clear();

Math.pow(2,53)
console.log(Math.pow(2,53));




let ex = [1,2,3] + [4,5,6]; 
console.log(ex); //1,2,34,5,6

let first = [1,2,3];
let second = [4,5,6];


// concat.()
// 기존 배열이나 문자열을 변경하지 않고
// 새로운 배열이나 문자열을 반환
// 👎🏻 옛날 방식이라 잘 안씀


// [1] 배열에서의 concat 
console.log('🔥');
const mix = first.concat(second);
console.log(mix);


//[2] 문자에서의 concat

let str1 = 'Hello';
let str2 = ' World';
let result = str1.concat(str2);
console.log(result); 

let greeting = 'Hello';
let name = 'John';
let fullGreeting = greeting.concat('! ', name); // '! '이 느낌표와 공백은 "Hello"와 "John" 사이에 추가될 것
console.log(fullGreeting);



// 🔥다시 정리🔥

// 함수: 독립적으로 존재하는 코드 블록.
// 메서드: 객체에 속한 함수, 객체를 통해 호출.



/* */
// function name(params: 인자) {
  
// }

// function greet(name) { // name: 인자 = params
//   console.log('Hello, ' + name);
// }

// greet('Alice'); // Alice: 인수 = Argument





// ... spread operatar 전개 연산자 <= 기호 자체를 의미
//  배열, 객체, 함수 인수에서 요소들을 쉽게 펼치거나 복사

// spread syntax 전개 구문

console.log(...first, ...second);

let spreadMix = [...first, ...second];
console.log(spreadMix);

//[예제]//
console.log('❗️');
const arr1 = [1, 2];
const arr2 = [3, 4];


// 배열의 요소들을 개별적으로 펼쳐서 여러 개의 인수로 전달하는 방식
// 배열의 요소들을 개별 인수로 전달하는 거예요. 즉, 여러 값을 분리해서 출력하고 싶을 때 사용

console.log(...arr1, ...arr2);

// 배열을 결합하여 새로운 배열을 생성하는 방식
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);



// a는 전역변수로 선언 된듯..

a % 2 !== 0 ? '홀수' : '짝수'

if( a % 2 !== 0){
  console.log('홀수');
  
}else{
  console.log('짝수');
}




// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1,2,3] + [4,5,6];


// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)


// 선,후 증감 연산자
// ++, --


// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
let total = (count % 4) * (count /= 2) + count ** 3; // ?


// let total = (10 % 4) * (5) + 5 ** 3; // ?
// let total = (2) * (5) + 125; // ?
// let total = 10 + 125; // ?
// let total = 135;







