/* 
💫 반복문  loop





개발을 하다 보면 여러 동작을 반복해야 하는 경우가 종종 생깁니다.
상품 목록에서 상품을 차례대로 출력하거나 숫자를 1부터 10까지 하나씩 증가시키면서 동일한 코드를 반복 실행해야 하는 경우같이 말이죠.
반복문(loop) 을 사용하면 동일한 코드를 여러 번 반복할 수 있습니다.







1️⃣ while 🔥
condition(조건)이 truthy 이면 반복문 본문의 코드가 실행됩니다.


문법: 
while (condition) {
  // 코드
  // '반복문 본문(body)'이라 불림
}












2️⃣ do…while 🔥

조건에 상관없이 최소한 한 번은 실행되는 것이 특징입니다. 
다른 반복문과의 차이점은 조건을 반복문 뒤에 검사하기 때문입니다. 
즉, 반복문이 실행되기 전에 조건을 체크하는 while문과 다르게 조건을 '나중에' 체크합니다.
조건이 true이면 다시 do 블록을 실행하고, 조건이 false이면 반복을 종료합니다.

do..while 문법을 사용하면 condition을 반복문 본문 아래로 옮길 수 있습니다.




문법:
do {
  // 실행할 코드
} while (조건);







let count = 0;

do {
  console.log("반복 실행 중", count);
  count++;
} while (count < 3);

count가 0일 때 처음 실행됩니다.
console.log("반복 실행 중", count)가 출력됩니다. (count는 0)
count++로 count가 1이 됩니다.
while (count < 3) 조건이 true이므로 반복문이 다시 실행됩니다.
count가 3이 되면, 조건이 false로 바뀌고 반복문이 종료됩니다.

결과:

반복 실행 중 0
반복 실행 중 1
반복 실행 중 2










let count2 = 0;

do {
  console.log("반복 실행 중", count2);
  count2++;
} while (count2 < 0

);

결과:
반복 실행 중 0









3️⃣ for 문🔥

for 문은 주어진 조건이 참일 때 반복해서 실행할 코드를 정의할 수 있습니다. 
for 문은 일반적으로 초기화, 조건 검사, 증감의 세 가지 구성을 가집니다.







문법:
for (초기화; 조건; 증감) {
  // 반복할 코드
}



- 초기화 (Initialization):
반복문이 시작될 때 한 번만 실행되는 부분입니다.
주로 반복에 사용되는 변수를 선언하고 초기화합니다.


- 조건 (Condition):
반복문이 실행될 때마다 조건을 검사합니다.
조건이 true이면 반복이 계속되고, false이면 반복문을 종료합니다.


- 증감 (Increment/Decrement):
반복문을 한 번 실행할 때마다 실행되는 부분입니다.
반복문 안에서 변수의 값을 증가시키거나 감소시킬 때 사용됩니다.



예시 1: 기본적인 for 문

for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4 출력
}

초기화: let i = 0 (변수 i를 0으로 초기화)
조건: i < 5 (i가 5보다 작은 동안 반복)
증감: i++ (각 반복 후 i를 1씩 증가)








예시 2: 2의 배수 출력

for (let i = 2; i <= 10; i += 2) {
  console.log(i);  // 2, 4, 6, 8, 10 출력
}

초기화: let i = 2 (변수 i를 2로 초기화)
조건: i <= 10 (i가 10 이하일 때 반복)
증감: i += 2 (각 반복 후 i를 2씩 증가)







예시 3: 배열 순회

const fruits = ['apple', 'banana', 'cherry'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);  // apple, banana, cherry 출력
}

배열의 각 항목을 출력하기 위해 for 문을 사용합니다.
fruits.length를 조건으로 사용하여 배열의 끝까지 순회합니다.








예시 4: for 문에서 continue 사용하기

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;  // i가 3일 때는 건너뜁니다.
  console.log(i);  // 1, 2, 4, 5 출력
}

continue는 현재 반복을 건너뛰고, 다음 반복으로 넘어가게 만듭니다.






예시 5: for 문에서 break 사용하기

for (let i = 1; i <= 5; i++) {
  if (i === 3) break;  // i가 3일 때 반복을 종료합니다.
  console.log(i);  // 1, 2 출력
}



✅ for 문의 변형

1. 초기화, 조건, 증감이 모두 생략된 경우
모든 부분을 생략하고, 대신 반복문 안에서 초기화 및 증감을 처리할 수 있습니다.

let i = 0;
for (; i < 5; ) {
  console.log(i);
  i++;  // i 증가
}








2. for 문을 무한 루프에 사용할 때
무한 반복을 원할 때는 조건 부분을 생략하거나 항상 true를 설정합니다

for (;;) {
  console.log('무한 루프');
}










3. 배열 순회 (배열 길이를 조건으로)

let arr = [10, 20, 30, 40];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);  // 10, 20, 30, 40 출력
}







4. 배열 순회 (역순으로)

let arr = [10, 20, 30, 40];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);  // 40, 30, 20, 10 출력
}






for문은 순환할때 쓰는 함수니까..
for in문은 순환하면서 어떤 속성을 찾는것?













✅ for in 문

for...in 문은 객체의 속성을 '순환'하는 데 사용됩니다. 
이 문법은 객체의 자신의 속성뿐만 아니라, 프로토타입 체인에 있는 상속된 속성까지 순환하게 됩니다. 
따라서 자신의 속성만 순환하려면 hasOwnProperty()를 함께 사용해야 합니다.



문법:
for (let key in object) {
  // key는 객체의 속성 이름
  // object[key]는 속성의 값
}




-----------1차 배운 문법-------
const obj= {};
obj.nickName = 'tiger'

for( const key in obj){
  console.log(key);
  
}

console.log(obj);

-----------------------------




1. 객체 자신의 속성만 순환
예시: 

const person = {
  name: 'John',
  age: 30,
  greet() {
    console.log('Hello');
  }
};

// 객체의 프로토타입 체인에 있는 속성까지 순환되지 않도록 hasOwnProperty 사용

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key + ': ' + person[key]);
  }
}

이 코드에서 hasOwnProperty(key)를 사용하여 상속된 속성을 제외하고 자신의 속성만 출력하도록 합니다.












2. 배열 객체 순환에 사용할 경우 ... 일반적으로 배열의 순서는 for...of 문 권장


for...in 문은 배열에도 사용할 수 있지만 배열의 인덱스가 문자열로 다뤄지기 때문에, 
배열의 순서를 보장하지 않거나 인덱스 외의 속성까지 순환될 수 있습니다. 
또한, 배열의 숫자 인덱스를 순차적으로 순환하는 데에는 for 문이나 for...of 문이 더 적합합니다.


예시: 배열 순환
const array = ['apple', 'banana', 'cherry'];

// 배열에서 for...in 사용
for (let index in array) {
  console.log(index + ': ' + array[index]);
}

// 출력:
// 0: apple
// 1: banana
// 2: cherry


위 코드에서 for...in 문은 배열의 인덱스를 문자열로 처리하므로, 배열 인덱스 순서와 관계 없이 순환할 수 있습니다. 
일반적으로 배열의 순서를 보장하려면 for 문이나 for...of 문을 사용하는 것이 좋습니다.







🔥 for...of로 배열 순환
const array = ['apple', 'banana', 'cherry'];

// 배열에서 for...of 사용
for (let value of array) {
  console.log(value);
}

// 출력:
// apple
// banana
// cherry


for...of 문은 배열의 값만 순차적으로 순환하며, 배열 순서를 보장하고 인덱스에 대한 걱정 없이 값을 처리할 수 있습니다









⭐️ continue 제어문

continue는 반복문 내에서 사용되는 제어문으로, 해당 반복을 중단하고 다음 반복으로 넘어가게 합니다. 
continue는 for, while, do...while 등 반복문에서 사용할 수 있습니다.

continue의 동작 원리
continue가 실행되면, 현재 반복을 중단하고 조건에 맞는 다음 반복으로 진행합니다.
continue는 반복문 내에서 조건이 충족되었을 때 특정 작업을 건너뛰고 다음 반복을 시작하도록 할 때 유용합니다.



while 반복문에서 continue 사용 예시:

let i = 0;

while (i < 5) {
  i++;  // i를 1씩 증가시키면서
  if (i === 3) {
    continue;  // i가 3일 때는 출력하지 않고 다음 반복으로 넘어감
  }
  console.log(i);  // i가 3이 아닐 때만 출력







*/