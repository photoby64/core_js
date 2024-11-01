/* ---------------- */
/* Condition        */
/* ---------------- */


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// function whatchingMovie 충돌 날까봐 안에 가둠


function watchingMovie(){


  let didWathchMovie = confirm('베놈 봤어?');


  if(didWathchMovie) {

    console.log('베놈 재밋더라 ㅎㅎ');


  }else{


    let goingToWatchMovie = confirm('영화 보러 갈래?');


    if(goingToWatchMovie){
    


      let withWho = prompt('누구랑 볼꺼야?');


      if(withWho === 'you'){

        console.log("좋아! 같이 보자!");


      }else{

        console.log('나랑 같이 보자 ㅠㅠㅠㅠㅠ');


      }

      

    }else{

      console.log('알겠엉ㅠ');

    }

  }

}



// includes.문자의 특정단어가 포함하고 있는지 확인하는 메소드
let didWhatingMovie = 'no';
let goingToWatchMovie = 'yes'

  const message = didWhatingMovie.includes('yes') ? '베놈 재밌더라!' : 
                  goingToWatchMovie.includes('yes') ? '같이 보자!!' : '알겠어ㅠ';

console.log(message);


// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식


let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

//includes:문자의 특정 단어가 포함하고 있는지 확인하는 메소드
const msg = didWatchMovie.includes('yes') ? '영화 재밌어! 한번 봐바!' : goingToWatchMovie.includes('yes') ? '언제 보러갈까? 신난당!' : '그래ㅠ';

console.log(msg);



function render(node, isActive){
  //조건부 랜더링

  let template = `
  <div>${ isActive ? '안녕' : '잘가'}</div>
  `


  node.insertAdjacentHTML('beforeend',template);
}