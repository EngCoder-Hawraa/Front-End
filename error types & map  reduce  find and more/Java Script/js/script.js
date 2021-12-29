// Strict Mode
// ex:
"use strict";
var x = 4.5;
console.log(x);


// ex:
"use strict";
myFunction();

function myFunction() {
    let y = 3.14;
}

// لا يمكن استخدام delete
// ex:
// "use strict";
// let y = 3.14;
// delete y;


// ex: لا يمكن استخدام اثنين براميتر بنفس الاسم
// "use strict";
// function x(p1, p1) {}


//forEach
// ex:
var arr = [1, 2, 3]
arr.forEach(function(item, index, array) {
    console.log(item, index, array, this);
}, this);


//map
// ex:
const three = [1, 2, 3]
    // const doubled = three.map(function(item) {
    //     return item * 2;
    // });
const doubled = three.map((item) => item * 2)
console.log(doubled);


// ex:
let numbers = [1, 4, 9, 16]
    // let roots = numbers.map(function(num) {
    //     return Math.sqrt(num)
    // });

const roots = numbers.map(num => Math.sqrt(num));
console.log(roots);


// ex:
let kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];
let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
console.log(reformattedArray);


//filter
// ex:
const ints = [1, 2, 3, 4, 8];
// const evens = ints.filter(function(item) {
//     return item % 2 === 0;
// });

const evens = ints.filter(item => item % 2 === 0);
console.log(evens);



// ex:
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(words);
console.log(result);



// ex:
let fruits = ["apple", "banana", "graps", "mango", "orange"];

function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
}

console.log(filterItems(fruits, "ap")); //['apple','grapes']
console.log(filterItems(fruits, "an")); //['banana','mango', 'orange']


//reduce
// ex:
arr = [1, 2, 3];
// 1.
// const sum = arr.reduce(function(result, item, index, arr) {
// console.log(result, item, index, arr);
// return result + item;
// 2.
// const sum = arr.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);
// 3.
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);


// ex:
let flattend = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce(
    function(accumulator, currentValue) {
        return accumulator.concat(currentValue);
    }, []
)
console.log(flattend);


// ex:
let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}]
let allbooks = friends.reduce(function(accumulator, currentValue) {
    return [...accumulator, ...currentValue.books]
}, ['Alphabet']);
console.log(allbooks);


//some
// ex:
const ar = [1, 2, 3, -1, 4];
const hasNegativeNumbers = ar.some(function(item) {
    return item < 0;
});
console.log(hasNegativeNumbers);



// ex:
function isBiggerThan10(element) {
    return element > 10;
};
console.log([2, 5, 8, 1, 4].some(isBiggerThan10)); //false
console.log([12, 5, 8, 1, 4].some(isBiggerThan10)); //true


//every
const a = [1, 2, 3];
const hasPositiveNumbers = a.every(function(item) {
    return item > 0;
});
console.log(hasPositiveNumbers);



//find
// ex:
const objects = [{ id: "a" }, { id: "b" }, { id: "c" }];
const found = objects.find(function(item) {
    return item.id === "b";
});
console.log(found);

// ex:
const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];
console.log(
    inventory.find(function(fruit) {
        return fruit.name === "cherries";
    })
);


//find index
//ex:
const object2 = [{ id: "a" }, { id: "b" }, { id: "c" }];
const foundIndex = objects.findIndex(function(item) {
    return item.id === "e";
});
console.log(foundIndex);


// ex:
const fr = ["apple", "banana", "cantaLoupe", "blueberries", "grapefruit"];
const index = fr.findIndex(fruit => fruit === "blueberries");
console.log(index);
console.log(fruits[index]);


//sort
// ex:
const f = ["apple", "banana", "cantaLoupe", "blueberries", "grapefruit"];
f.sort();
console.log(f);
f.reverse();
console.log(f);

// ex:
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b) { return a - b }); //asc
console.log(points);
points.sort(function(a, b) { return b - a }); //desc
console.log(points);