
// 문제: Days라는 enum을 정의하고 숫자를 1부터 7까지 할당하세요.

enum Days {

  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  friday,
  Saturday

}



// 숫자형 enum 정의


console.log(Days.Sunday);    // 1
console.log(Days.Saturday);  // 7







// 문제: TrafficLight enum 정의후 switch case를 사용한 비교 

enum TrafficLight {

  Red = 'Red',
  Green = 'Green',
  Yellow = 'Yellow'

}

console.log(TrafficLight.Red); // Red



// 신호등 색상에 따라 동작을 변경하는 함수
function 신호등(light:TrafficLight) {
  switch (light) {
    
    case TrafficLight.Red :
      console.log('Stop!');
      break;

    case TrafficLight.Green:
      console.log('gogo!');
      break;

    case TrafficLight.Yellow:
      console.log('갈까말까');
      break;
  }
}



// 사용 예시
신호등(TrafficLight.Red);    // Stop!
신호등(TrafficLight.Green);  // Go!