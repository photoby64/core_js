


// enumerable 열거 가능한 
// 찐상수
// 특정 값들을 이름으로 묶어 관리할 수 있는 도구


enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

console.log(Color.Red);   // 출력: "RED"
console.log(Color.Green); // 출력: "GREEN"



enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

const direction = {
  up:Direction.UP,
  down:Direction.DOWN,
  left:Direction.LEFT,
  right:Direction.RIGHT,
};

enum End_point {
  USER = 'user.com/user',
  MONSTER = 'monster.com/monster',
  IMAGE = 'randomImage.com/200x200'
}


const END_POINT = {
  user:End_point.USER
}