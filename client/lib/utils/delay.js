
import { getNode } from '../dom/getNode.JS';



function delay(callback,timeout = 1000){
  setTimeout(callback,timeout);
}


// delay(()=>{
//   console.log('dkssud');
// },1000)


const first= getNode('.first');
const second = getNode('.second');


// delay(()=>{
//   first.style.top = '-100px'
//   second.style.top = '100px'

//   delay(()=>{
//     first.style.transform = 'rotate(360deg)'
//     second.style.transform = 'rotate(360deg)'

//     delay(()=>{
//       first.style.top = '0px'
//       second.style.top = '0px'
  
//     })
  
//   })

// })


const shouldRejected= false;


const p =  new Promise((성공,실패)=>{
  if(!shouldRejected){
    성공('성공입니다~')
  }else{
    실패('실패입니다~')
  }
})

// console.log(p);

p.then((res)=>{

  // console.log(res);

})


// 프라미스 객체를 반환하는 함수 => 재사용


function delayP(){

  return new Promise((resolve,reject)=>{

    if(true){
      resolve('성공~~')
    }else{
      reject('실패ㅜㅜ')
    }
  });
}


delayP()
.then((res)=>{
  console.log( res );
})