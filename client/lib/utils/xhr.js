
const END_POINT= 'https://jsonplaceholder.typicode.com/users';


// [readyState]
// 0 : uninitialized
// 1 : loading
// 2 : loaded
// 3 : interactive
// 4 : complete => 성공, 실패 둘다 포함됨.

// 0:아무일도없음 1:로딩중 2:로딩이완료된상태 3:interactive 4:완료 

const xhr = new XMLHttpRequest();
// console.log(xhr)

xhr.open('GET',END_POINT);

xhr.addEventListener('readystatechange', ()=>{

  if(xhr.readyState === 4){

    if(xhr.status >= 200 && xhr.status < 400){
      console.log('!');
    }else{
      console.log('t.t');
    }
  }
  //console.log(xhr.readyState);
})



xhr.send();

