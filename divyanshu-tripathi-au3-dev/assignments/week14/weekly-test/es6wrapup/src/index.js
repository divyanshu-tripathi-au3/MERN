import User from './person';
import sortArray from './module';
import _ from 'lodash';

var divy = new User("divy", 25, "divy@gmail.com");
var suraj = new User("suraj", 24, "suraj@gmail.com");

console.log(divy.sayHello());
console.log(suraj.sayHello(), suraj.age);


var updateClick = (function countClick() {
    let count = 0;
    return function increaseCount() {
        count += 1;
        console.log(`Counter : ${count}`);
    };
})();

// calling sort Array function from  module
console.log(sortArray([3,4,8,9]));

var arrayOfObj = [
    {
        name: "divy",
        age: 27
    },
    {
        name: "tripathi",
        age: 25
    },
    {
        name: "suraj",
        age: 33
    },
    {
        name: "divyam",
        age: 29
    }
];

var byAge = (person) => {
   return person.age < 30;
};
var getAge = (person) => {
    return person.age;
};

var  totalAge = (acc, age) => {
    return acc + age;
};

const avgAge = (arr) => {
    var totalLength = arr.filter(byAge).map(getAge).length;
    console.log(totalLength);
    return Math.floor(arr.filter(byAge).map(getAge).reduce(totalAge) / totalLength);
};

console.log(avgAge(arrayOfObj));

var byAgeLodash = _.filter(arrayOfObj, (user) => {
    return user.age < 30;
});

var getAgeLodash = _.map(byAgeLodash, (user) => {
    return user.age;
});

var totalAgeLodash = _.reduce(getAgeLodash, (age, acc) => {
       return acc + age;
});

var avgAgeLodash = Math.floor(totalAgeLodash / getAgeLodash.length);

console.log(byAgeLodash);

console.log(getAgeLodash);

console.log(totalAgeLodash);

console.log(avgAgeLodash);
