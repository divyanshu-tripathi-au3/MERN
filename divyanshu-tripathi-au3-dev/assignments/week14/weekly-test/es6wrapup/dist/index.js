"use strict";

var _person = _interopRequireDefault(require("./person"));

var _module = _interopRequireDefault(require("./module"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var divy = new _person["default"]("divy", 25, "divy@gmail.com");
var suraj = new _person["default"]("suraj", 24, "suraj@gmail.com");
console.log(divy.sayHello());
console.log(suraj.sayHello(), suraj.age);

var updateClick = function countClick() {
  var count = 0;
  return function increaseCount() {
    count += 1;
    console.log("Counter : ".concat(count));
  };
}(); // calling sort Array function from  module


console.log((0, _module["default"])([3, 4, 8, 9]));
var arrayOfObj = [{
  name: "divy",
  age: 27
}, {
  name: "tripathi",
  age: 25
}, {
  name: "suraj",
  age: 33
}, {
  name: "divyam",
  age: 29
}];

var byAge = function byAge(person) {
  return person.age < 30;
};

var getAge = function getAge(person) {
  return person.age;
};

var totalAge = function totalAge(acc, age) {
  return acc + age;
};

var avgAge = function avgAge(arr) {
  var totalLength = arr.filter(byAge).map(getAge).length;
  console.log(totalLength);
  return Math.floor(arr.filter(byAge).map(getAge).reduce(totalAge) / totalLength);
};

console.log(avgAge(arrayOfObj));

var byAgeLodash = _lodash["default"].filter(arrayOfObj, function (user) {
  return user.age < 30;
});

var getAgeLodash = _lodash["default"].map(byAgeLodash, function (user) {
  return user.age;
});

var totalAgeLodash = _lodash["default"].reduce(getAgeLodash, function (age, acc) {
  return acc + age;
});

var avgAgeLodash = Math.floor(totalAgeLodash / getAgeLodash.length);
console.log(byAgeLodash);
console.log(getAgeLodash);
console.log(totalAgeLodash);
console.log(avgAgeLodash);