

// 두 숫자의 합을 구하는 함수 만들기

// 함수 이름은 addNumbers로 하고, 두 개의 숫자를 입력으로 받습니다.
// 함수가 두 숫자의 합을 계산해 그 값을 결과로 반환하게 만드세요.
// 마지막으로, addNumbers 함수를 사용해 숫자 7과 5의 합을 구해 보세요.

function addNumbers (a,b){

  return a + b;

}

const result= addNumbers(7, 5);
console.log(result);





// 숫자의 크기 비교 함수 만들기

// 함수 이름은 compareNumbers로 하고, 두 개의 숫자를 입력으로 받습니다.
// 함수는 두 숫자를 비교하여 다음과 같은 결과를 반환해야 합니다.
// 첫 번째 숫자가 더 크면 "첫 번째 숫자가 더 큽니다."를 반환
// 두 번째 숫자가 더 크면 "두 번째 숫자가 더 큽니다."를 반환
// 두 숫자가 같으면 "두 숫자가 같습니다."를 반환
// compareNumbers 함수를 사용하여 숫자 10과 15, 숫자 20과 5, 숫자 7과 7을 비교해 보세요.


function compareNumbers_(a, b){
  if (a > b) {
    return console.log('첫 번째 숫자가 더 큽니다');
  }
  else if (a < b){
    return console.log("두 번째 숫자가 더 큽니다.");
  }
  else if (a === b){
    return console.log('두 숫자가 같습니다.');
  }else{
    return console.log('잘못입력하셨습니다.');
  }

}

console.log(compareNumbers_(10, 15));


// 출력이 있으면 필요 return이 필요없음
// 마지막 else는 생략해도 됩니다. 주어진 조건에서 a와 b는 숫자이므로, 추가적인 입력 오류 검사는 필요하지 않습니다.


function compareNumbers(a, b) {
  if (a > b) {
    console.log('첫 번째 숫자가 더 큽니다');
  } else if (a < b) {
    console.log('두 번째 숫자가 더 큽니다.');
  } else if (a === b) {
    console.log('두 숫자가 같습니다.');
  }
}

// 숫자의 부호 판별 함수 만들기

// 함수 이름은 checkNumberSign로 하고, 하나의 숫자를 입력으로 받습니다.
// 함수는 다음과 같은 조건에 따라 콘솔에 메시지를 출력해야 합니다.
// 숫자가 양수이면 "양수입니다"를 출력합니다.
// 숫자가 음수이면 "음수입니다"를 출력합니다.
// 숫자가 0이면 "0입니다"를 출력합니다.
// 함수가 각 조건에 따라 적절한 메시지를 출력하도록 작성해 보세요.

function checkNumberSign (value){




  if (value > 0){
    console.log("양수 입니다.");
  }
  else if(value === 0){
    console.log("0입니다");

  }else{
    console.log("음수입니다");
  }  

}
checkNumberSign (7)



// 짝수와 홀수를 판별하는 함수 만들기

// 함수 이름은 checkEvenOrOdd로 하고, 하나의 숫자를 입력으로 받습니다.
// 함수는 다음과 같은 조건에 따라 콘솔에 메시지를 출력해야 합니다.
// 숫자가 짝수면 "짝수입니다"를 출력합니다.
// 숫자가 홀수면 "홀수입니다"를 출력합니다.
// 함수가 각 조건에 따라 적절한 메시지를 출력하도록 작성해 보세요

function checkEvenOrOdd(value){
  if(value % 2 === 0 ){
    console.log("짝수 입니다.");
  }else{
    console.log("홀수입니다.");
  }
}

checkEvenOrOdd(2)





// 양수, 음수, 0 판별 및 짝수/홀수 판별 함수 만들기

// 함수 이름은 checkNumberAndParity로 하고, 하나의 숫자를 입력으로 받습니다.
// 함수는 다음과 같은 조건에 따라 콘솔에 메시지를 출력해야 합니다.
// 숫자가 양수이면서 짝수라면 "양수이면서 짝수입니다"를 출력합니다.
// 숫자가 양수이면서 홀수라면 "양수이면서 홀수입니다"를 출력합니다.
// 숫자가 음수이면서 짝수라면 "음수이면서 짝수입니다"를 출력합니다.
// 숫자가 음수이면서 홀수라면 "음수이면서 홀수입니다"를 출력합니다.
// 숫자가 0이면 "0입니다"를 출력합니다.
// 함수를 호출하여 각각의 조건이 잘 출력되는지 확인하세요.


