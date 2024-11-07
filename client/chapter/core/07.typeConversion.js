/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 123; 

console.log('🔥');

console.log(YEAR); //123

console.log(typeof YEAR); //number

console.log(typeof String(YEAR)); //string



console.log('⭐️');

console.log(YEAR + '' ); //123

console.log(typeof YEAR + '' ); //number





console.log('🎃');
// undefined, null


let days= null;
console.log(days);
console.log(typeof days + ''); 

console.log('🙇🏻‍♀️');
let undef = undefined;
console.log(undef);
console.log(typeof undef + '');







console.clear();
// boolean
let isClicked = true;
console.log(isClicked + '');




/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

console.clear();

let friend;
console.log(Number(friend));


// null

let money = null;
console.log(money / 1);



// boolean

console.clear();

let isActive = false
console.log(isActive * 1);
console.log(typeof isActive*1);


// string

let num ='100';

// 단항 연산자
console.log(+num);
console.log(typeof +num);


console.log(num / 1);


// numeric string
//10진수 표기를 위해 ',10'을 함께 표기한다. 
const width = '120.5px'

// 정수만
console.log(parseInt(width,10));

// 숫자만
console.log(parseFloat(width,10));



/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.clear();

console.log(Boolean(friend));
console.log(Boolean(null));
console.log(Boolean(0));


console.log(Boolean(' '));

//암시적 형변환
console.log(!!'0');

//객체
console.log(!!{});

//빈배열
console.log(!![]);

