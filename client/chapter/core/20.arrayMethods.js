/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
  {
    id:0,
    name:'MJ',
    age:37,
    job:'음악하는 재미교포',
    imgSrc:'https://randomuser.me/api/portraits/med/men/75.jpg',
    imgAlt:'대체 텍스트입니다..'
  },
  {
    id:1,
    name:'이성우',
    age:13,
    job: '모집운동가',
    imgSrc:'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt:'대체 텍스트입니다..'
  },
  {
    id:2,
    name:'윤헌주',
    age: 43,
    job: '물음표살인마',
    imgSrc:'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt:'대체 텍스트입니다..'
  },
  {
    id:3,
    name:'김미리',
    age: 36,
    job: '얼리버드',
    imgSrc:'https://randomuser.me/api/portraits/med/women/30.jpg',
    imgAlt:'대체 텍스트입니다..'
  }
]



/* 요소 순환 ---------------------------- */

function  user(user){
  console.log(user);
}


// // forEach
// people.forEach((user) => {
//   console.log(user.job);
  
// });

people.forEach(user);

const span= document.querySelectorAll('span');


span.forEach((element) => {

  element.addEventListener('click',function() {
    this.style.color = 'orange';
    console.log(index);
  }) 
  
})



/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift



// reverse ⭐️


// const reverse = people.reverse();
// console.log(reverse);


const reverse = people.toReversed;
console.log( reverse );



// splice


const splice = people.splice(2, 1);
console.log(splice);



// sort
// 완벽하게 정리하는 건 아닌데.... 실제로 데이터로 가져와서 정렬하는걸 많이 안함..
// 왜냐면 프론트 보다는 백엔드 요청을 보낼때 정렬된 값을 보내달라는 요청을하고
// 정렬이 완료된 데이터를 가져오기 때문에..
// 정렬은 테이블에 오름차순 년도별로 생성된 날짜별로 이런거에 많이 씀!!!!!

const arr = [5, 4, 3, 2, 1];


function compare(a,b){
  if(a > b) return 1;
  if(a == b) return 0;
  if(a < b) return -1;
}

const sort = people.sort(compare)


/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed ⭐️
// toSpliced
// map

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join