



// 객체의 속성을 출력하기

// 주어진 객체의 각 속성과 값을 for...in 문을 사용하여 출력하는 함수를 작성하세요.

// 예제
// 객체 { name: "홍길동", age: 25, city: "서울" }이 주어졌을 때, 
// 함수는 아래와 같은 형식으로 속성과 값을 출력해야 합니다.




function printObjectProperties(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}


const person = { name: "홍길동", age: 25, city: "서울" };
printObjectProperties(person);




// 주어진 객체에서 숫자 속성의 값이 모두 50 이상인지 확인하는 함수를 작성하세요. 
// 모든 숫자 속성이 50 이상이면 "모든 값이 50 이상입니다."를 출력하고, 
// 그렇지 않으면 "50 미만의 값이 있습니다."를 출력합니다.


function checkValuesAbove50(obj) {
  // for...in 문을 사용하여 각 값이 50 이상인지 확인하는 코드를 작성하세요

  for(let key in obj){

    if(obj[key] < 50){
      console.log("50 미만의 값이 있습니다.");
      return
    }
    
  }

  console.log('모든 값이 50 이상입니다');
}

// 함수 호출 예제
const scores = { math: 70, science: 85, english: 45 };
checkValuesAbove50(scores); // 결과: "50 미만의 값이 있습니다."

const highScores = { math: 70, science: 85, english: 55 };
checkValuesAbove50(highScores); // 결과: "모든 값이 50 이상입니다."







// 객체의 짝수 값 출력하기

// 주어진 객체에서 짝수인 값만 출력하는 함수를 작성하세요.

// 예제
// 객체 { math: 72, science: 85, english: 64, history: 77 }이 주어졌을 때, 짝수인 값만 출력되어야 합니다.



function printEvenValues(obj) {
  // for...in 문을 사용하여 짝수 값을 출력하는 코드를 작성하세요
  for (key in obj){
    
  }
}

// 함수 호출 예제
const scores = { math: 72, science: 85, english: 64, history: 77 };
printEvenValues(scores); // 예상 출력: "짝수 값: 72" 및 "짝수 값: 64"
