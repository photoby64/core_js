/* --------------- */
/* While Loop      */
/* --------------- */


// let i = 10; //변수 지정 let 써야함. cs 안됨
// while (i > 0) {

//   console.log(i);

//   i--; // 10 부터 1까지
//   --i // 9부터 1까지
// }


const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'zustand' // 추가함. 튜스탄트ㅋㅋ 독일어 '상태'
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);


// [내 코드]
// let i = 0;
// while (i < 7) {
//   console.log(frontEndDev[i++]);
//   //i++;
// }

// [범쌤 코드]


// let i =0;
// while (i < frontEndDev.length) {
//   let value = frontEndDev[i];
//   // console.log( value );
//   i++;
// }




/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)





// while 문 (역순환 : 역방향)

let l = frontEndDev.length -1;

while (l >= 0) {
  let value = frontEndDev[l];


  console.log(l)
  console.log(value);;
  
  l--;
  
}


// 성능 진단 : 순환 vs. 역순환