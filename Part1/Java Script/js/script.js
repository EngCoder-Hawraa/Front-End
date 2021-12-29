// 1- OutPut
// 2- Statement (statement اي سطر من الكود هي )
// 3. syntax هي طريقة كتابة الكود
// 4.comments(//short or /*long*/)

//hello world  و اكتب html روح لصفحة ال
document.write("Hello World")

document.getElementById("result").innerHTML = "Hello Hawraa"

document.getElementById("btn").onclick = function() {
    document.getElementById("result").innerHTML = "Hello Java"
}

//الكاها مطبوعةيفيدني في تتبع الاخطاء بالكود ومعرفته  inpect=>console يطبعها في ال
console.log("HI EveryOne");
// لكن لو وضعنا الرقم داخل كوت يعتبرها كنص
console.log(1 + 2);



//فقط test لا يفضل استخدامه لانه كأنه يعطل الصفحة ويفضل استخدامه بال
// alert('This is error');


//5-Variables
var num1 = 5;
var num2 = 5 + 6;
console.log(num1);
console.log(num2);

//6-Data Types
// numbers (any number)
var num = 8;
console.log(num);
// typeof لمعرفة نوع المتغير
console.log(typeof(num));
//string
var vars = "Hello";
console.log(typeof(vars));
// Booleans
var bool = false;
console.log(typeof(bool));
// Array داتا مترتبة
var arr = [1, 2, 3, 4, 'hawraa', true]
console.log(typeof(arr));
console.log(arr[3]);
console.log(arr[5]);
// object داتا غير مترتبة
var person = {
    name: 'hawraa',
    age: '27',
}
console.log(person.name);
console.log(person['name']);
console.log(typeof(person));

//Undefined
var x;
console.log(x);
console.log(typeof(x));

// Null
var w = null;
console.log(typeof(w));
// + تحول الترو الى واحد و الفولص الى اثنين
console.log(+true);
console.log(+false);


// Arithmetic Operator + - * / % ++ -- ** +-
var a = 2,
    b = 6;
console.log(a + b);
a = b;
console.log(a);
console.log(b);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
var A = 8;
// post increment اطبع وثم ضيف واحد
A++; //9
//pre increment ضيف واحد و ثم اطبع
++A; //10
console.log(A++); //11
console.log(++A); //12
//post decrement 
console.log(A--);
//pre decrement
console.log(--A);
// الاس
a = a ** 2;
console.log(a);
//Uniry Operator
var y = +8;
console.log(y);
var z = -8;
console.log(z);
console.log(+3);
console.log(-3);
//convert any data from not number to number
console.log(+"3"); //3
console.log(+true); //1
console.log(+false); //0


// Asignment Operator = += *= -= /= %=
var t = 2;
t += 2; //t=t+2
t += 1; //t=t+1,t++
t -= 2; //t=t-2
t **= 5; //t=t**5
t /= 5; //t=t/5
t %= 5; //t=t%5


// If condition
// Logical Operator && || !
var s = 6,
    f = 7;
if (s == 6 && f == 6) {
    console.log("yes")
} else {
    console.log("no")
}
if (s == 6 || f == 6) {
    console.log("yes");
} else {
    console.log("no");
}
if (!(s == 7)) {
    console.log("yes");
} else {
    console.log("no");
}
if (s == 5) {
    console.log("yes");
} else if (s == 7) {
    console.log("no");
} else {
    console.log("not anyone");
}

//Switch
switch (s) {
    case 6:
        console.log("Yes");
        break
    case 7:
        console.log("no");
        break
    default:
        console.log("default");
}

//Function
//fuction definition
function fun() {
    var a = 2,
        b = 6;
    console.log(a + b);
}
//trigger function call function
fun();

function hawraa(h, a) { //parameters
    console.log(h + a);
}
//trigger function call function
hawraa(4, 5); //arguments


function returnData() { //anyname for function
    var d = 5;
    return d;
}
var data = returnData();
console.log(data)


//Function Expressions
var fn = function() {
    console.log('Expression Function')
}
fn();


var fn2 = function test() {
    console.log('Expression Function')
}
fn2();

//IIFE
(function code() {
    console.log("code");
})();

//Events
/* click,dblclick,mousemove,mouseenter,mouseleave */
document.getElementById('btns').onclick = function() {
    document.getElementById("demo").innerHTML = "onclick"
}
document.getElementById('btns').ondblclick = function() {
    document.getElementById("demo").innerHTML = "ondoubleclick"
}
var x = 1;
document.getElementById('btns').onmousemove = function() {
    document.getElementById("demo").innerHTML = "onmousemove";
}
document.getElementById('btns').onmouseenter = function() {
    document.getElementById("demo").innerHTML = "onmouseenter"
}
document.getElementById('btns').onmouseleave = function() {
    document.getElementById("demo").innerHTML = "onmouseleave"
}


//تحسين للكود الفوك
var btn = document.getElementById("btn2");
var div = document.getElementById("demo");
// console.log(btn);
// console.log(div);
// btn.onmouseleave = function() {
//     div.innerHTML = "code";
// }

function action() {
    div.innerHTML = "code for iraq";
}
btn.onclick = action;

// Keyboard events.....keypress حذفت, keydown, keyup
var keyup = document.getElementById("input");
keyup.onkeyup = function() {
    console.log("KeyUp");
};
// طريقة اولى
var keydown = document.getElementById("input");
keydown.onkeydown = function() {
    console.log("KeyDown");
};

// طريقة ثانية
keydown.addEventListener('keydown', function() {
    console.log("KeyDown");
});
// طريقة ثالثة
function keyboardUp() {
    console.log("KeyUp");
}
keyup.addEventListener("keyup", keyboardUp);


//loaded
window.onload = function() {
    alert("Yes Loaded")
}

// Loop
/* 
-initialization
-condition
-update
*/
for (var i = 1; i <= 5; i++) {
    console.log(i);
}

var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
var x = 1;
do {
    console.log(x);
    x++;
} while (x <= 5);