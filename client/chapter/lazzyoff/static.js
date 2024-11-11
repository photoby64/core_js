/*
💫 Static



Static(스태틱)은 프로그래밍에서 '고정된', '정적'이라는 뜻으로, 
특정 클래스에 속해 있지만 클래스의 인스턴스와는 독립적으로 존재하는 속성이나 메서드를 의미해요.




Static이 무엇인지 이해하기
JavaScript에서 static 키워드는 클래스의 속성이나 메서드를 정의할 때 사용되며, 
클래스의 인스턴스가 아닌 클래스 자체에서 호출할 수 있는 속성이나 메서드를 만듭니다. 

예시:

// 클래스 정의
class Animal {
  constructor(name) {  // 생성자 메서드
    this.name = name;  // 속성 정의
  }

  speak() {  // 인스턴스 메서드
    console.log(`${this.name} makes a sound`);
  }
}

// 클래스의 인스턴스 생성
const dog = new Animal("Buddy");  // 'Buddy'라는 이름을 가진 인스턴스 생성
const cat = new Animal("Kitty");  // 'Kitty'라는 이름을 가진 인스턴스 생성

// 인스턴스 메서드 호출
dog.speak();  // "Buddy makes a sound"
cat.speak();  // "Kitty makes a sound"












Static 메서드와 속성은 모든 인스턴스가 공유하며, 
인스턴스가 아닌 클래스 이름을 통해 직접 호출합니다.

Static 메서드와 속성의 특징
인스턴스가 필요 없음: 클래스의 인스턴스 없이, 클래스 자체에서 바로 호출할 수 있습니다.
공통 작업을 처리: 주로 특정 인스턴스에 종속되지 않는, 클래스 자체와 관련된 공통적인 작업을 수행합니다.
인스턴스에 상속되지 않음: 인스턴스에서는 직접적으로 사용할 수 없습니다.








*/