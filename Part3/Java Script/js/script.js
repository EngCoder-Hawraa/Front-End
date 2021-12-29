//-JSON.parse convert str to object
//-JSON.stringify convert obj to str
var obj = [{
        "name": "hawraa",
        "age": 27,
        "tel": 12334556
    },
    {
        "name": "sura",
        "age": 26,
        "tel": 12334556
    }
];
var str = JSON.stringify(obj);
console.log(str);
var ob = JSON.parse(str);
console.log(ob);
document.getElementById("demo").innerHTML = str;


//Ajax
function loadData() {
    var xhttp = new XMLHttpRequest();
    // console.log(xhttp);
    xhttp.onreadystatechange = function() {
        // console.log(this.status);
        // console.log(this.readyState);
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            // console.log(typeof this.responseText);
            console.log(JSON.parse(this.responseText));
        }
    };
    // Asynchronous(true)ما انتظر  && synchronous (false) انتظر
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.send();
}
loadData();

//Objects
var car = {
    name: 'BMW',
    year: 2014,
};
//car.name || car("name")
//use object literals
console.log(car.name);
console.log(car["name"]);
console.log(car.year);

//use new
var book = new Object();
book.name = "Django";
book.author = "hawraa";
console.log(book);
console.log(book["name"]);


//Object.create
// 1)
var car2 = Object.create(car, {
    code: {
        value: '12334454'
    }
});
console.log(car2);
// 2)
var student = {}
var data = Object.create(student, {
    name: {
        value: "test"
    },
    s: {
        value: "yes"
    }
});
console.log(data);
// 3)
var data = {
    name: "test"
}
console.log(data);