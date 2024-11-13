/*
🎭 includes()



includes() 메서드는 배열이나 문자열이 특정 값을 포함하고 있는지 확인하는 데 사용됩니다. 

includes() 메서드는 
불리언 값(true 또는 false)을 반환하여 
해당 값이 있는지 여부를 알려줍니다.




문법:
array.includes(element/substring, Index);

element/substring: 
배열 이나 문자열 내에서 찾고자 하는 문자열입니다.

fromIndex: 검색을 시작할 인덱스(기본값은 0)입니다. 
이 값이 양수이면 해당 인덱스부터 끝까지, 음수이면 배열의 끝에서부터 시작합니다.



예시:
const fruits = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana"));  // true
console.log(fruits.includes("grape"));   // false
console.log(fruits.includes("apple", 1)); // false 
(1번 인덱스부터 시작하여 "apple"을 찾지 못함)










*/