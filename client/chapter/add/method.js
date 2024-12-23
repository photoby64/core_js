/*
💫 method



메서드는 '객체'나 '클래스'에 속한 함수로, 
객체의 상태를 조작하거나 객체와 관련된 동작을 수행하는 역할을 합니다.

메서드의 특징
메서드는 일반 함수와 비슷하지만, 
'특정 객체에 묶여 있'으며 그 객체의 속성에 접근하거나 조작할 수 있다는 점이 특징이에요. 
JavaScript에서는 클래스 내에서 정의된 함수들이 메서드라고 불립니다.


정리하자면..
인스턴스 메서드: 인스턴스에서 호출되며, 인스턴스의 속성에 접근하거나 수정할 수 있음.
스태틱 메서드: 클래스에서 직접 호출되며, 인스턴스 상태와는 무관한 작업을 수행.








객체의 static method

const keys = Object.keys(obj); 
// 객체의 key들을 모아 새로운 배열을 '반환' 하는 유틸 함수


const values = Object.values(obj); 
// 객체의 value들을 모아 새로운 배열을 '반환' 하는 유틸 함수


const entries = Object.entries(obj); 
// 객체의 [key,value]들을 모아 한 쌍의 배열을 이루는 새로운 배열을 '반환' 하는 유틸 함수









예시로 살펴보기:*/
const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // "Hello, my name is Alice"

/* 여기서 greet는 person 객체에 속한 함수입니다. 
객체에 속한 함수이기 때문에 greet를 메서드라고 부릅니다.
this.name을 사용해 person 객체의 name 속성에 접근할 수 있습니다. 
this는 메서드가 속한 객체(person)를 가리키기 때문이에요.





클래스 메서드 예시: */
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice");
person1.greet(); // "Hello, my name is Alice"


/*
greet는 Person 클래스에 정의된 메서드입니다.
greet 메서드는 객체의 인스턴스(person1)에서 호출할 수 있으며, 
this를 통해 객체의 속성(name)에 접근할 수 있어요.






🔥
스태틱 메서드와 인스턴스 메서드는 클래스에서 정의된 메서드의 두 가지 유형으로, 
'어디서' 호출할 수 있는지와 '역할'에 차이가 있습니다.









1. 인스턴스 메서드 (Instance Method)
인스턴스 메서드는 클래스의 인스턴스?에서 호출할 수 있는 메서드입니다.
주로 객체의 상태(속성)를 읽거나 수정하는 데 사용됩니다.
인스턴스 메서드를 사용하려면 클래스의 인스턴스를 생성해야 합니다.




예시:*/
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person2 = new Person("Alice");
person1.greet(); // "Hello, my name is Alice"

// 여기서 greet()는 인스턴스 메서드이며, person2이라는 인스턴스를 통해 호출됩니다.






/*

2. 스태틱 메서드 (Static Method)
스태틱 메서드는 
클래스 자체에서 호출할 수 있는 메서드이며, 인스턴스가 필요하지 않습니다.
인스턴스의 상태에 의존하지 않는 작업(예: 유틸리티 함수, 클래스 전체에 관련된 로직)을 수행하는 데 사용됩니다.
클래스 정의 시 static 키워드를 사용하여 스태틱 메서드를 정의합니다.



*/
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 3)); // 8
// 여기서 add()는 스태틱 메서드이며, MathHelper 클래스에서 직접 호출됩니다. 인스턴스를 생성할 필요가 없죠.

/*

Static 메서드를 클래스 안에 넣는 이유를 다시 요약하면:
관련된 기능을 그룹화: 같은 기능을 수행하는 메서드를 클래스 안에 넣어서, 나중에 그 기능과 관련된 메서드를 한 곳에서 쉽게 찾아볼 수 있습니다.

코드 가독성 향상: 클래스 이름을 보면 그 클래스가 제공하는 기능이나 역할을 알 수 있어요. MathHelper.add()처럼 클래스 이름과 함께 호출하면 메서드의 역할이 더 명확해지고 코드의 의미가 드러납니다.

유지보수의 용이성: 관련된 기능이 한 곳에 모여 있어, 기능을 추가하거나 수정할 때 관리가 쉬워지고 코드가 깔끔해집니다.

*/