/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (){

  // 함수 안에서만 접근 가능한 인수들의 집합 객체 존재 : arguments => 유사 배열 => 지역 변수

  let total = 0;
  // for문 
  // for(let i = 0; i < arguments.length; i++){
  //   total += arguments[i];
  // }

  // for...of
  // for(const value of arguments){
  //   total += value;
  // }
  
  // arguments => array

  // const arr = [...arguments]; // spread syntax
  // const arr = Array.from(arguments);  배열의 static method
  const arr = Array.prototype.slice.call(arguments) // 배열의 instance method

  
  // instance method 
  
  
  
// forEach => 배열을 순환 => 값을 반환하지 X 
  // arr.forEach(function(price,){
  //   total += price
  // })

// reduce => 배열을 순환 => 값을 반환 문자,숫자,불린,배열,객체.....
  // arr.reduce(function(acc,cur){
  //   return acc + cur 
  // },0)

  // reduce + arrow function
  // return arr.reduce((acc,cur)=> acc + cur)


  // arguments 
  // 한번만 빌려쓰는 방법
  
  // Array.prototype.forEach.call(arguments,function(price){
  //     total += price
  // })



  
  // 부모 바꿔치기 
  arguments.__proto__ = Array.prototype


  console.log( total );
  

};


// const obj = {
//   total:null,
//   item:[1000,2000,3000],
//   totalPrice(){
    
//     this.item.forEach((price)=>{
//       this.total += price
//     })
//   }
// }


// obj.totalPrice()








const result = calculateTotal(10000,30000,45000,2500,30000,25000);

console.log( result );



console.clear();


// Array instance method
//  forEach => 배열을 순환 => 값을 반환하지 X 
//  reduce  => 배열을 순환 => 값을 반환 : 문자,숫자,불린,배열,객체.....
//  map     => 배열을 순환 => 값을 반환 : ⭐️ 새로운 배열 ⭐️

// const friend_ = ['이주원', '이승협', '박재이', '정하승'];


// const f_ = friend.map (function(name, index){

//   // name과 index는 각각 배열의 요소와 해당 요소의 인덱스를 의미
//   // console.log(name);
//   // console.log(index);


//   return '내친구_' + name
// })

// console.log(f_);




////////////// 범쌤 코드

const friends = ['박혜미','이강현','공세현','MJ'];


const f = friends.map(function(name,index){
  
  return `<li data-order="${index + 1}"> 이름 : ${name} </li>`
  
})


f.forEach(function(tag){
  document.body.insertAdjacentHTML('beforebegin',tag);
})

////////////// 범쌤 코드


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () { };


// 유명(이름을 가진) 함수 (표현)식
  // 잘안쓰고... 라이브러리에......

let namedFunctionExpression = function hello() {

};



// 콜백 함수 (표현)식
//let callbackFunctionExpression; 넘 길어!!

let cb = function(condition,success,fail){
  console.log(success);

  if(condition){
    success() 
  }else{
    fail()
  }


};



cb(false,
  function(){ console.log('성공입니다!') },
  function(){ console.log('실패입니다!') })





///////////내코드///////////


// function movePage(url, success, fail){

//   if(url === 'https://www.naver.com'){
//     success(url);

//   }else{
//     fail();
//   }
// }


// movePage(
//   'https://www.naver.com',
//   function(url){
//     console.log(`현재 입력하신 주소는 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`);
//   },
//   function(){
//     console.log('잘못씀');
//   },


// )

///////////내코드///////////









//////////////cb code
function movePage(url, success, fail){


  if(url.includes('https')){
    success(url);
  }else{
    fail();
  }

}




movePage(
  'https://www.daum.net',
  function(url){
    
    console.log(`현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`);
    
  },
  function(){
    console.log('잘못된 경로를 입력하셨습니다.');
  }
)
//////////////cb code










function getGeolocation(success,fail){

  
  //let data;


  navigator.geolocation.getCurrentPosition((so)=>{
    success(so.coords.latitude)
  })
  //return data 
}



getGeolocation(
  (data)=>{
    console.log(data);
  },
  ()=>{
    
  }
)
// return은 데이터를 가져오는 시간이 걸리는 메소드의 결과값이 나오는걸 기다리지 않는다.
// 그래서 콜백 함수를 써서 데이터 결과값이 나오게 하는 방법 중 하나다.

// 콜백 함수는 비동기 작업이 완료된 후 실행되는 함수이다.
// 일반적으로 데이터를 가져오는 비동기 작업은 시간이 걸리므로, 결과값이 즉시 반환되지 않는다.
// 만약 비동기 작업에서 return을 사용하면, 작업이 완료되기 전에 반환값을 줄 수 있다.
// 그래서 콜백 함수를 사용하여 데이터가 준비되면 그에 맞춰 후속 작업을 처리할 수 있다.








console.clear();

// 함수 선언문 vs. 함수 (표현)식


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;



// 함수가 선언됨과 동시에 실행되는 것을 말합니다.....좋네..
// 바쁘다 바뻐 현대사회..

// var는 블록 스코프 : x
// var는 함수 스코프 : o
// encapsulation (캡슐화) => 변수를 보호하기 위해서. 


(function(){

  var a_a = 10;


})()

// console.log(a_a); // 에러나옴



