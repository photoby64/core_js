/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.


function a(){
  let outside = 'outside';
  
}

a() //실행이 끝났기 때문에

// console.log(outside);


// function a(){
//   var outside = 'outer';
// }
// console.log(outside);









// var는 변수의 중복 선언을 허용합니다

// var b = 10;
// var b = 30;
// console.log(b);

// var b = 10;
// {
//   var b = 30;
// }
// console.log(b);


// let b = 10;
// {
//   let b = 30;  //블록스코프 안에서만 사용가능 그래서 10이 출력 됨.
// }
// console.log(b);

// 선언하기 전 사용할 수 있는 var
