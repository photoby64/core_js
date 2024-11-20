import { 
  attr,
  insertLast
  getNode,
  css,
  diceAnimation,
  getNodes, 
 } from "./lib/index.js";


// diceAnimation()
// setInterval
// 주사위 굴리기 버튼을 누르면 주사위가 애니메이션이 될 수있도록





const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button')
const recordListWrapper = getNode('.recordListWrapper');
const dice = getNode('.cube > dice')


const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
      if (!isClicked) {
          stopAnimation = setInterval(diceAnimation, 100);
          recordButton.disabled = true;
          resetButton.disabled = true;
          

      } else {
          clearInterval(stopAnimation);
          recordButton.disabled = false;
          resetButton.disabled = false;
      }
      isClicked = !isClicked;
  };
})();


let = 0;
function renderRecordItem(){
  const template = `
    <tr>
      <td>${++count}</td>
      <td>5</td>
      <td>5</td>
    </tr> 
  `
  // getNode('tbody').insertAdjacentHTML('beforeend',template)
  insertLast('tbody', template)
}



function handleRecordDice(){

  recordListWrapper.hidden = false;

  renderRecordItem()

}

let diceValue = dice.value
  console.log(diceValue);

  

  



rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click',handleRecordDice);