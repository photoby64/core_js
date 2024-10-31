/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
  // String
const YEAR = 123; 
console.log(String(YEAR));
console.log(YEAR + '' );





// undefined, null


// boolean





/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend));


// null

let money = null;
console.log(money);



// boolean


let isActive = false
console.log(isActive * 1);


// string

let num ='100';
console.log(+num);
console.log(num / 1);



// numeric string
  //10진수 표기를 위해 ',10'을 함께 표기한다. 
const width = '120.5px'
console.log(parseInt(width,10));
console.log(parseFloat(width,10));



/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 


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

