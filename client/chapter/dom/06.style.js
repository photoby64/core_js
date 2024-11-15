/* -------------------- */
/* DOM Styling          */
/* -------------------- */



const nav = getNode('nav');


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용


console.log(nav.className); // getter

nav.className = 'navigation'; // setter

console.log(nav.classList);

nav.classList.add('hello');

nav.classList.remove('hello');
console.log(nav.classList.contains('navigation'));

nav.classList.toggle('is-active');



// function addClass(node, ...className) {

//   if (typeof node === 'string') node = document.querySelector(node);

//   className.forEach(function(c){
//     if (typeof c === 'object') {
//       c = Object.values(c);
//     }


// })

// addClass('nav', 'hello')





// function removeClass(node, className) {
//   if (typeof node === 'string') node = document.querySelector(node)

//   if (!className) {
//     node.className = ''
//     }
  



// }

// function toggleClass(node, className){
//   if (typeof node === 'string') node = document.querySelector(node);

//   if (typeof className !== 'string'){
//     throw new TypeError('toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//   }

//   return node.classList.toggle(className);

// }




// addClass('.ground', ['a', 'b', 'c'])


function addClass(node,className){
  
  if(isString(node)) node = getNode(node);
  node.classList.add(className);
}







// function addClass(node,className){
  
//   if(isString(node)) node = getNode(node);
//   node.classList.add(className);
// }


function removeClass(node,className){
  if(isString(node)) node = getNode(node);
  if(!className){
    node.className = '';
  }
  node.classList.remove(className);
}


function toggleClass(node,className){
  if(isString(node)) node = getNode(node);
  return node.classList.toggle(className);
}











/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


// nav.style.background = 'red'

// nav.style.cssText = `
// color:red;
// padding:1rem;
// background:blue;`



/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`





