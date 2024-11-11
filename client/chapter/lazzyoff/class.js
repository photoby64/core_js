/*










클래스는 객체의 청사진 역할을 해서 여러 인스턴스를 쉽게 생성할 수 있고, 
생성자 함수와 메서드 등을 통해 객체의 "초기화"와 "동작"을 정의할 수 있습니다. 
JavaScript에서 ES6부터 class 문법이 도입되어, 객체 지향 프로그래밍 패턴을 좀 더 직관적으로 작성할 수 있게 되었어요.



클래스는 객체를 정의하는 또다른 방법입니다.
클래스를 사용하면 자바스크립트의 전역을 오염시키지 않고 안전하게 코드를 작성할 수 있으며
여러가지 속성들을 한번에 정의 내릴 수 도 있습니다.


constructor









class MyClass {
  // 여러 메서드를 정의할 수 있음
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}





class User {

  constructor(name) {  // 1회 실행
    this.name = name; // 
  }

  sayHi() {
    alert(this.name);
  }

}

// 사용법:
let user = new User("John"); 
user.sayHi();






넘겨받은 인수와 함께 constructor가 자동으로 실행됩니다. 
이때 인수 "John"이 this.name에 할당됩니다.






*/
