/* ---------------- */
/* Condition        */
/* ---------------- */



// if (condition조건) {
  
// }



// const result = prompt("자바스크립트의 '공식' 이름은 무엇일까요?");

// if (result === 'ECMAScript') {
//   console.log("정답입니다!");
  
// }else{
//   console.log("틀렸습니다!");
// }




// +prompt +를 앞에 쓰면, 문자열이 아니라 숫자로 변환됨 

// const result = +prompt('숫자를 입력하세요', 0);
// if (typeof result !== 'number') {
//   // ...실행 하지마!
// }

// if (result > 0 ) {
//   console.log(1);
  
// }else if (result < 0 ){
//   console.log(-1);
// }else if (result == 0) {
//   console.log(0);
  
// }
  


// 물음표 연산자
// 조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드;

let a = 1;
let b = 5;

let result = a + b  ? '미만' : '이상'



// 중첩된 조건부 연산자 (ternary operator)

let login;
let message = (login == '직원') ? '안녕하세요' :
              (login == '임원') ? '안녕하세요' :
              (login == '') ? '로그인이 필요합니다' :
              '';

console.log(message);

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No




// 충돌 날까봐 안에 가둠
function wachingMovie() {

  let didWatchMovie = confirm('베놈 영화 봤어?');

  if (didWatchMovie) {
    console.log('그 영화 재밌더라!');
    
  }else{

    let goingToWatchMovie = confirm("베놈 보러 갈꺼야??");
    
    if (goingToWatchMovie) {

      let withWho = prompt("누구랑 보러갈꺼야?");

      if (withWho === 'you') {

        console.log("나도 좋아");
        
      }else{

        console.log("왜 나랑 같이 안봐?");
      }
      
    }else{
    console.log("나도 너 별로야");  
    }

  }


}




// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식



// includes()
// 문자열,배열에서 특정 값이 포함되어 있는지 확인하는 메서드(매서드: 객체에 정의된 함수)
// 이 메서드는 true, false를 반환

// string.includes(searchString)
// array.includes(element)

// searchString (문자열) 또는 element (배열의 경우): 검색할 값입니다.
// fromIndex (선택적, 두 번째 인자): 검색을 시작할 인덱스입니다. 기본값은 0입니다.





let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const msg = didWatchMovie.includes('yes') ? '영화 재밌더라 한번 봐바' :
            goingToWatchMovie.includes('yes') ? '언제 볼까? 재밌겠다!!' :
            '그래..';


console.log(msg);






function render(node, isActive){
  
  //조건부 랜더링
  let template = `
  <div>${ isActive ? '안녕' : '잘가' }</div>
  `

  node.insertAdjacentHTML('beforeend',template)

}

