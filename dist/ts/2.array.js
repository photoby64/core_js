/* Array Type */
let arr = [1, 2, 3];
let str = ['a', 'b', 'c'];
/* generic type 타입 변수 => 함수 */
let _arr = [1, 2, 3];
let _str = ['a', 'b', 'c'];
// 유니온 타입 union type + array type
let multi = ['hello', 10, false];
multi = [10, 'hi']; // 자리는 상관이 없당. 그리고 빠지는것도 상관이 없다.
// 자리를 정할수 있을까? 빼먹으면 안되는거 아닌가? ->튜블!
/* Tuple Type */
let tuple = [1, 2];
// tuple = ['a']; // 에러!
// tuple = ['a',64]; // 에러!
let tupleA = [64, 3031];
let person = ['py', 10];
// 다차원 배열
const user = [
    ['윤경', 10],
    ['윤겅', 10],
    ['운경', 10]
];
export {};
