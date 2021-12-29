//document [URL,title,doctype,head,all,body,images,links,forms]
console.dir(document); //contain (properties,methodes,events)
console.log(document.title);
document.title = "Document Object Model"
console.log(document.body);
console.log(document.head);
console.log(document.forms);
console.log(document.links);
console.log(document.documentElement); //html
console.log(document.domain);
console.log(document.URL);
console.log(document.all);
console.log(document.all[2]);
console.log(document.doctype);


//getElementsById,innerText,textContent,Styles
var x = document.getElementById("demo");
console.log(x);
console.log(x.innerText);
console.log(x.textContent);
x.innerText = "innerText"
x.textContent = "Text Content"


var heading = document.getElementById("demo");
heading.style.color = "white";
heading.style.fontSize = "100px";
heading.style.background = "black";


//getElementsByClassName
var cls = document.getElementsByClassName("desc");
console.log(cls);
console.log(cls[1].getAttribute("class"));
cls[1].setAttribute('title', 'hawraa');
console.log(cls[1]);

//style elements
// cls[0].style.color = "blue";
// cls[1].style.color = "yellow";
//الافضل نستخدم اللوب كما التالي
for (var i = 0; i <= cls.length; i++) {
    // cls[i].style.color = "orange";
}

//getElementsByTagName
var pr = document.getElementsByTagName("p");
console.log(pr);
//style elements
pr[2].style.color = "blue";
pr[1].textContent = "test";


//querySelector
//var s = document.querySelector("[name=value]");
//var s = document.querySelector("h1");
var s = document.querySelector("#demo");
console.log(s.innerText);
s.innerText = "hello querySelector "

//querySelectorAll
var pr = document.querySelectorAll("p");
console.log(pr);

//style elements
pr[0].style.color = "green";

//traversing
//parentNode ParentElement childNoes children firstChild firstElementChild lastChild lastElementChild
//nextSibling nextElementSibling previous previousElement
var input1 = document.querySelector("input[type=text]");
console.log(input1);

var input1 = document.querySelector("input[type=submit]");
input1.value = "حفظ"
console.log(input1);
//parentNode
console.log(input1.parentNode);
// ParentElement
console.log(input1.parentElement);
//childNoes 
var form = document.querySelector("form");
console.log(form.childNodes);
// children
var form = document.querySelector("form");
console.log(form.children);
// firstChild
var form = document.querySelector("form");
console.log(form.firstChild);
// firstElementChild 
var form = document.querySelector("form");
console.log(form.firstElementChild);
// lastChild 
var form = document.querySelector("form");
console.log(form.lastChild);
// lastElementChild
var form = document.querySelector("form");
console.log(form.lastElementChild);
//nextSibling
var form = document.querySelector("form");
console.log(form.nextSibling);
//nextElementSibling 
var form = document.querySelector("form");
console.log(form.nextElementSibling);
//previous 
var form = document.querySelector("form");
console.log(form.previousSibling);
//previousElement
var form = document.querySelector("form");
console.log(form.previousElementSibling);



//Creating
//CreateElement createTextNode addclass addId addAttribute append insert

// CreateElement
var div = document.createElement("div");
// console.dir(div);
div.id = "myId";
console.log(div);
//OR
div.setAttribute = ('id', 'myId');
//
div.className = "myClass";
console.log(div);
//OR
div.setAttribute = ('class', 'myclass');

// createTextNode
var mydiv = document.createElement("div");
var text = document.createTextNode("Hello Dom JS");
console.log(mydiv);
mydiv.appendChild(text);
// addclass 
// addId 
// addAttribute 
// append 
// insert
var ct = document.querySelector(".container");
var _span = document.querySelector("#mySpan");
ct.insertBefore(mydiv, _span);
console.log(mydiv);


//addEventListener, DomEvent ,click,dblclick,mousedown,mouseup
//mouseenter,mouseleave,mouseover,mouseout,mousemove,keydown
//keyup,keypress,focus,blur,cut,paste,input,change,submit


function testCode() {
    console.log("JS Script");
}

//addEventListener
var btn = document.getElementById('btn');
// btn.onclick = testCode;
btn.addEventListener('click', function() {
    console.log("hawraa");
});
//click
btn.addEventListener('click', testCode);
//dblclick
btn.addEventListener('dblclick', testCode);


//
function testCode(event) {
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.target.textContent);
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event.offsetX);
    console.log(event.offsetY);
    console.log(event.type);
}
var btn = document.getElementById('btn');
btn.addEventListener('click', testCode);

// mousedown
var div = document.querySelector('.demo');
div.addEventListener('mousedown', testCode);
// mouseup
div.addEventListener('mouseup', testCode);
//mouseenter
div.addEventListener('mouseenter', testCode);
//mouseover
div.addEventListener('mouseover', testCode);
//mouseleave
div.addEventListener('mouseleave', testCode);
//mouseout
div.addEventListener('mouseout', testCode);
//mousemove
div.addEventListener('mousemove', testCode);
//keydown
var input = document.querySelector('input');
input.addEventListener('keydown', inputFunction);

function inputFunction(e) {
    console.log(e.type);
}
//keyup
input.addEventListener('keyup', inputFunction);

function inputFunction(e) {
    console.log(e.type);
}
//keypress
input.addEventListener('keypress', inputFunction);

function inputFunction(e) {
    console.log(e.type);
}
//focus
input.addEventListener('focus', inputFunction);

function inputFunction(e) {
    console.log(e.type);
}
//blur
input.addEventListener('blur', inputFunction);

function inputFunction(e) {
    console.log(e.type);
}
//cut
input.addEventListener('cut', inputFunction);

function inputFunction(e) {
    console.log(e.type);
}
//paste
input.addEventListener('paste', inputFunction);

function inputFunction(e) {
    console.log(e.type);
}
//input
input.addEventListener('input', inputFunction);

function inputFunction(e) {
    console.log(e.type);
}
//change
var select = document.querySelector('#select');
select.addEventListener('change', SelectChange);

function SelectChange(e) {
    console.log(e.target.value);
}
//submit
var form = document.querySelector('form');
form.addEventListener('submit', inputFun);

function inputFun(e) {
    e.preventDefault();
    console.log(e.type);
}

function inputFun(e) {
    e.preventDefault();
    console.log(e.target);
}