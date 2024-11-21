const END_POINT = 'https://jsonplaceholder.typicode.com/users';

// [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete  => 성공 | 실패





function xhr({
  method = 'GET',
  url = '',
  success = null,
  fail = null,
  body = null,
  headers = {
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
} = {}){
   
  
  const xhr = new XMLHttpRequest();

  
  xhr.open(method,url);

  // 객체의 key와 value를 분리(Object.entries)
  // 반복문 forEach
  if (method !== 'DELETE') {
    Object.entries(headers).forEach(([k, v]) => {
      xhr.setRequestHeader(k, v);
    });
  }
  
  

  

  // xhr.setRequestHeader(key,value);


  

  xhr.setRequestHeader('Content-Type','application/json');

  xhr.addEventListener('readystatechange',()=>{
    const {status,response,readyState} = xhr;

    if(readyState === 4){

      if(status >= 200 && status < 400){

        const data = JSON.parse(response);
        success(data)
        
      }else{
        fail({message:'알 수 없는 오류가 발생했습니다.'})
      }
    }
  })
  xhr.send(JSON.stringify(body));
}



const obj = {
  name:'tiger',
  age:38
}


xhr({
  method:'DELETE',
  url: END_POINT,
  success: (data)=>{
    console.log( data );
  },
  fail: ()=>{},
  // body:obj,
  
})