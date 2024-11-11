/*
💫 상속 Prototype Inheritance





자바스크립트는 클래스 기반 언어가 아닌 프로토타입 기반 언어입니다. 
즉, 객체가 다른 객체를 "상속"하여 속성이나 메서드를 받을 수 있도록 합니다. 
자바스크립트에서는 프로토타입 체인을 통해 객체가 속성과 메서드를 상속받습니다.



예시:
const family= ['주원', '승협', '윤경']; family


상속된 속성:
배열 family는 배열 객체이므로, 배열에서 상속되는 속성은 Array 객체의 속성과 Object 객체의 속성입니다. 
자바스크립트에서 배열은 Array의 인스턴스로 취급되기 때문에, 
배열에 상속된 속성은 Array와 Object에서 제공하는 여러 메서드와 속성들이 포함됩니다.






**JavaScript 상속(Prototype Inheritance 인헤리턴스)**은 
객체가 다른 객체로부터 **속성(property)**과 **메서드(method)**를 상속받는 개념입니다. 
여기서 중요한 것은 객체의 속성/메서드를 '다른 객체가 물려받는다는 점'입니다.
즉, 자바스크립트의 상속은 객체가 다른 객체로부터 속성이나 메서드를 물려받는 메커니즘 입니다.





예시:
const animal = {
  sound: '소리',
  speak: function() {
    console.log(this.sound);
  }
};

const dog = Object.create(animal);  // dog는 animal을 상속받음
dog.sound = '멍멍';  // dog 객체에만 속성을 추가

dog.speak();  // '멍멍' 출력 (dog는 animal을 상속받아서 speak 메서드 사용 가능)



여기서 dog 객체는 animal 객체를 상속받습니다. 
dog 객체는 animal 객체에 정의된 speak() 메서드를 사용할 수 있고, 
dog 객체에 sound 속성을 추가했기 때문에 해당 값을 덮어씁니다.



클래스와의 관계:
자바스크립트에서는 class 문법을 사용하여 객체 지향적인 방식으로 상속을 구현할 수 있습니다. 
class도 내부적으로는 프로토타입 상속을 사용합니다.








예시:
class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(sound, breed) {
    super(sound);  // 부모 클래스의 constructor를 호출
    this.breed = breed;
  }
}

const dog = new Dog('멍멍', '진돗개');
dog.speak();  // '멍멍' 출력
console.log(dog.breed);  // '진돗개' 출력



여기서 Dog 클래스는 Animal 클래스를 상속받아 speak 메서드를 사용할 수 있습니다.









⭐️ Object에서 상속된 속성들:

toString(): 객체를 문자열로 변환하는 메서드입니다.
hasOwnProperty(): 객체가 특정 속성을 갖고 있는지 확인하는 메서드입니다.
isPrototypeOf(): 객체가 다른 객체의 프로토타입 체인에 있는지 확인하는 메서드입니다.
constructor: 객체를 생성한 함수(생성자)를 반환하는 속성입니다.
propertyIsEnumerable(): 객체의 속성이 열거 가능한지 확인하는 메서드입니다.


⭐️ Array에서 상속된 속성들:

length: 배열의 길이(배열에 있는 요소의 개수)를 반환하는 속성입니다.
push(): 배열의 끝에 하나 이상의 요소를 추가하는 메서드입니다.
pop(): 배열의 마지막 요소를 제거하고 그 값을 반환하는 메서드입니다.
shift(): 배열의 첫 번째 요소를 제거하고 그 값을 반환하는 메서드입니다.
unshift(): 배열의 맨 앞에 하나 이상의 요소를 추가하는 메서드입니다.
concat(): 두 배열을 합치는 메서드입니다.
join(): 배열의 모든 요소를 연결해 하나의 문자열로 만드는 메서드입니다.
forEach(): 배열의 각 요소에 대해 함수를 실행하는 메서드입니다.









*/