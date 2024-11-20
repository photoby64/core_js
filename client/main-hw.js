// named export -> {} 필수! :  import { getNode } from
// default export -> 중갈호 없이 받을 수 있고, 딱 한개만 내보낼 수 있음 앞에 export defult로 씀.

// export 던지고 import 받는다.


// import { getNode } from "/lib/dom/getNode.js";
// // import { getNode as $} from "/lib/dom/getNode.js"; 이름 바꿀수 있음
// import { insertLast } from "./lib/dom/insert.js";
// import { clearContents } from "./lib/dom/clearContents.js";
// // import c from "./lib/dom/clearContents.js";


import {
    getNode as $, 
    getNodes, 
    insertLast, 
    clearContents } from './lib/index.js'



// input 선택하기
// 이벤트 바인딩
// 의 value 값 가져오기



// DOM 노드를 가져오기
const first = getNode('#firstNumber'); // 첫 번째 숫자 입력 필드
const second = getNode('#secondNumber'); // 두 번째 숫자 입력 필드
const result = getNode('.result'); // 결과를 출력할 노드

// 입력 이벤트 처리 함수
function handleInput() {
    // 첫 번째와 두 번째 입력 값 가져오기
    const firstValue = Number(first.value); // 첫 번째 값(숫자 변환)
    const secondValue = +second.value; // 두 번째 값(숫자 변환, 단축형)

    // 두 값을 더하기
    const total = firstValue + secondValue;

    // 결과를 출력할 노드의 내용을 초기화
    clearContents(result);

    // 결과 노드에 합산 결과 추가
    insertLast(result, total);
}

// 입력 필드에 이벤트 리스너 추가
first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);
