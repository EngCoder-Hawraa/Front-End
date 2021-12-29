//Simple Cart App
// =====================
//querySelectorAll......array تجيب الداتا كلها و تخليها ب
var allitems = document.querySelectorAll('.list li');
// console.log(allitems);
// var content = document.getElementById('content');
var content = document.querySelector('#content');
var btn = document.querySelector('#addToCart');
var totalPrice = 0;
allitems.forEach(function(item) {
    // console.log(item);
    item.onclick = function() {
        //parseInt تحول السترنك الى رقم
        totalPrice += parseInt(item.getAttribute('price'));
        // content.innerHTML = item.textContent;
        content.innerHTML += item.textContent + ' ';
        if (content.innerHTML != "") {
            btn.style.display = "block";
        }
    };
});
btn.onclick = function() {
    console.log(totalPrice);
};

//String Methods [split,slice,toUpperCase,toLowerCase,trim,indexOf]
// رابط يفيدني بهذا الموضوع https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
var str = "hello world js";
//يحول السترنك الى اري و يقسم النص الى اجزاء
var res = str.split(" ")
console.log(res);
console.log(res[0]);

// split
var str1 = "www.facebook.com?id=20?test=test";
//يحول السترنك الى اري و يقسم النص الى اجزاء حسب الشي الي احدده
var res1 = str1.split("?")
console.log(res1);
console.log(res1[1]);


var res1 = str1.split("=")
console.log(res1);
console.log(res1[1]);

//slice
var str2 = "js code"
var res = str2.slice(0, 2);
console.log(res);

// toUpperCase and toLowerCase
var str2 = "js code";
var res = str2.toUpperCase();
console.log(res);
var res = str2.toLowerCase();
console.log(res);

//trim
var str2 = "    js code     ";
//  تحذف المسافات قبل و بعد السترنك يفيدني اكثر شي بالتسجيل و تسجيل الدخول يحذف المسافات الي يدخلها المستخدم
var res = str2.trim();
console.log(res);


// indexOf
var str2 = "js code";
var res = str2.indexOf("code");
console.log(res);
var res = str2.indexOf("test");
console.log(res);



//Array Methods [join,pop,push,shift,unshift,length,concat,slice]
var array = ['hawraa', 'arkan', 'jawad'];
//join
var res = array.join("/");
console.log(res)

//pop تشيل اخر عنصر بالاري
var array = ['hawraa', 'arkan', 'jawad'];
var res = array.pop();
console.log(array, res)

// push  تضيف اخر اري 
var array = ['hawraa', 'arkan', 'jawad'];
var res = array.push("kadhim");
console.log(array, res)

//shift بس تشيل من اول اري pop نفس  and unshift تضيف في اول اري
var array = ['hawraa', 'arkan', 'jawad'];
var res = array.shift();
console.log(array, res)
var res = array.unshift("hawraa");
console.log(array, res)


//length
var array = ['hawraa', 'arkan', 'jawad'];
var res = array.length;
console.log(res)

//concat
var array = ['hawraa', 'arkan', 'jawad'];
var c = ["test", "code"];
var res = array.concat(c);
console.log(res)


//slice
var array = ['hawraa', 'arkan', 'jawad'];
var res = array.slice(0, 2);
console.log(res)

//Math [Math.round,Math.pow(x,y),Math.sqrt(x),Math.ceil(x),Math.floor(x),Math.random()]
//Math.round
console.log(Math.round(2.5));
// Math.pow(x,y)
console.log(Math.pow(2, 4));
//Math.sqrt(x)
console.log(Math.sqrt(4));
//Math.ceil(x)
console.log(Math.ceil(2.5));
//Math.floor(x)
console.log(Math.floor(2.5));
//Math.random()
console.log(Math.random());