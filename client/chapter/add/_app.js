const h1 = document.querySelector("div.hello:first-child h1");


function handleH1Click(){
  const currentColor = h1.style.color;
  let newColor;

  if(currentColor === "blue") {
    h1.style.color = "tomato";
  
  } else {
    h1.style.color = "blue";
  }
}

h1.addEventListener("click", handleH1Click);















const numberElement = document.getElementById("number");
let currentNumber = 0; // 현재 숫자를 저장하는 변수

function handleButtonClick() {
    let newNumber; // 새로운 숫자를 저장할 변수

    if (currentNumber === 10) { // 현재 숫자가 10이라면
        newNumber = 0; // 새로운 숫자는 0으로 리셋
    } else {
        newNumber = currentNumber + 1; // 현재 숫자에 1을 더함
    }

    currentNumber = newNumber; // 현재 숫자를 새로운 숫자로 업데이트
    numberElement.innerText = currentNumber; // 화면에 현재 숫자를 표시
}

const button = document.getElementById("increaseBtn");
button.addEventListener("click", handleButtonClick);
