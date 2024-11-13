/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
portableFan && portableFan.photos && portableFan.photos.animate





// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
portableFan.photos ?.animate






// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName= portableFan.getFullName ?.();
console.log(fullName);






// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.







// sync (동기 세탁기 1대)  async (비동기 세탁기 2대)

// 자바스크립트는 단일스레드인데 너무 불편해서 web apis(어플리케이션 프로그래밍 인터페이스: 제공 되는것 )를 빌려서? 쓰는것)를 따로 뽑아서 씀


// console.log(1);
// console.log(2);

// 그런데, settimeout은 시간을 정확하게 보장하지 못한다! 그게 문제야 문제
// callback Queue에서 call stack으로 넘어갈때 call stack이 다 비워져야 등장하기때문 

// setTimeout(() => { // code -> call stack -> web apis -> callback Queue -> call stack(이 다 비워져야 등장함)
//   console.log(3);
// }, 1000); // 1초 

// console.log(4);
// console.log(5);




// 타이머 등록
const button = document.querySelector('.my-button');

const id = setTimeout(() => {

  const tag = /* html */`
    <button type="button" class="my-button">my-button</button>
  `

  document.body.insertAdjacentHTML('beforeend', tag)

}, 1000)

button ?.addEventListener('click', () => {
  console.log('clicked~!');
})






// let count = 0;

// setInterval(()=>{
  
//   document.querySelector('.second').style.transform = `translateY(-${++count}px) rotate(${count}deg)`;
  
// },0)








// let count = 0;

// setInterval(()=>{
  
//   document.querySelector('.second').style.transform = `translateY(-${++count}px) rotate(${count}deg)`;
  
// },0)






// 무한으로 돌아가는 이 친구를 말려줘요;











// ???? 필기 못함


// requestAnimationFrame(animation) 애니메이션 함수


// let counter = 0;

// function animation() {

//   console.log(++counter);

//   const id = requestAnimationFrame(animation)

//   if (counter >= 100) {
//     cancelAnimationFrame(id)
//   }
// }

// animation()
