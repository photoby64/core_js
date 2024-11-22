const END_POINT = 'https://jsonplaceholder.typicode.com/users'


const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

async function tiger(options) {
  const { url, ...restOptions } = {
    ...defaultOptions,       // 기본 옵션
    ...options,              // 사용자 정의 옵션
    headers: {
      ...defaultOptions.headers, // 기본 헤더
      ...options.headers,        // 사용자 정의 헤더
    },
  };

  const response = await fetch(url, restOptions); // HTTP 요청
  const data = await response.json();            // JSON 응답 파싱
  return data;                                   // 결과 반환
}

tiger({
  url: END_POINT,
});





// console.log(await response.json());


