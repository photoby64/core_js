


/*

.split(' ');



요약:
.split(' ')은 문자열을 공백을 기준으로 나누어 배열로 반환하는 메서드입니다.
구분자로 사용되는 공백 외에도 다른 문자(예: ,, ;, - 등)를 구분자로 사용할 수 있습니다.
배열로 나눈 각 문자열을 원하는 방식으로 다룰 수 있게 됩니다.







.split(' ')은 문자열을 특정 구분자를 기준으로 나누어 배열로 반환하는 문자열 메서드입니다. 
여기서 ' ' (공백)은 문자열을 나누는 기준, 즉 구분자 역할을 합니다. 
이 메서드는 문자열을 여러 개의 부분으로 나누어 배열로 반환합니다.




.split(' ')의 작동 원리:

문자열에서 공백(' ')을 기준으로 나누어서 각 부분을 배열의 요소로 반환합니다.
공백으로 나누어지기 때문에, 연속된 공백이 있으면 빈 문자열("")도 배열의 요소로 포함됩니다.



예시 1: 공백을 기준으로 문자열을 나누기

const str = "Hello World JavaScript";
const result = str.split(' ');

console.log(result);
// 출력: ["Hello", "World", "JavaScript"]







예시 2: 연속된 공백 처리

const str = "Hello  World   JavaScript";
const result = str.split(' ');

console.log(result);
// 출력: ["Hello", "", "World", "", "", "JavaScript"]



문자열에 연속된 공백이 있을 경우, 공백 사이에 빈 문자열("")도 포함되어 배열에 나타납니다.








예시 3: split()에 구분자가 없을 때



const str = "Hello";
const result = str.split('');

console.log(result);
// 출력: ["H", "e", "l", "l", "o"]

구분자를 빈 문자열('')로 설정하면, 문자열의 각 문자가 배열의 개별 요소로 나뉩니다.











예시 4: 콤마','를 기준으로  split() 사용 -구분자 없이 split() 사용-

const str = "apple,banana,orange";
const result = str.split(',');

console.log(result);
// 출력: ["apple", "banana", "orange"]

split(',')은 문자열을 ,(콤마)를 기준으로 나누어 배열로 반환합니다.









 */