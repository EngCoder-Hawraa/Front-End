// OOP
let car = {
    model: 2010,
    carName: 'BMW',

    printCarDetails: function() {
        console.log(this.model, this.carName);
    }
}
car.printCarDetails();


// 1) define object literal{}
let person = {
    name: "hawraa",
    sayHello: function() {
        console.log("hello");
    },
};

let person2 = {
    name: "arkan",
    sayHello: function() {
        console.log("hello");
    },
};
person.sayHello();
person2.sayHello();


// 2) factory function
function perso(name) {
    return {
        name,
        sayHello: function() {
            console.log("hello");
        },
    };
}
const per1 = perso('hawraa');
per1.sayHello();


// 3) constructor function
function p(name) {
    // var this ={};
    this.name = name;
    this.sayHello = function() {
            console.log("hello hawraa");
        }
        // return this;
}
const per = new p("hawraa");
console.log(per.constructor);


//delete
// ex:
let ca = {};
ca.name = "BMW";
let modal = "modal";
ca[modal] = 2020;
// delete ca["modal"];
// delete ca.name;
console.log(ca);
let newCar = Object.keys(ca);
for (let key in ca) {
    console.log(key, ca[key]);
}
// console.log(newCar, ca[newCar]);

if ('name' in ca) {
    console.log("yes");
} else {
    ('nae' in ca)
    console.log("no");
}


//Abstraction
// ex:
function Person(name) {
    this.name = name;
    let printPrice = function() {
        console.log("price is 200")
    }
    this.details = function() {
        console.log(`Person name is ${this.name}`)
        printPrice();
    }
}
let p1 = new Person('hawraa');
p1.details();



//Classical Inheritance
// ex:
function Person2(name) {
    this.name = name;

    this.details = function() {
        console.log(`Person name is ${this.name}`)
        printPrice();
    };
}

function Student(name, age) {
    this.age = age;
    Person2.call(this, name); //inheritance
}
let s1 = new Student('hawraa', 20);
console.log(s1);


//Prototype
// ex:
function Student2(name) {
    this.name = name;
}
let s2 = new Student2('hawraa');
console.log(s2);


//Prototypical Inheritance
let obj = {
    title: "JavaScript",
    test: function() {
        console.log("test code");
    },
};
console.log(obj);
console.log(obj.test);



//Descriptor
let a = {
    title: "JavaScript",
};
// console.log(Object.keys(a));

let parentObject = Object.getPrototypeOf(a);
let desc = Object.getOwnPropertyDescriptor(parentObject, 'toString');
console.log(desc);
Object.defineProperty(a, 'title', {
    configurable: false,
    // configurable: true,
    writable: true,
    enumerable: true,
});
delete a.title
console.log(a);
a.title = "CSS";
console.log(a);
console.log(Object.keys(a));


//Constructor Prototype
function Person3(name) {
    this.name = name;
    this.say = function() {
        console.log("say");
    };
}
Person3.prototype.say = function() {
    console.log("say");
};
let n = new Person3('hawraa');
console.log(n);
console.log(Person3.prototype);
console.log(n.__proto__);
console.log(Person3.prototype === n.__proto__);


//Instance or Own \ Prototype(member / property)
function Person4(name) {
    //Instance member \ Instance Property\Own member or Own Property)
    this.name = name;
    this.test = function() {
        console.log('test in Person4')
    }
}
// Prototype(member / property)
Person4.prototype.say = function() {
    this.test()
    console.log("say in Prototype Person4");
};
let f = new Person4('hawraa');
f.test();
f.say();


//prototype example
function Cat() {}
Cat.prototype.walk = function() {
    console.log("Cat Walk");
};

let cat = new Cat();
console.log(cat);
console.log(new Cat.prototype.constructor());

// prototype example
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Animal(name) {
    this.name = name;
}
Animal.prototype.walk = function() {
    console.log("Cat Walk");
};

function Cats(name) {
    Animal.call(this, name);
}
extend(Cats, Animal);

function Rabbit(name) {
    Animal.call(this, name);
}

