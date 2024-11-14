/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */






/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling


// const second = document.getElementsByClassName('second')[0];
// const _second = document.querySelector('.second');

// console.log(second.parentElement);
// console.log(second.previousElementSibling);
// console.log(second.nextElementSibling);

// //자식이 있다면

// console.log(second.children);





// function getNode(node){

//   return document.querySelector('node');
// }

// getNode('nav')





  function getNode(node, context = document) {
    
    // if(isString(context)) context = document.querySelector(context);

    if (context.nodeType !== 9) context = getNode(context);
    return context.querySelector(node);
  }
  
  function getNodes(node, context = document) {
    if (context.nodeType !== 9) context = getNode(context);
    return context.querySelectorAll(node);
  }
  
  console.log(getNode('.about'));



// 1. nav 태그 요소
const nav = document.querySelector('nav');



// 2. nav 태그 안에 있는 about li 태그 요소
// const about = nav.querySelector('ul > li:nth-child(1)');
const about = nav.querySelector('.about');


// 3. data-name이 contact인 li 태그 요소
const contact = nav.querySelector('li[data-name="contact"]');


// 4. nav 요소 안에 있는 모든 자식 요소
const children = nav.querySelectorAll('*');
const _children = nav.children[0].children;

const li = [..._children].find((li) => li.matches('.about'));










/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest ⭐️⭐️⭐️⭐️⭐️⭐️ 나를 포함해서 조상까지 가장 근접한 대상을 찾는다.(자식 x ^^) 못찾으면 null. event delegation에 자주 쓴다.
  // nextElementSibling 형제는 이걸로...


/* 문서 대상 확인 */
// - matches


// - contains 너 포함하고 있어? 자식에게 뭐가 들어있는지 확인할때..
