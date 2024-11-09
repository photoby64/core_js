


/* ------------ */
/* For Loop     */
/* ------------ */



// 2 ~ 10까지의 짝수 출력하기



let j = 0;
while (j <= 10) {
  j++

  if (j % 2 !== 0) continue;
  console.log(j);
  
}







let p = 0

for(; p <= 10; ){
  
  p++

  if( p % 2 !== 0) continue;
  
  console.log('p : ' , p);

}



console.clear();





/*


const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while(i < l) {
  console.log(frontEndDev[i]);
  i += 1;
}


*/

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.



const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;


for (; i < l; i++) {
  const value = frontEndDev[i];
  const lower = value.toLowerCase(); //lower는 value 값을 모두 소문자로 바꾼 결과로, 조건문에서 비교를 더 쉽게 하기 위해 사용합니다.

  if(lower.includes('jquery') || lower.includes('svg')) continue;

  console.log(value);
  
}






//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.










//   - 무한 루프 (브레이크)
//   - for 문 (역순환)