let cats = new Cats("Cats");
console.log(cats);
console.log(cat.walk);
let r = new Rabbit("Rabbit");
console.log(r);



//extend function for inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Animals(name) {
    this.name = name;
}
Animals.prototype.walk = function() {
    console.log("Cat Walk");
};

function Ca(name) {
    Animals.call(this, name);
}
extend(Ca, Animal);

function Rabbits(name) {
    Animals.call(this, name);
}
extend(Rabbits, Animals);

let c = new Ca("Cats");
console.log(c);
console.log(c.walk);
let ra = new Rabbits("Rabbit");
console.log(ra);

//overiding
// اعادة كتابة الدالة نفسها
Rabbit.prototype.walk = function() {
    console.log("Rabbit Walk");
};
//polymorphism(many forms)
// اكثر من شكل للدالة الخاص بك بالدروس القادمة سيت شرحها



//inheritance problems(don't using inheritance hierarchy)
function mixin(obj, ...params) {
    Object.assign(obj, ...params);
}
let canWalk = {
    walk: function() {
        console.log("walk");
    },
};
let canSwim = {
    swim: function() {
        console.log("swim");
    },
};

function Dog(name) {
    this.name = name;
}

function Fish(name) {
    this.name = name;
}
// Object.assign(Dog.prototype, canWalk);
//استبدل بالتالي
mixin(Dog.prototype, canWalk);
// Object.assign(Fish.prototype, canSwim);
//استبدل بالتالي
mixin(Fish.prototype, canSwim);
const dog = new Dog("Dog");
console.log(dog);
const fish = new Fish("Fish");
console.log(fish);



//class and types of syntax
class Students {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.info = function() {
        //     console.log(`name: ${this.name} and age: ${this.age}`);
        // };
    }
    info() {
        console.log(`name: ${this.name} and age: ${this.age}`);
    };
}
const st = new Students('hawraa', 27)
console.log(st);
console.log(st.name, st.age);
st.info();
//اي كلاس في الجافا سكربت هي دالة عادية
console.log(typeof(Students));


//==== types of syntax===
//function declaration
// function hawraa() {}
//function expression
// const hawraa = function() {};
//class declaration
// class hawraa {}
//class expression
// const hawraa = class {}




//Static and instant Methods and properties
// class Math {
//     static abs() {

//     }
//     abs() {

//     }
// }
Math.abs();

class Stu {
    static number;
    static getNumber() {

        }
        // test = 1;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {

    }
};
//getNumber هذا ستاتك خاص فقط بالكلاس نفسه
Stu.getNumber();




//this Keyword
const k = function() {
    this.info = function() {
        console.log(this);
    };
};
const b = new k();
b.info(); //method call
const m = b.info;
m(); //function Call




//private properties
//setters and getters
class St {
    constructor(name, age) {
        let _name = name;
        let _age = age;

        this.setName = function(name) {
            _name = name;
        }
        this.setAge = function(age) {
            _age = age;
        };
        this.getName = function() {
            return _name
        }
        this.getAge = function() {
            return _age
        }
    }
};
const t = new St();
t.setName("hawraa");
t.setAge(27);

const newName = t.getName();
const newAge = t.getAge();
console.log(t, newName, newAge);



//inheritance and method overiding
class Pers {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    data() {
        console.log(this.name, this.age)
    }
};
class Stude extends Pers {
    constructor(name, age) {
        super(name, age);
    }
    data() {
        super.data();
        console.log("test");
    }
}
const stu = new Stude('hawraa', 27);
console.log(stu);




//private properties
// ex:
const _model = new WeakMap();
const _run = new WeakMap();


class Run {
    constructor(modal) {
        _model.set(this, modal);
        _run.set(this, () => {
            console.log("Car Run");
        });
    }
    carData() {
        _run.get(this)();
        // console.log(_model.get(this))
    }
}
const j = new Run("2021");
console.log(j.carData());



// ex:
const _modal = new WeakMap();


class Runs {
    constructor(mods) {
        _modal.set(this, mods);
    }
    get mods() {
        console.log(_modal.get(this));
    }
}
const d = new Runs("2021");
console.log(d.mods());