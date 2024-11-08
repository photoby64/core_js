/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */


// 객체는 원시값과 달리 참조 값이 복사 된다.(참조 복사)
// 즉 값이 똑같아도 메모리주소 참조 값이 다르다면 false다.

// 참조 복사
// 얕은 복사 : 참조복사가 일어나지 않게 따로따로 복사해놓은 것.
// Objcet.assign({}, 복사대상)
// 근데 깊은곳 까지(중첩부분)는 복사가 안된대.. 그 안은 공유가 됨...도라방스


// 깊은 복사
// 라이브러리 lodash를 주로 사용한다..




// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};



let text = message;

let conversationTool = messenger;





// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// 객체 복사
// 1. for ~ in 문을 사용한 복사



const cloneObject = {};


for (const key in messenger) {
  cloneObject[key] = messenger[key]
}




// 2. Object.assign()을 사용한 복사

const copyObjcet = Object.assign({}, messenger);
// const copyObject = Object.assign({},messenger,obj,_obj);


// 3. 전개 연산자(...)를 사용한 복사
// ⭐️리엑트에서 정보를 가공하려고 하려면 전개 연산자를 제일 많이 쓴다.⭐️
// immer라는 것도 있다고 하는데.. 뭐여

const spreadObject= {...messenger,};
// const spreadObject= {...messenger, ...obj, ..._obj}; 이런식으로 추가 되는 장점을 가지고 있음?






// 4. 객체를 복사해주는 유틸 함수
// const copiedObject = (obj) =>{
//   return Object.assign({{},obj})

// };

// const copiedObject = o => Object.assign; ...?????

// const newObject= copiedObject(messenger);



// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

// 합성을 할때는 기본값을 앞에 쓰고 새롭게 들어오는 옵션값을 뒤에 쓴다.
// let combinedCssMap = Object.assign({}, cssMapA, cssMapB);

// let combinedCssMap = ( ...cssMapA, ...cssMapB);

// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};


// 깊은 복사-1 손수 직접 복사
let copiedContainerStyles = {
  ...containerStyles,
  ['max-width']:{
    ...containerStyles['max-width']
  }
};


////////

let clone_deep_objcet = cloneDeep(containerStyles)

// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js






// 전역 상태 관리  
const defaultOptions = {
  url:'https://www.naver.com',
  method:'GET',
  body:'data',
  headers:{
    'content': 'application/json',
    'access' : '*'
  }
}

const theme = {
  mode:'light' 
}



function 서버와통신 (options){

  const {method,url} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  console.log( url );
  console.log( method );
  
}


서버와통신({
  url:'https://daum.net',
  method:'DELETE'
})


