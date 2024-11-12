/*
.length




.length는 배열(array), 문자열(string), 객체(object) 등의 길이나 크기를 반환하는 속성(property)입니다. 
하지만 이 속성의 사용 방식은 타입마다 조금씩 다릅니다.






1. 배열에서의 .length
배열에서 .length는 배열의 요소 개수를 반환합니다. 

let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.length);  // 3







2. 문자열에서의 .length
문자열에서 .length는 문자열의 길이(즉, 문자의 개수)를 반환합니다.

let word = "hello";
console.log(word.length);  // 5








3. 객체에서의 .length
객체는 .length 속성을 가지지 않습니다. 그러나 배열처럼 인덱스가 있는 속성을 가진 객체에서 .length를 사용할 수 있습니다.

let obj = {0: 'apple', 1: 'banana', 2: 'cherry'};
console.log(obj.length);  // undefined
결과: 일반 객체는 .length를 직접 가지고 있지 않기 때문에 undefined를 반환합니다.



객체의 크기를 구하려면 Object.keys(obj).length 또는 
Object.values(obj).length 등을 사용합니다.









*/