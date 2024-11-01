/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 &&
let AandB = a && b;
console.log(AandB);

//a &&= b =>logical and assigment


// 논리합(또는) 연산자 || or
let AorB = a || b;
console.log(AorB);



//a || b => logical or assignment
// a = a || b =>위에 식과 같은 모양



// 부정 연산자
let reverseValue;
console.log(!reverseValue);



// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = ture && ' ' && [] && {thisIsFalsy:false}

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || ''  [2,3].length || {thisIsFalsy:false};



console.clear();




// toLowerCase()를 사용하면 에러가 발생하는데..
// ?는 null,undef이 뜨면 안써. 라는 의미
// 만능은 아니구.. 때의 맞게 잘써야한다. 많이 쓰면 위험ㅋㅋ 

// 함수는 return을 만나면 그 즉시 종료한다.
function login(){



  let userName = prompt('who`s there?');

  // if(userName === null || userName === undefined) return
  // if(!userName) return




  if(userName?.toLowerCase() === 'admin'){
    
    let passWord = prompt('비밀번호를 입력하세요!')


    if(passWord === 'themaster') {
      console.log('로그인 성공');
    }
    else if(passWord === null) {
    console.log('취소되었습니다.');
  
    }else{
      console.log('잘못된 값을 입력하셨습니다.');
      login() //재귀함수 내가 나를 다시 불러옴.
    }
  }
  
  else if(userName === null){
    console.log('취소되었습니다.');
  }


  // .replace
  // 정규표현식 잘 알면 좋아요..호호ㅎㅗ^^
  else if(userName === null || userName.replace(/\s*/g,'') === ''){
    console.log('공백 안돼!');
  }



  // .replaceAll
  // else if(userName === null || userName.replaceAll(' ','' === '')){
  //   console.log('공백 안돼!');
  // }




  else{
    console.log('잘못된 값을 입력하셨습니다.');
  }
}

login()