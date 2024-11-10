/*
💫 operator 연산자






[1] ?? 

- Nullish 병합 연산자

null 또는 undefined가 "아닌" 첫 번째 값을 반환합니다.
모든 값이 null 또는 undefined일 경우 마지막 값을 반환합니다.


- Nullish 병합 할당 연산자
a ??= b 
a가 undefined, null일때 b의 값을 a에 할당





[2] logical operators : 논리 연산자

논리 연산자는 '불리언 논리 연산'을 수행하는 연산자로 &&, ||, ! 총 3가지의 연산자가 있습니다.

&& : 논리 AND (두 조건이 모두 참일 때만 참)
|| : 논리 OR (두 조건 중 하나만 참이면 참)
! : 논리 NOT (값의 부정)



1. && 

- 논리 곱 연산자 (fnn)

값을 비교하여 첫번째 Falsy 값을 반환
모든 값이 Truthy일 경우, 마지막 Truthy 값을 반환

- 논리 곱 할당 연산자 fnn
a &&= b
a가 true일때 b의 값을 a에 할당




2. || 

- or 연산자  (논리합 연산자, tor)
a = a || b 
값을 비교하여 첫 번째 Truthy 값을 반환
모든 값이 Falsy일 경우, 마지막 Falsy 값을 반환


- or '할당' 연산자
a ||= b
a가 false일때 b의 값을 a에 할당



문제)
let a = 10;
let b = '';
let value = Boolean(b);

문제 1) a = a || b 
문제 2) a ||= b



3. ! 

- 논리 부정 연산자

값의 참과 거짓을 반대로 바꿉니다.

!true;  // 결과: false
!false; // 결과: true





















*/