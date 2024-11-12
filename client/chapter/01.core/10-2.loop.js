/* -------------------- */
/* Do While Loop        */
/* -------------------- */




// let count = 0;

// do {
//   console.log("반복 실행 중", count);
//   count++;
// } while (count < 3
  
// );



let i = 0;


do {
  console.log( i );

  if (i === 3) {
    console.log('3번 입니다!');
    
  }

  i++ // // i++가 없으면 i는 계속 0으로 고정됨. i를 증가시켜서 반복문이 종료될 수 있게 만듦
  
} while (i < 5); // i는 계속 0이므로 조건이 항상 true. i가 5보다 작을 때까지 반복










// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단


/*

  let result = prompt('몇 번 반복할까요?')

do {

  console.log('최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.');

  if (result < 0) {  // 만약 result가 0보다 작으면
    break; // 반복문을 종료
  }

  result --; // result 값 감소 (역방향으로 진행)
  
} while (result >= 0); // result가 0 이상일 때까지 반복
  

*/





// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

/*

let result = prompt('몇 번 반복할까요?', 0);  // 사용자에게 반복 횟수를 입력받음

let count = 0;  // 반복 횟수 변수

do {
  console.log(count++);  // count 값을 출력하고, 그 후 1 증가시킴
} while(result--);  // result가 0 이상일 동안 반복





*/


/*



let result = parseInt(prompt('몇 번 반복할까요?'), 10);  // prompt로 받은 값을 숫자로 변환
let count = 0;

do {
  console.log(count++);
} while(result-- > 0);  // result가 0 이상일 동안 반복



*/




console.clear();



/*

let result = parseInt(prompt('몇 번 반복할까요?', 0), 10);

if (isNaN(result) || result < 0) {
  alert('올바른 값을 입력해주세요!');
} else {
  let count = 0;
  do {
    console.log(count++);
  } while(result-- > 0);
}

*/


// isNaN(result) || result < 0: result가 숫자가 아니라면 또는 음수라면 true를 반환합니다. 
// 그렇지 않으면 (즉, 숫자이고 0 이상이라면) false를 반환합니다.



// let first = document.querySelector('.first');



