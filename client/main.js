
import data from './data/data.js';
import { getNode as $, getRandom, insertLast, clearContents } from './lib/index.js'; // js필수!


// 1. 주접 떨기 버튼을 클릭하는 함수
// -주접 떨기 버튼 가져오기
// -이벤트연결

// 2. 인풋값 가져오기

// 3. 주접 꺼내기

const submit = $('#submit');
const nameField = $('#nameField');
const result = $('.result');





function handleSubmit(e){
  e.preventDefault();
  const name = nameField.value;
  const list = data(name);
  const pick = list[getRandom(list.length)];

  clearContents(result)
  insertLast(result,pick)




  



  
}


submit.addEventListener('click',handleSubmit)