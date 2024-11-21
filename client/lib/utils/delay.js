
import { getNode } from '../dom/getNode.JS';



function delay(callback,timeout = 1000){
  setTimeout(callback,timeout);
}


// delay(()=>{
//   console.log('dkssud');
// },1000)


const first= getNode('.first');
const second = getNode('.second');


delay(()=>{
  first.style.top = '-100px'

  delay(()=>{
    first.style.transform = 'rotate(360deg)'

    delay(()=>{
      first.style.top = '0px'
  
    })
  
  })

})


// first.style.top = '-100px'
// first.style.transform = 'rotate(360deg)'
// first.style.top = '0px'

// delay(()=>{
  
// })