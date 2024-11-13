/* ---------------------------------------------------------------------- */
/* Iterable Object                                                        */
/* ---------------------------------------------------------------------- */

// 배열을 일반화 한 객체
// for-of 문을 사용할 수 있는 객체
// Symbol.Iterator 메서드가 필히 구현되어야 함
// Symbol.Iterator 메서드는 이터레이터 객체를 반환하며
// 이터레이터 객체는 next() 메서드를 가짐 ({ done: Boolean, value: any } 타입 반환)



const arr =  '1 2 3 4 5 6'.split(' ');


for( const a of arr ){
  console.log( a );
}


const iter = arr[Symbol.iterator]()




console.log( iter.next() );
console.log( iter.next() );


for( const a of iter){
  console.log( a );
}



// 유사배열 vs. 이터러블
// - 유사배열 : 인덱스 키와 length 속성을 가진 객체
// - 이터러블 : Symbol.Iterator 메서드를 가지는 객체

// const range = {
//   from:1,
//   to:5,
//   length:5,
//   [Symbol.iterator](){
//     let current = this.from;
//     let last = this.to;

//     return {
//       next(){
        
//       }
//     }
    
//   }
// }

const range = {
  from:1,
  to:5,
  length:5,
  [Symbol.iterator](){
    let current = this.from;
    let last = this.to;

    return {
      next(){
        if( current <= last ){
          return {value:current++, done:false}
        }else{{
          return {done:true}
        }}
      }
    }
    
  }
}
















// 유사배열, 이터러블 배열화





/* 제너레이터 함수
function* 함수명() {
        ...
}
: Iterator 객체 만들기
- yield: 값을 뽑아내는 형태(산출)
- 화살표 함수로 생성 불가능 X

*/
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const gene = gen()

console.log(gene.next());


const customIter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

for (const a of customIter) {
  console.log(a);
}
/*
1
2
3
*/


function* idGenerator(){
  let id = 1;
  while(true){
    yield ++id
  }
}

const id = idGenerator();