/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */








// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조

let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.


// let dialog = {
//   position: fixed;
//   z-index: 10000;
//   top: 50%;
//   left: 50%;
//   width: 60vw;
//   max-width: 800px;
//   height: 40vh;
//   min-height: 280px;
//   transform: translate(-50%, -50%);

// };




// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// auth => authentication:인증, authorization:권한 (어드민권한, 사원권한)


let authUser =null;

authUser = {
  uuid: crypto.randomUUID(),
  name: '64',
  email: 'lazzyoff64@gmail.com',
  isSignIn: false,
  permission: 'paid' // 반대 free
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// getter
console.log(authUser.uuid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);


// setter
console.log(authUser.permission = 'free');

// 대괄호([]) 표기법


// getter
console.log(authUser['uuid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log(authUser['permission']);

// setter
console.log(authUser['permission'] = 'paid');





// 객체의 키들만 모아서 배열로 반환하는 객체의 스테틱 메소드는?
const keys = Object.keys(authUser);


// ✅ 함수로 Object.key() 를 만들어 볼까요?







// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.









// keys
// function getProperties(obj){

//   let arr = [];

//   for(const key in obj){
//     if(Object.hasOwn(obj,key)){
//       arr.push(key)
//     }
//   }
//   return arr;
// }

function getProperties(obj){

  let arr = [];

  for(const key in obj){
    if(Object.hasOwn(obj,key)){
      arr.push(key)
    }
  }
  return arr;
}


getProperties(authUser)











// 프로퍼티 제거 or 삭제 
// - 제거 remove => 비워두기
// - 삭제 delete => 메모리 날림
// - 변수로 받을때는 []를 써야한다.


// ✅ 
// function removeProperty(obj, key){
  
// }


// ✅ 
// function deleteProperty(obj,key){

// }





// 프로퍼티 포함 여부 확인


// 프로퍼티 나열



// 계산된 프로퍼티 (computed property)
// let calculateProperty = 'phone'; // phone | tel


// function createUser(name, age, phone){

// }








// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


//shorthand properties







// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}



/* ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ */
/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 배열에서 바로 값을 뽑아서 쓰는법
// ⭐️순서는 바꿀 수 없음⭐️
// 변수명은 내맘대로

const arr= [10, 100, 1000, 10_000];

// const [a1,a2,a3]= arr;
// const [,a2,a3]= arr; // 건너뛰고 값을 받을 수도 있다.
// const [,,a3]= arr; // 두개도 쌉가. 근데 삭제된건 아니고 할당만 안됐을 뿐.

// const [a1, ...rest]= arr;
// a1을 제외한 나머지만도 가능


// 기본값을 설정할 수 있음 
// a5는 값이 없지만 기본값을 설정할 수 있다.
// 기본값은 할당이 되어 있을때만 작동한다. 이미 a5에 값이 할당되어 있다면 기본값은 반환되지 않는다.
const [a1, a2, a3, a4, a5=100_000]= arr;


//console.log(a5); // 100_00

console.log();












/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */


const salaries = {
  김미리: 800,
  박혜미: 130,
  이성우: 400,
  명재휘: 80
}

// 객체는 {}로 시작!
// console.log(salaries);

// 배열은 순서를 바꿀수 없지만 객체는 순서도 바꿀 수 있다!
// 변수, 즉 값만 같다면 그 값을 꺼낼 수 있다.

// 객체의 구조 분해 할당: 순서가 상관없고, 객체의 key와 변수의 이름이 동일해야 함.

const {김미리, 박혜미: 박, 이성우, 명재휘, 이영범= 700} = salaries;

console.log(이성우);


// 변수의 명도 바꿀수 있다.
// 변수의 이름 뒤에 ':'를 쓰고 새로운 별칭을 지어준다.

console.log(박);
// console.log(박혜미); // 출력: 에러

console.log(명재휘); 

function createUserObjcet1(name, age, address, phone, job){
  return {name, age, address, phone,}
}
const user1= createUserObjcet1('박윤경', '18', '일본', '010-1234-5678');
// 순서가 중요해지는데.. age값을 빼고 주소를 넣으면 내 나이가 일본이 됨 ㅠㅠ
console.log(user1);




function createUserObjcet({
  name, 
  age, 
  address, 
  phone, 
  job
}){


  return {name, age, address, phone, job}
}


const data= {
  name: '심선범',
  age: 30, 
  address: '중랑구',
  phone: '010-1234-5678',
  job: '강사',
};

const _data= {

};

const user = createUserObjcet(data);








