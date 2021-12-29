// innerWidth
console.log(window.innerWidth);
// innerHeight
console.log(window.innerHeight);
// confirm
var x = window.confirm("Do you want to delete this item ?");
// console.log(x);
if (x) {

} else {

}
// prompt
var x = window.prompt("title");
console.log(x);
if (x) {

} else {

}

// open
// close
// window.open("https://www.w3schools.com", "", "width=100,height=100");
let popup;

function openWindow() {
    popup = window.open("https://www.w3schools.com", "", "width=300,height=300");
}

function closeWindow() {
    popup.close();
}
document.querySelector('.open').addEventListener('click', openWindow);
document.querySelector('.close').addEventListener('click', closeWindow);

// -screen.width
console.log(screen.width);

// -availWidth
console.log(screen.availWidth);

// -screen.height
console.log(screen.height);

// -availHeight
console.log(screen.availHeight);


// location
console.log(location);

// console.log(location.assign("https://www.w3schools.com"));

// console.log(location.reload());
console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);

// history.back()
console.log(history.back);
// history.forward()
console.log(history.forward);


// navigator.appName,navigator.appCodeName,navigator.platform,navigator.appVersion,navigator.language,navigator.onLine
console.log(navigator.appName);
console.log(navigator.appCodeName);
console.log(navigator.platform);
console.log(navigator.appVersion);
console.log(navigator.language);
console.log(navigator.onLine);


//Timing(setTimeout ,setInterval)
// setTimeout
var time = setTimeout(function() {
    alert("this is error")
}, 3000);
// clearInterval
clearTimeout(time);

// setInterval
var time = setInterval(function() {
    console.log("this is success");
}, 2000);

// clearInterval
clearInterval(time);