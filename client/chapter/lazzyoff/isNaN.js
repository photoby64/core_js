/*



isNaN()


문법:
isNaN(value); // value: 검사할 값 (문자열, 숫자 등)

isNaN()은 **"is Not a Number"**의 약자로, 주어진 값이 숫자가 아닌지 확인하는 함수입니다. 
이 함수는 특정 값이 숫자가 아니면 true를 반환하고, 숫자라면 false를 반환합니다.


즉, 숫자로 변환 가능한 값은 false 입니다.

문자열 '123', '3.14' 등은 숫자로 변환될 수 있기 때문에 isNaN()은 false를 반환합니다.
true, false도 각각 숫자 1, 0으로 변환되므로 isNaN()은 false를 반환합니다.

숫자로 변환할 수 없는 값은 true 입니다.
'hello'처럼 숫자로 변환할 수 없는 값은 true를 반환합니다.




isNaN(123);          // false (숫자 123은 숫자임)
isNaN('123');        // false (문자열 '123'은 숫자로 변환 가능)
isNaN('Hello');      // true (문자열 'Hello'는 숫자로 변환할 수 없음)
isNaN(true);         // false (boolean true는 숫자 1로 변환됨)
isNaN(undefined);    // true (undefined는 숫자로 변환할 수 없음)
isNaN(NaN);          // true (NaN 자체는 숫자가 아니므로 true 반환)
isNaN('123abc');     // true (문자열 '123abc'는 숫자로 변환할 수 없음)




Number.isNaN()과의 차이
isNaN()은 값을 숫자로 변환할 수 있는지 여부를 판단하는 함수이지만, Number.isNaN()은 값이 정확히 NaN인지를 확인하는 함수입니다.
따라서, isNaN()은 값이 숫자로 변환 불가능한지 확인하고, 
Number.isNaN()은 값이 정확히 NaN인지 확인하는 차이가 있습니다.


isNaN(NaN);          // true
Number.isNaN(NaN);   // true

isNaN('Hello');      // true
Number.isNaN('Hello'); // false



*/