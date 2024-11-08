/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */



// 3항 연산자

// 3항 연산자 (ternary)는 조건에 따라 다른 값을 변환한 조건문 입니다.
// 3항 연산자라고 불리는 이유는 조건, 참일때의 값, 거짓일 때의 값 이렇게 2개의 항을 가지기 때문입니다.
// 조건을 간단하게 평가하여 참(true)일 때와 거짓 (fals) 일때 각각 다른 값을 반환합니다.


// 기본 형식
// condition ? valueIfTrue : valueIfFalse;
// 평가할 조건 ? 조건이 참일 때 반환할 값 : 조건이 거짓일 때 반환할 값;

// 예시 const age = 20;

// const message = (age >= 18) ? '성인입니다.' : '미성년자입니다.';
// console.log(message);  // '성인입니다.' 출력

// 3항 연사자의 특징
// 3항 연산자는 if...else문을 간결하게 표현할 수 있는 방법입니다.
// 중첩도 가능하지만, 가독성이 떨어질 수 있으므로 간단한 조건에서만 사용하는것이 좋습니다.

// 중첩 예시

const score = 85;
const grade = (score >= 90) ? 'A' : 
              (score >= 80) ? 'B' : 
              (score >= 70) ? 'C' : 'D';

console.log(grade);  // 'B' 출력


// score가 90 이상이면 'A'가 반환됩니다.
// score가 80 이상 90 미만이면 'B'가 반환됩니다.
// score가 70 이상 80 미만이면 'C'가 반환됩니다.
// score가 70 미만이면 'D'가 반환됩니다.



// nullish 병합 연산자 ??
// nullish 병합 연산자는 자바스크립트에서 null이나 undefined 값을 확인할 때 사용하는 연산자 입니다.
// 이 연산자는 왼쪽 피연산자가 null 또는 undefined일 때만 오른쪽 피연산자를 반환합니다.
// 이를 통해 null이나 undefined인 경우에만 기본값을 제공 할 수 있습니다.

// 기본 문법
// let result = value ?? defaultValue; 
// value가 null 또는 undefined가 아니라면 value를 반환하고,
// value가 null이나 undefined이면 defaultValue를 반환합니다.

// 예시 //


let username;
console.log(username ?? "Guest");  // "Guest" (username이 undefined이므로 기본값 사용)

username = "Alice";
console.log(username ?? "Guest");  // "Alice" (username이 정의되어 있으므로 기본값 미사용)

// || 연산자와의 차이점
// || 연산자는 false, 0, '' 같은 falsy 값도 null이나 undefind 처럼 처리하여 오른쪽 피연산자를 반환하지만 
// ?? 연산자는 null과 undefined 만을 확인 합니다.



let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}


// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.


// 만약 emailAddress가 undefined 이거나 emailAddress가 null 이면 'user@company.io'
// 그게 아니면 receivedEmailAddress는 emailAddress 다.

// 가독성을 위해 갈호로 묶어줌
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 'user@company.io' : emailAddress

console.log(receivedEmailAddress);



// 문제: 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

// 기본 문법
// let result = value ?? defaultValue; 

// 변수나 값이 null 또는 undefined일 경우에만 오른쪽 값을 반환합니다.
// value가 null 또는 undefined가 아니라면 value를 반환하게 됩니다.


receivedEmailAddress = emailAddress ?? 'user@company.io' ;




console.clear();

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환 tor
// ?? → 첫번째 정의된(defined) 값을 반환 ??null undefined



const WIDTH = '10px';
const isActive = false;

console.log( 0 || WIDTH);
// 출력: '10px'
//  첫 번째 값이 falsy(거짓 같은 값)일 때 두 번째 값을 반환합니다. 
// 0은 falsy 값이기 때문에 '10px' 값이 출력됩니다.

console.log( 0 ?? WIDTH );
// 0
// 첫 번째 값이 null 또는 undefined일 때만 두 번째 값을 반환합니다. 
// 0은 falsy 값이지만 null도 아니고 undefined도 아니기 때문에 0이 그대로 반환됩니다.


console.log( undefined || WIDTH);
// '10px'
// undefined는 falsy 값이므로 || 연산자는 두 번째 값인 '10px'를 반환합니다.

console.log('⬇️');
console.log( undefined ?? WIDTH);
// undefined [땡]
// 
//undefined는 nullish 값 중 하나이기 때문에, ?? 연산자는 undefined를 nullish 값으로 인식하고 두 번째 값인 '10px'를 반환합니다.

console.log('⬇️');
console.log( isActive || WIDTH );
// isActive [땡]
//
// isActive는 false(위에 선언 되어 있음)이고, false는 falsy 값입니다.
// || 연산자는 첫 번째 truthy 값을 반환하므로 '10px'가 반환됩니다.

console.log('⬇️');
console.log( isActive ?? WIDTH );
// '10px' [땡]
//
// ?? 연산자는 nullish 값(즉, null이나 undefined)에 대해서만 오른쪽 값을 반환합니다.
// isActive는 false이고, false는 nullish가 아니기 때문에 그대로 false가 반환됩니다.

console.log( '' || WIDTH );
// '10px'
// '' (빈 문자열)는 falsy 값입니다.

console.log( '' ?? WIDTH );
//'' 
//빈 문자열('')은 falsy 값이긴 하지만, null이나 undefined가 아니기 때문에, 왼쪽 값인 ''을 그대로 반환합니다.




// or 연산자가 여러개를 비교하는 경우 첫번째 Truthy 값을 반환합니다. 
// 만약 모든 값이 falsy라면, ⭐️마지막 값⭐️을 반환 합니다.
// 예시 //

let a = 0; 
let b = null;
let c = false;
let d = 'Hello';

let result = a || b || c || d;
console.log(result);  // 'Hello'가 출력됩니다




// JavaScript에서 falsy 값
// false
// 0 (숫자 0)
// -0 (음수 0)
// 0n (BigInt 값으로서 0)
// "" (빈 문자열)
// null
// undefined
// NaN (Not-a-Number)


// 병합 연산자(?? 연산자)의 value의 값이 모두 null 이거나 undefined일 경우에는
// 마지막 null이나 undefined가 반환됩니다.
// [예시] //
let value1 = null ?? undefined ?? null ?? undefined;
console.log(value1);  

// [예시]

let value2 = null ?? undefined ?? "값 없음" ?? "최종 값";
console.log(value2);  

// 결과: "값 없음"
// 첫 번째 값인 null은 nullish(null 또는 undefined) 이므로 다음 값으로 넘어갑니다.
// 두 번째 값인 undefined 역시 nullish이므로, 그 다음 값인 "값 없음"이 반환됩니다.
// "값 없음"은 nullish가 아니므로 최종적으로 "값 없음"이 반환됩니다.

let _value = null ?? undefined ?? "값 없음" ?? "최종 값"; 
// 출력: 값 없음
// 여기서 첫번째 _value의 오른쪽에 있는 undefined를 반환하지 않고 'Hello'가 반환되는걸까?
// ⭐️그 이유는..
// 병합 연산자(??연산자)는 null 또는 undefined인 값들은 건너뛰고, 그 다음에 나오는 첫 번째 "truthy" 값을 반환하기 때문이다.

let _value_ = null ?? undefined ?? null ?? "최종 값"; 
// 출력: 최종 값

let value3 = null ?? undefined ?? null ?? undefined; 
// 출력: undefined
// ??연산자가 모두 null이거나 undefined라면 마지막 값이 없음으로 마지막 null이나 undefined를 반환합니다.