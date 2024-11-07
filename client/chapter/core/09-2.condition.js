/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);




console.log(value);

// 논리곱(그리고) 연산자
// 두값을 비교해 첫번째 Falsy 값을 반환
// F&& 
// fnn - tor

let AandB = a && b;

// false인 b가 출력 됨 => ' '
console.log(AandB);




// 논리합(또는) 연산자-1
// 두 값을 비교해서 첫 번째 Truthy 값을 반환
// T|| 
// fnn - tor


let AorB = a || b;

console.log(AorB);

// 논리합(또는) 연산자-2

// 논리 OR 연산자 라고 부르기도 함.
// 두 값을 비교 후, 새로운 값으로 다시 할당한다.
// a가 Falsy일 때 b의 값을 a에 할당
// 여기서 a는 10(Truthy)이므로, a || b는 10이 되고, a는 그대로 10을 유지

console.log('🔥');
a = a || b 
console.log(a);


// Logical OR 할당 연산자
// a가 Falsy일 때만 b의 값을 a에 할당한다. 
// 여기서 a는 10이고, 이는 Truthy 값이므로 a에 변경이 일어나지 않고 그대로 10이 유지된다.
a ||= b
console.log(a);



// 부정 연산자
let reverseValue = value;
console.log(!reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&) fnn
// 모두다 Truthy 값이면 마지막 Truthy값이 ⭐️반환⭐️된다.
// {thisIsFalsy:false}가 호출 됨.
console.log('🐯');
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};
console.log(whichFalsy);


// 첫번째 Truthy를 찾는 연산 (||)
//  모든 값이 Falsy일 경우, 마지막 값이 ⭐️반환⭐️된다.
// fnn tor

let whichTruthy = false || '' || [1,3,6].length || {thisIsTruthy:true};
console.log(whichTruthy);


//.length
// 자바스크립트에서 배열, 문자열, 객체 등 다양한 데이터 구조에서 길이를 나타내는 속성(Property)
// 자료형에 따라 .length의 사용법과 의미가 달라진다.

// [1]  배열 (Array)의 .length
// 배열의 인덱스는 0부터 시작하지만 .length는 배열의 마지막 인덱스 + 1의 값을 반환한다.
let arr = [1, 2, 3, 4];
console.log(arr.length);  // 출력: 4



// 배열 [1, 2, 3]의 인덱스는 0, 1, 2지만 .length는 3을 반환합니다.
let arr2 = [1, 2, 3];
console.log(arr2[2]);   // 출력: 3
console.log(arr2.length); // 출력: 3




// [2] 문자열 (String)의 .length
// 문자열에서 .length는 문자열의 문자 개수를 반환한다.
let str = "Hello";
console.log(str.length);  // 출력: 5




// [3] 일반 객체(Object)에서 .length
// 일반객체에는 기본적으로 .length 속성이 없으며 .length는 배열과 문자열과 같은 특정 자료형에만 정의되어 있다.
// 객체의 프로퍼티 개수를 구하려면 Object.keys()나 Object.values()와 같은 메서드를 사용해야 한다.

let obj = { 
  name: 'Alice', 
  age: 25 };

console.log(obj.length);  // 출력: undefined



console.clear();
console.log('🔥');

let userName = prompt('누구십니까?');
//console.log(userName);

if (userName === 'admin') {

  let password = prompt('비밀번호를 입력하세요');
  if (password.toUpperCase() === 'THEMASTER') {

    let theMaster = alert('어서오세요 마스터님!');
    console.log('어서옵쇼!');

    
  }else if (password === 'null' ) {

    alert('취소하셨습니다.');
    console.log('취소하셨습니다.');
    
  }else{
    alert('잘못된 비밀번호를 입력하셨습니다.');
    console.log('잘못된 비밀번호를 입력하셨습니다.');
  }

  
}else if (userName === null || userName.replace(/\s*/g,'') === '') {

  alert('취소하셨습니다.');
  
}else{

  alert('당신이 누군지 모르겠습니다.');
}