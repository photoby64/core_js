/* --------------- */
/* While Loop      */
/* --------------- */




// let i = 10;
// while (i > 0){ // i가 0보다 클 때까지 반복
//   console.log(--i); // i를 먼저 1 감소시킨 후, 그 값을 출력
// }




// const frontEndDev = [
//   'HTML',
//   'CSS',
//   'SVG',
//   'JavaScript',
//   'jQuery',
//   'React',
//   'Redux',
// ];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);




/* 
배열에서 대괄호([])의 역할

'배열'은 여러 값을 순서대로 저장하는 자료 구조로, 각 요소는 '인덱스'라는 '숫자'로 구분됩니다. 

인덱스는 배열에서 요소가 위치한 자리 번호를 나타내며, 배열의 첫 번째 요소는 인덱스 0, 두 번째 요소는 인덱스 1 등으로 시작합니다.

이 배열에서 'HTML'에 접근하려면 frontEndDev[0]처럼 
배열 이름과 0번 인덱스를 나타내는 대괄호를 사용합니다.

console.log(frontEndDev[3]); // 'JavaScript' 출력


*/



const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

let i = 0; // 변수 i를 0으로 초기화하여 배열의 첫 번째 요소부터 접근할 준비.
console.log(i);


// while 루프는 i가 frontEndDev 배열의 길이(7)보다 작을 동안 반복됩니다. 
// 따라서, i가 0부터 시작해 6까지 증가하는 동안 루프가 실행됩니다. 루프는 i가 7이 되면 종료됩니다.
while (i < frontEndDev.length) { 

  let values = frontEndDev[i]
  // 루프 내부에서 frontEndDev[i]를 사용해 배열의 i번째 요소에 접근하여 values 변수에 할당합니다. 
  // 그런 다음 console.log(values);를 사용해 values 값을 콘솔에 출력합니다



  console.log(values);

  i++
  // i++로 i의 값을 1씩 증가시켜 다음 배열 요소로 이동합니다.




}

console.log('✅');


let l = frontEndDev.length - 1; // .length - 1 이면 배열의 가장 끝으로 이동한다.


// 크거나 같아야 인덱스의 0번까지 도달하는 것.
while( l >= 0) {
  let value = frontEndDev[l];

  
  console.log( value.toUpperCase() ); //대문자로 변환가능 
  
  // console.log( l );ㅈ
  
  l--;  // 값을 1씩 감소시켜 다음 배열 요소로 이동합니다.
}





/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

// while 문 (역순환 : 역방향)

// 성능 진단 : 순환✅ vs. 역순환