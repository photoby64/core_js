import { 
  css,
  diceAnimation,
  getNodes, 
 } from "./lib/index.js";


// diceAnimation()

// setInterval

// 주사위 굴리기 버튼을 누르면 주사위가 애니메이션이 될 수있도록


const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button')



const handleRollingDice = () => {
  let isClicked = false;
  let stopAnimation;

  return () => {
      if (!isClicked) {
          stopAnimation = setInterval(diceAnimation, 100);
      } else {
          clearInterval(stopAnimation);
      }
      isClicked = !isClicked;
  };
};


rollingButton.addEventListener('click',handlerRollingDice)