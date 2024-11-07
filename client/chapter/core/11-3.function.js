/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);



// rest parameter ⭐️⭐️⭐️⭐️⭐️ 리액트 컨포넌트에서 많이 써요 네..그러새요..

/// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {


  let total = 0;

  

  // for 문 total
  // let i = 0
  // for(;i < rest.length; ){
  //   total = total + rest[i];
  //   i++
  // }

  // for..of 문 total
  // for(const value of rest) total += value;

  // forEach
  // rest.forEach((price)=>{
  //   total += price
  // })

  // rest.forEach(price => total += price )

  // reduce
  // rest.reduce((acc,cur)=>{
  //   return acc + cur
  // },0)

  return rest.reduce((acc,cur) => acc + cur ,0)


  // return total;
  

};

let _calcAllMoney = (...rest) => rest.reduce((acc,cur) => acc + cur ,0);

const result = calcAllMoney(10000,30000,50000);

console.log( result );


// 일반 함수
// - constructor 내장 (concise method 예외)
// - this : 나를 호출한 대상 this
// - 객체의 메서드로 많이 사용됨 => this를 찾기 위해


// 화살표 함수
// - constructor 비내장 (성능 최적화)
// - this : 바인딩 하지 않음 => 상위 컨텍스트에서 찾음
// - 메서드 안의 함수를 작성해야 하는 경우 => 내 상위 this를 찾기 위해 





const user = {
  name: '박혜미',
  total: 0,
  grades:[50,70,40],
  totalGrades(){
    
    // 화살표 함수 
    this.grades.forEach((g) => {
      this.total += g
    })
    
    // 화살표 함수 축약형
    // this.grades.forEach(g => this.total += g)


    // 화살표 함수 축약형 + reduce 값을 바로 내보내는
    // this.total = this.grades.reduce((acc,cur) => acc + cur)

    return this.total
  }
}


console.log( user.totalGrades() );













/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow = (numeric,powerCount) => {

//   let total = 1;

//   for(let i = 0; i < powerCount; i++){
//     total = total * numeric
//   }

//   return total
// }; 



// console.log( pow(2,53)  );


// let pow = (numeric,powerCount) => {
//   return Array(powerCount).fill(null).reduce((acc,cur)=>{
//     return acc * cur
//   })
// }


let pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc * numeric,1)

// repeat(text: string, repeatCount: number): string;
let repeat; 