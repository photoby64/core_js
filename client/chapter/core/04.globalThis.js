/* ------------------ */
/* Global This        */
/* ------------------ */

//윈도우와 짝꿍~
var objectVariable = '전역 객체의 변수';

//선언만!
let declarativeVariable = '전역 변수';



// globalThis를 통해 접근 가능한 변수와 그렇지 않은 변수는?
// 콘솔은 윈도우꺼. 정확하게는 window.console이다. 윈도우는 생략해서 사용가능하다.
console.log(globalThis);

//얼럿도 원래 윈도우꺼 그런데 암묵적으로 생략해서 사용하능하다. prompt 등.. 자세한건 더 찾아보시길..
//alert('안돼');


//console.log(globalThis.declarativeVariable);

// 전역 객체는 이전 버전과의 호환성으로 인해 JavaScript가 제거할 수 없는 실수로 간주됩니다. 
// 성능에 부정적인 영향을 미치며 일반적으로 혼란스럽습니다. 전역 객체를 사용한 변수 사용은
// 문제를 발생시킬 소지가 있고, 테스트가 어려우니 가급적 사용하지 않는 것이 좋습니다.
