


for (let value = 0; value <= 10; value++) {
  console.log(value);
}



for (let value = 2; value <= 14; value += 2) {
  console.log(value);
}


console.clear();

// 1부터 N까지의 합을 구하는 프로그램

// 함수 이름은 sumUpTo로 하고, 숫자 N을 매개변수로 받습니다.
// for 문을 사용하여 1부터 N까지의 숫자를 모두 더한 후, 그 합을 콘솔에 출력하세요.
// 예를 들어, sumUpTo(5)를 호출하면 1 + 2 + 3 + 4 + 5 = 15가 되어 "합은 15입니다."가 출력됩니다.

function sumUpTo(value){

  let sum = 0;

  for(let num = 1; num <= value; num++){

    sum = sum + num;

  } 

  console.log(`합은 ${sum}입니다.`);



}
sumUpTo(3); 


// 배수 합 구하기

// 1부터 100까지의 숫자 중 3의 배수와 5의 배수를 모두 더한 합계를 구하는 프로그램을 작성하세요. 
// 단, 3과 5의 공배수는 한 번만 더합니다.

// 예시
// 3, 5, 6, 9, 10, 12, ... 이렇게 3의 배수 또는 5의 배수를 모두 더하면 됩니다.
// 요구사항
// for 문을 사용하여 1부터 100까지 반복합니다.
// 조건문을 사용하여 3의 배수 또는 5의 배수를 골라 합계에 더하세요.



let hundredNum = 0;
for(let num = 1; num <= 100; num++){
  if (num % 3 === 0 && num % 5 === 0){
    hundredNum += num

  }
  
}

console.log(`3과 5의 배수의 합은 ${hundredNum}입니다.`);