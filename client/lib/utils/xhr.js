


// [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete => 성공, 실패 둘다 포함됨.

// 0:아무일도없음 1:로딩중 2:로딩이완료된상태 3:interactive 4:완료 

// Endpoint(엔드포인트)**는 일반적으로 API 요청을 보낼 대상 URL을 의미

// 콜백은 인수로 함수를 던지는것. 안에 있는 데이터를 꺼낼때




const END_POINT= 'https://jsonplaceholder.typicode.com/users';



function xhr(method,url,success,fail){
  
  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  xhr.addEventListener('readystatechange',()=>{

    if(xhr.readyState === 4){

      if(xhr.status >= 200 && xhr.status < 400){

        const data = JSON.parse(xhr.response);

        success(data)
        
      }else{
        fail({message:'알 수 없는 오류가 발생했습니다.'})
      }
    }
  })
  xhr.send();
}


const obj = {
  name:'yk',
  age:10
};



xhr('GET',END_POINT,(data)=>{
  console.log( data );
  
},(err)=>{
  console.log( err.message );
  
})