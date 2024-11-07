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




/* switch vs. if -------------------------------------------------------- */

