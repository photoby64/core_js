/* ---------------- */
/* Switch           */
/* ---------------- */

let a = 21;

switch (a) {
  case 10: console.log('10'); break;
  case 13: console.log('13'); break;
  case 15: console.log('15'); break;
  case 20: console.log('20'); break;

  default: console.log('10,13,15,20 숫자가 없습니다.'); break;
}



const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = LUNCH;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (thisTime) {
  case MORNING: console.log('아침 신문을 보며 담배를 피운다.');
    
    break;
  
  
  case LUNCH: console.log('점심식사는 닭가슴살 포케다!');
    
    break;
  
  case DINNER: console.log('집안정리나 청소를 한다.');
    
    break;
  
  case NIGHT: console.log('운동을 한다.');
    
    break;  

  case LATE_NIGHT: 
  case DAWN: console.log('꿈속에서 자바스크립트 공부를 한다.');
    break;
}




/* switch문 → if문 변환 --------------------------------------------------- */


if(thisTime === MORNING) console.log('1');
else if(thisTime === LUNCH) console.log('2');
else if(thisTime === DINNER) console.log('3');



console.log('🙋🏻‍♀️');
/* switch vs. if -------------------------------------------------------- */

// prompt를 통해 숫자를 입력 받는다. (0 ~ 6까지)
// 받은 숫자를 사용해서 switch case 돌려주시면 됩니다.


// 슬프게도 자스에서는 정수를 반환하는 함수는 없다.. 대신 실수를 반환하는 함수가 있는데 Math.random() 함수다. 
// Math.random()는 0이상 1 미만의 무작위 실수를 반환하는 함수로 0.0~ 0.9999... 까지의 값을 반환 할 수 있다.
// 정수를 반환하기 위해 Math.floor(), Math.ceil(), Math.round() 등을 함께 사용하여 정수로 변환할 수 있다.


// Math.random() * n
// Math.random()에 n을 곱하면 0이상 n 미만의 무작위 실수가 만들어 진다.
// 만약 n이 10이라면 0 이상 10미만의 무작위 값이 생성된다.

// Math.floor(...)
// Math.floor 함수는 주어진 숫자에서 소주점 이하를 내림하여 정수로 만들어 준다.



function getRandom(n) {
  const value =Math.floor(Math.random() * n);
  return value;

}

// 0이상 1 미만의 조건이기 때문에 7을 넣어야 6까지 나옴
console.log(getRandom(7));


function getDay(num){

  // return이 있는 경우 break;를 생력할 수 있다.

  switch (num) {
    case 0: return '일';
    case 1: return '월';
    case 2: return '화';
    case 3: return '수';
    case 4: return '목';
    case 5: return '금';
    case 6: return '토';
  }

}

console.log(getDay(2)); // 출력: 화

// getDay함수를 가지고
// 주말인지 평일인지를 콘솔창에 보여주는 함수를 만들어주세요.
// weekend


// .includes()
// .includes()는 문자열이나 배열에 특정 요소가 포함되어 있는지 확인할 때 사용하는 메서드다.

// [1] 문자열에서 .includes()
// 문자열에서 .includes()는 특정 부분 문자열이 포함되어 있는지 확인하여 true 혹은 false로 반환한다.

// [예시] //
// string.includes(substring, position)


function weekend(){

  const today = getDay(getRandom(7));

  if(today.includes('토') || today.includes('일')){

    return `오늘은 ${today}요일 입니다. 그러므로 주말입니다.`;

  }else{

    return `오늘은 ${today}요일 입니다. 그러므로 평일입니다.`;

  }
  
  // return (today.includes('토') || today.includes('일')) ? 
  //                     `오늘은 ${today}요일 입니다. 그러므로 주말입니다.` :  
  //                     `오늘은 ${today}요일 입니다. 그러므로 평일입니다.`;

}

const day = weekend();
console.log(weekend());
