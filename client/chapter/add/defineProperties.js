/*
🎭  defineProperties()


자바스크립트의 내장 메서드로, 객체에 
하나 이상의 속성을 정의하거나 수정할 수 있게 해줍니다. 

이 메서드는 객체의 속성을 추가하거나, 기존 속성의 속성 정의를 변경할 때 사용됩니다.


요약:
Object.defineProperties()는 객체의 여러 속성을 ⭐️한 번에⭐️ 정의하거나 수정할 수 있게 해줍니다.
**속성 정의자(descriptor)**를 사용하여 각 속성의 특성을 설정할 수 있습니다.
객체 속성을 읽기/쓰기 가능, 순환 가능, 삭제 가능 여부 등을 제어할 수 있습니다.







문법:
Object.defineProperties(obj, descriptors);

obj: 속성을 정의하려는 대상 객체.
descriptors: 속성 이름과 속성 설정을 포함하는 객체. 이 객체는 각 속성 이름을 키로 가지고, 해당 속성의 정의를 값으로 가집니다.






속성 정의자(Descriptors):
각 속성 정의에는 속성 속성 descriptor가 있으며, 이를 통해 속성의 읽기/쓰기 동작을 제어할 수 있습니다.

value: 속성의 값. 기본값은 undefined.
writable: 속성 값이 변경 가능한지 여부를 결정하는 불리언 값. 기본값은 false.
enumerable: 객체를 순환할 때 속성이 나타날지 여부를 결정하는 불리언 값. 기본값은 false.
configurable: 속성 삭제나 속성의 특성 변경이 가능한지 여부를 결정하는 불리언 값. 기본값은 false.
get: 속성 값을 읽을 때 호출될 함수 (getter). value가 설정된 경우 사용하지 않음.
set: 속성 값을 설정할 때 호출될 함수 (setter). value가 설정된 경우 사용하지 않음.



*/



// getter와 setter 사용법:
const obj = {};

Object.defineProperties(obj, {
  name: {
    get() {
      return 'Hello, ' + this._name;
    },
    set(value) {
      this._name = value;
    }
  }
});

obj.name = 'Alice';
console.log(obj.name);  // 'Hello, Alice'














// 기본 사용법
// 예시:
const obj = {};

Object.defineProperties(obj, {
  name: {
    value: 'Alice',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: true
  }
});

console.log(obj.name);  // 'Alice'
console.log(obj.age);   // 30

obj.name = 'Bob';   // 가능
obj.age = 35;       // 에러는 발생하지 않지만, 값은 변경되지 않음 (writable: false)
console.log(obj.name);  // 'Bob'
console.log(obj.age);   // 30



/*
getter와 setter 사용:



const person = {};

Object.defineProperties(person, {
  firstName: {
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: true
  },
  lastName: {
    value: 'Doe',
    writable: true,
    enumerable: true,
    configurable: true
  },
  fullName: {
    get: function() {
      return this.firstName + ' ' + this.lastName;
    },
    set: function(value) {
      const nameParts = value.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
  }
});

console.log(person.fullName); // "John Doe"
person.fullName = 'Alice Smith'; // setter가 호출되어 firstName과 lastName이 변경됨
console.log(person.firstName); // "Alice"
console.log(person.lastName);  // "Smith"












*/