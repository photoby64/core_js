/*
💫 operator 연산자






❗️논리 연산자 (Logical Operators)
주로 조건문에서 여러 조건을 결합할 때 사용합니다.

&& : 논리 AND (모두 true여야 true)
|| : 논리 OR (하나라도 true면 true)
! : 논리 NOT (true를 false로, false를 true로 바꿈)


❗️ 삼항 연산자 (Ternary Operator)
간단한 조건문을 한 줄로 작성할 때 사용합니다.

조건 ? 참일 때의 값 : 거짓일 때의 값








⭐️ 논리 연산자 (Logical Operators)

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













1. 산술 연산자 (Arithmetic Operators)
숫자 계산에 사용되는 연산자입니다.

+ : 더하기
- : 빼기
* : 곱하기
/ : 나누기
% : 나머지
** : 거듭제곱 (예: 2 ** 3은 2의 3제곱인 8을 반환)
2. 대입 연산자 (Assignment Operators)
변수에 값을 할당하거나, 연산 후의 값을 할당하는 데 사용됩니다.

= : 값 할당 (예: x = 5)
+= : 더한 값을 할당 (예: x += 5는 x = x + 5와 같음)
-= : 뺀 값을 할당 (예: x -= 5)
*= : 곱한 값을 할당
/= : 나눈 값을 할당
%= : 나머지를 할당
3. 비교 연산자 (Comparison Operators)
값을 비교하여 true 또는 false를 반환합니다.

== : 값이 같은지 비교
=== : 값과 타입이 모두 같은지 비교 (엄격 비교)
!= : 값이 다른지 비교
!== : 값과 타입이 모두 다른지 비교 (엄격 불일치)
> : 큰지 비교
< : 작은지 비교
>= : 크거나 같은지 비교
<= : 작거나 같은지 비교
4. 논리 연산자 (Logical Operators)
주로 조건문에서 여러 조건을 결합할 때 사용합니다.

&& : 논리 AND (모두 true여야 true)
|| : 논리 OR (하나라도 true면 true)
! : 논리 NOT (true를 false로, false를 true로 바꿈)
5. 삼항 연산자 (Ternary Operator)
간단한 조건문을 한 줄로 작성할 때 사용합니다.

조건 ? 참일 때의 값 : 거짓일 때의 값
6. 증감 연산자 (Increment and Decrement Operators)
값을 1씩 증가하거나 감소시킵니다.

++ : 1 증가 (예: x++는 x = x + 1과 같음)
-- : 1 감소 (예: x--는 x = x - 1과 같음)
7. 비트 연산자 (Bitwise Operators)
정수를 2진수로 변환하여 비트 단위로 연산합니다.

& : 비트 AND
| : 비트 OR
^ : 비트 XOR
~ : 비트 NOT
<< : 왼쪽으로 비트 이동 (시프트)
>> : 오른쪽으로 비트 이동
8. 타입 연산자 (Type Operators)
데이터 타입을 확인하거나 객체를 다룰 때 사용됩니다.

typeof : 변수의 데이터 타입을 반환
instanceof : 객체가 특정 클래스의 인스턴스인지 확인
9. 쉼표 연산자 (Comma Operator)
여러 표현식을 한 줄에서 순서대로 평가하여, 마지막 표현식의 결과를 반환합니다.

예: let a = (1 + 2, 3 + 4); → a는 7이 됩니다.



























*/