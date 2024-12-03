// 타입 annotation 주석
/* number type */
let num1 = 10;
let num2 = NaN;
/* string type */
let str1 = 'hi';
let str2 = `hi${num1}`;
console.log(str2);
/* boolean type */
let bool1 = true;
let bool2 = false;
/* undefined type */
let undef = undefined;
/* literal type */
let numA = 10;
let strA = 'hello';
// strA = 64; // 에러!
// numA = 64; // 에러!
/* unknown type */
let unknown;
/* null type */
let nulA = null;
let never;
// 어떤값을 내보내지 않으면서.. 에러를 내보내거나 무한루프를 사용하거나..
let any;
export {};
