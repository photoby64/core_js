/*
🎭 hasOwnProperty()

hasOwnProperty는 객체(Object)의 메서드로, 
객체가 특정 속성을 자기 자신의 속성으로 가지고 있는지 확인하는 함수입니다.


 
'객체가 상속된 속성이 아닌', 
 
'직접 정의된 속성'을 가지고 있는지 확인할 수 있습니다.




문법:
Object.prototype.hasOwnProperty('propertyName');




*/


const obj = {
  name: 'Alice',
  age: 30
};

console.log(obj.hasOwnProperty('name')); // true
console.log(obj.hasOwnProperty('toString')); // false


/*


hasOwnProperty('name')는 true를 반환하는데, 이는 name이 obj에 직접 정의된 속성이기 때문입니다.

hasOwnProperty('toString')는 false를 반환합니다. 
toString 메서드는 객체가 상속받는 기본 속성으로, obj 자체에 직접 정의된 것이 아닙니다.







🔥 Object.prototype.hasOwnProperty.call(객체이름, 키이름)


문법:
Object.prototype.hasOwnProperty.call(object, 'propertyName');

'propertyName'은 해당 객체가 가지고 있는지 확인하고자 하는 속성의 이름을 문자열로 전달합니다.




위험을 피하기 위해 hasOwnProperty()를 사용할 때, **call()**을 활용해 
특정 객체의 메서드를 직접 호출하는 방법이 더 안전합니다. 
이렇게 하면 객체가 직접 가진 메서드를 정확하게 사용할 수 있습니다.




예시:

const myObj = {};

// `hasOwnProperty`를 `myObj` 객체에서만 사용하고, 다른 객체에 영향을 주지 않도록 함
console.log(Object.prototype.hasOwnProperty.call(myObj, 'nonExistent'));  // false






*/