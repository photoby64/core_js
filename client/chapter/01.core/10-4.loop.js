/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

// console.log(javaScript);
// console.log(javaScript.hasOwnProperty('creator')); // 출력: true
// console.log(javaScript.hasOwnProperty('nickName')); // 출력: false 



const javaScript2 = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2024,
  hasOwnProperty(){
    return '안녕!'
  }
};

Object.prototype.nickName = 'tiger'



console.log('⬇️ hasownproperty');
console.log( Object.prototype.hasOwnProperty.call(javaScript,'creator') );




// 객체의 속성(property) 포함 여부 확인 방법은?

/*

1. 객체의 속성 포함 여부 확인 방법

객체에 특정 속성이 포함되어 있는지 확인하려면 in 연산자를 사용할 수 있습니다. 
이 연산자는 객체가 직접 가지고 있는 속성뿐 아니라 프로토타입 체인에서 상속받은 속성까지 포함해서 확인합니다. 


예: 'creator' in javaScript; // 출력: true 









2. 객체가 자신의 속성을 가지고 있는지 확인하는 방법

객체 자신의 속성인지 확인할 때는 hasOwnProperty 메서드를 사용하는 것이 좋습니다. 
hasOwnProperty는 객체가 상속받은 속성을 제외하고, 객체 자체에 정의된 속성만 확인합니다. 


예:

console.log(javaScript.hasOwnProperty('creator')); // true
console.log(javaScript.hasOwnProperty('nickName')); // false (상속된 속성일 경우)











3. 덮어쓰임 방지: 안전하게 확인하는 방법
hasOwnProperty 메서드가 만약 덮어쓰여졌다면(예: 위에서 직접 hasOwnProperty 속성을 추가한 경우), 
기본 hasOwnProperty를 안전하게 호출하려면 Object.prototype.hasOwnProperty.call을 사용할 수 있습니다:

예시:

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2024,
  hasOwnProperty(){
    return '안녕!'
  }
};

console.log( Object.prototype.hasOwnProperty.call(javaScript,'creator') );










*/


// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신의 속성인지 확인하는 방법은?
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?






const tens = [10,100,1000,10_000];

for (let index in tens) {
  console.log(index + ': ' + tens[index]);
}

/* 

출력: 
0: 10
1: 100
2: 1000
3: 10000
nickName: tiger //ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 도라방스



*/

console.log('⬇️ ');
for(const key in tens){

  console.log(tens[key]);

}


// enumerable : 열거 가능한


console.clear();













const obj= {};
obj.nickName = 'tiger'

for( const key in obj){
  console.log(key);
  
}

console.log(obj);




//// 속성을 추가 할 수 있음



Object.defineProperty(obj, 'age', {
  value: 30,
  enumerable: true, // 객체를 순환할 때 속성이 나타날지 여부
  writable: false, // 속성 값이 변경 가능한지 여부를 결정하는 불리언 값
  configurable: false, // 속성 삭제나 속성의 특성 변경이 가능한지 여부
})

for( const key in obj){
  console.log(key);
  
}



