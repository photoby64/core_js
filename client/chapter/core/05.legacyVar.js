/* -------------------------------------------- */
/*                  Legacy var                  */
/* -------------------------------------------- */

// var로 선언한 변수의 스코프는 함수 스코프이거나 전역 스코프입니다.
// 블록 기준으로 스코프가 생기지 않기 때문에 블록 밖에서 접근 가능합니다.





function a(){

  let outside= 'outer';
  return outside;
}

a()

console.log(a());
// console.log(outside);


// var는 변수의 중복 선언을 허용합니다

let b = 10;
b = 20;

{
  let b = 30;
}
console.log(b);


var aa = 60;

{
  var aa = 70; 
}


var aa = 80;

aa = 90;


console.log(aa);


// 선언하기 전 사용할 수 있는 var
// var는 이구역의 미친놈임;;


