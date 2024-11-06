const user= {
  name: 'UserA',

};

console.log(typeof user);


user.__proto__ = Array.prototype;
user.push('newValue');
console.log(typeof user);