function checkNumberAndParity(num) {

  if (num === 0) {
    console.log("0입니다");
  }

  if(num > 0 && num % 2 === 0){
    console.log("양수이면서 짝수입니다");
  }else if(num > 0 && num % 2 !== 0){
    console.log("양수이면서 홀수입니다");

  }else if(num < 0 && num % 2 === 0){
    console.log("음수이면서 짝수입니다");

  }else if(num < 0 && num % 2 !== 0){
    console.log("음수이면서 홀수입니다");
  }

  

}

checkNumberAndParity(-2)







// 문제:
// 세 숫자 중 가장 큰 수 찾기

// 함수 이름은 findLargestNumber로 하고, 세 개의 숫자를 입력으로 받습니다.
// 함수는 세 숫자 중 가장 큰 숫자를 찾아 콘솔에 "가장 큰 수는 X입니다"라고 출력해야 합니다.
// 예를 들어 findLargestNumber(3, 7, 5);를 호출하면 "가장 큰 수는 7입니다"가 출력되도록 작성하세요.


console.clear();

function findLargestNumber(a, b, c){

  if (a === b && b === c){
    console.log("값은 똑같습니다.");
  }else{

    let largest;

    if(a >= b && a >=c){
      largest = a;
      
    }
    else if(b >= a && b >= c){
      largest = b;

    }else{
      largest = c
    }
    console.log(`가장 큰 수는 ${largest} 입니다.`);
    
  }
}

findLargestNumber(7, 7, 7)




// 네 숫자 중 가장 큰 수와 가장 작은 수 찾기

// 함수 이름은 findLargestAndSmallest로 하고, 네 개의 숫자를 입력으로 받습니다.
// 함수는 네 숫자 중 가장 큰 수와 가장 작은 수를 찾아서 콘솔에 출력합니다.
// 예: findLargestAndSmallest(3, 7, 2, 9)를 호출하면 "가장 큰 수는 9입니다."와 "가장 작은 수는 2입니다."가 출력되도록 합니다.
// 만약 네 숫자가 모두 같다면 "모든 값이 같습니다."를 출력합니다.


// function findLargestAndSmallest(a, b, c, d){

//   if ( a === b && b===c && c === d ){
//     console.log("모든 값이 같습니다.");

//   }else{
    
//     let largest;

//     if( a >= b && a >= c && a >= d){
//       largest =a;
//     }
//     else if ( b >= a && b >= c && b >= d){
//       largest =b;
//     }
//     else if (c >= a && c >= b && c >= d){
//       largest =c;
//     }else{
//       largest =d;
//     }

//     console.log(`가장 큰 수는 ${largest}입니다.`);
//   }

//   let smallest;
//   if( a <= b && a <= c && a <= d){
//     smallest = a;
//   }
//   else if(b <= a && b <= c && b <= d){
//     smallest = b;
//   }
//   else if(c <= a && c <= b && c <= d){
//     smallest = c;
//   }else{
//     smallest = d;
//   }


//   console.log(`가장 작은 수는 ${smallest}입니다.`);


// }

// findLargestAndSmallest(3, 7, 2, 9) //를 호출하면 "가장 큰 수는 9입니다."와 "가장 작은 수는 2입니다."



function findLargestAndSmallest(a, b, c, d) {
  if (a === b && b === c && c === d) {
    console.log("모든 값이 같습니다.");
  } else {
    // 가장 큰 수와 가장 작은 수 초기화
    let largest = a;
    let smallest = a;

    // 가장 큰 수 찾기
    if (b > largest) largest = b;
    if (c > largest) largest = c;
    if (d > largest) largest = d;

    if (b < smallest) smallest = b;
    if (c < smallest) smallest = c;
    if (d < smallest) smallest = d;
    

    console.log(`가장 큰 수는 ${largest}입니다.`);
    console.log(`가장 작은 수는 ${smallest}입니다.`);
  }
}

findLargestAndSmallest(3, 7, 2, 9);