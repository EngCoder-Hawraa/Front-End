//Section 11 ===============================
// -Var, Let, Const
//[Scope, Hoisting, ReAssigned, ReDeclared]
// funtion scope,Hoisting,ReAssigned,ReDeclared
var x = 2;
console.log(window.x);
//Block scope,no Hoisting,ReAssigned,no ReDeclared
let y = 2;
console.log(window.y); //undefined
//Block scope,no Hoisting,no ReAssigned يكون ري اسايند في حالتين اما اري او اوبجكت,no ReDeclared
const z = 2;
console.log(window.z); //undefined


// Hoisting
// var
console.log(r); //undefined موجود لكن ليس به قيمة معينة
var r = 1;
console.log(r); //1

//let, نفس الشي const لل
// console.log(f); //error
let f = 1;
console.log(f); //1


//
var h = 1;

function hoist() {
    if (false) {
        var h = 2;
    }
    console.log(h);
}
hoist(); //undefined


//
let n = 1;

function hoists() {
    if (false) {
        let n = 2;
    }
    console.log(n);
}
hoists(); //1


//normal function
function test(x) {
    console.log(x);
}
test(5);
// -Arrow Function () => {}
var test = x => console.log(x);
test(5);

var test = (x, y) => console.log(x, y);
test(5, 7);

//Section 12 ===============================
// Default Params
function printParams(a, b = 1) {
    console.log(a, b);
}
printParams(3);

//
function printParam(x = 5, y = 2) {
    console.log(x, y);
}
printParam();


//
function callSomething(thing = something()) {
    console.log(thing);
    // return thing
}

let numberOfTimesCalled = 0;

function something() {
    numberOfTimesCalled += 1
    return numberOfTimesCalled
}
callSomething(); //1
callSomething(); //2
callSomething(5); //5
callSomething(); //3


//
function greet(name, greeting, message = greeting + ' ' + name) {
    return [name, greeting, message]
}
console.log(greet('David', 'Hi')); //['David','Hi','Hi David']
console.log(greet('David', 'Hi', 'test')); //['David', 'Hi','test']

//Spread Operator ...
// ex1:
const arr = [1, 2, 3];
//... يحول الاري الى سترنك عادي بدون فواصل
// console.log(...arr);

function add(x, y, z) {
    console.log(x + y + z);
}
add(...arr);


// ex2:
const obj = {
    x: 1,
    y: 2,
};
const obj2 = {
    ...obj,
    z: 3
}
console.log(obj2);


//Destruction
// 1.array
const data = [1, 2, 3];
const [n1, n2, n3] = data;
console.log(n1, n2, );
// 2.object
// ex1:
const data3 = {
    x: 2,
    z: 'hawraa',
};
const { x: name } = data3;
console.log(data3);
console.log(x);

//ex2:
//... spread operatorلازم يكون اخر واحد ال
let [name1, name2, ...rest] = ['first', 'second', 'test1', 'test2']
console.log(name1, name2, rest);


//Template String `test ${expression متغير او دالة او اي شي براحتك}`
// const template =
//     "<div>" +
//     "<span> This is Span " + 1 * 2 + "</span>" +
//     "<div> This is Div </div>" +
//     "</div>";
const d = 'test'
const template2 = `
        <div>
            <span> ${4*2} </span>
            <div> ${d} </div>
        </div>
                  `
console.log(template2);

//this == window
// ex1:
this.x = 2;
console.log(this.x);
console.log(window.x);

//ex2:
//In a function,this refers to the global object.
function testThis() {
    return this
}
console.log(testThis());

//In a method,this refers to the owner object.
var person = {
    firstName: 'Hawraa',
    lastName: 'Arkan',
    fullName: function() {
        console.log(this);
        return this.firstName + " " + this.lastName;
    }
}
console.log(person.fullName());


//In an event,this refers to the element that received the event.
//html موجود بملف ال 

//call
// ex1:
var ob = { a: 'custom' };
var a = 'Global';

function whatsThis() {
    return this.a;
}
console.log(whatsThis());
console.log(whatsThis.call(ob));
console.log(whatsThis.apply(ob));

//ex2:
var person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
};
// console.log(person1.fullName());//undefined
var person2 = {
    firstName: "Hawraa",
    lastName: "Arkan",
};
console.log(person1.fullName.call(person2));

// ex3:
const youtubeChannel = {
    title: 'Unique CoderZ',
    tags: ['js', 'html'],
    returnTitle() {
        console.log(this.title);
    },
    returnEveryTags() {
        var that = this;
        that.tags.forEach(function(tag) {
            console.log(tag);
            console.log(that); //window
        });
    },
};
youtubeChannel.returnTitle();
youtubeChannel.returnEveryTags();