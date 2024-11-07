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