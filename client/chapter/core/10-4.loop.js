/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2024,
};



// in 문 : key in object

// console.log('valueOf' in javaScript);
  // 객체 안에 뭐가 있는지 확인
  // 근데 뒤져서 다 찾음;; 수요없는 공급임;; valueOf 등등


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(Property)을 가지고있는지(has) 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty('currentVersion'));
  // hasOwnProperty:객체가 해당 속성을 직접 가지고 있는지 확인할 때 사용
  // 위험!! 다른곳에 정의 되면 결과가 달라짐!!

console.log(Object.prototype.hasOwnProperty.call(javaScript,'valueOf'));
  // 전역 객체(Object -전역은 대문자 알지?^^-)에서 call로 능력을 빌려쓰자.
  // 누가 빌려씀? javaScript

  // 사실 이런 문제가 자꾸 일어나고 너무 불편하니까 새로운 매소드가 등장!!
  // Object.hasOwn
  // **안전하게 내가 원하는 대상을 가져오기 위해서**
  // 근데 구식 브라우저는 안돌아가서 위에 코드를 계속 씀.ㅋ
  console.log(Object.hasOwn(javaScript, 'creator')); //true






// for ~ in 문

// in 문은 하나 조회
// for 문은 여러개


// - 객체 자신의 속성만 순환하려면?

  // 앞에 키 값을 변수로 처리해야함
  // for( key in object)

// 객체의 key를 조회 
// 객체의 value를 조회

for(const key in javaScript ){

  if(Object.hasOwn(javaScript,key)){

    const value = javaScript[key];
    console.log(value);

  }
}



// - 배열 객체 순환에 사용할 경우?
// 배열은 순서에 굉장히 민감한 데이터 => For in문은 순서를 보장하지 않는다.