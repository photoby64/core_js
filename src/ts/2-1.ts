


// 숫자만 담을 수 있는 배열

let num:number[] = [1,2,3];





// 문자만 담을 수 있는 배열

let str:string[] = ['a','b','c'];







// 다양한 타입을 포함할 수 있는 배열
// 유니온 타입!

let mixed:(string|number)[] = [64, 'a', '...', 3];






// 개수와 자리가 정의됨.

let matrix:[number,number,number][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];