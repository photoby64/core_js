







/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);



// 여러 개의 숫자 인수를 받아서 그 합계를 계산하는 함수

// 함수 선언 → 일반 함수 (표현)식

// 함수 선언 → 일반 함수 (표현)식









// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function(){

};


// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello(){

};


// 콜백 함수 (표현)식
let cb = function(condition, success, fail) {
  if (condition) success(); // 조건이 참이면 success 함수 호출
  else fail(); // 조건이 거짓이면 fail 함수 호출
};

cb(
  true, // 조건이 참
  function() { console.log("성공입니다!"); }, // 성공 콜백 함수
  function() { console.log("실패입니다."); }  // 실패 콜백 함수
);

cb(true, )

// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
