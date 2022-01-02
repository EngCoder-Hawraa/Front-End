//Syntax
// $ ال==  jQueryهي نفسها ال
// الطريقة الثانية
// $(function() {
//Code
// });

// 1.الطريقة الاولى هي الافضل
// $(document).ready(function() {
//Code
// $("button").click(function() {
//[hide, show,toggle ,fade(fadeIn,fadeOut,fadeToggle), slide(slideDown,slideUp,slideToggle), animate, stop]
// $("section").hide(1000);
// $("section").show(1000);
// $("section").toggle(1000);
// $("section").fadeIn(1000);
// $("section").fadeOut(1000);
// $("section").fadeToggle(1000);
// $("section").slideDown(1000);
// $("section").slideUp(1000);
// $("section").slideToggle(1000);
// $("section").animate({ left: '100px', width: "400px" });
// $("section").slideToggle(1000);
// })

// }); //Don't Write outside

// ==============
// $(document).ready(function() {
//Code
// $(".start").click(function() {
//     $("section").slideToggle(3000);
// });
// $(".stop").click(function() {
//     $("section").stop();
// });
// }); //Don't Write outside


// ==============//callback
// $(document).ready(function() {
//     //Code
//     $(".start").click(function() {
//         $("section").hide(1000, function() {
//             console.log("Hide is end");
//         });
//     });
// }); //Don't Write outside




// ==============//chaining
// $(document).ready(function() {
//     //Code
//     $(".start").click(function() {
//         $("section").hide(1000).show(1000).slideUp(1000);
//     });
// }); //Don't Write outside



// =============//Dom Manipulation (Get, Set)
// $(document).ready(function() {
//     //Code
//     $(".start").click(function() {
//         $("section").hide(1000).show(1000).slideUp(1000);
//     });

//text
// $("#demo").text(); //get text
// $("#demo").text("This is New Text"); //set new text

//     //html
//     $("#demo").html(); //get
//     $("#demo").html("<h1>HI</h1>"); //set

//     //val
//     console.log($("input").val()); //get
//     $("input").val("arkan"); //set

//     //attr
//     console.log($("div").attr("id")); //get
//     $("div").attr("id", "test"); //set

// }); //Don't Write outside



// ===============================
//-add [append, prepend, after, before]  -remove [remove, empty]
// $(function() {
//     //Code
//     $(".test").append("Bye"); // بعده
//     $(".test").prepend("Hiiiiii"); //قبله
//     $(".test").after("after");
//     $(".test").before("before");
//     // $(".test").remove(""); //يحذف محتوى التاك
//     // $(".test").empty("");
// }); //Don't Write outside



//css [addClass, removeClass, toggleClass, .css]
// $(function() {
//     //Code
//     // $(".test").addClass("test");
//     // $(".test").removeClass("test");
//     $(".toggleClass").click(function() {
//         $(".test").toggleClass("test");
//     });
//     $(".toggleClass").click(function() {
//         $(".test").css({
//             fontSize: '20px',
//             color: 'green',
//         });
//     });
// }); //Don't Write outside




// ============================
// $(function() {
//Code
//dimension [width, innerWidth, outerWidth(true)]
// console.log($(".dimension").width()); //width that you give
// console.log($(".dimension").innerWidth()); //width that you give with padding
// console.log($(".dimension").outerWidth()); //width that you give with padding and borders
// console.log($(".dimension").outerWidth(true)); //width that you give with padding and borders and margin

//dimension [height, innerHeight, outerHeight(true)]
// console.log($(".dimension").height()); //height that you give
// console.log($(".dimension").innerHeight()); //height that you give with padding
// console.log($(".dimension").outerHeight()); //height that you give with padding and borders
// console.log($(".dimension").outerHeight(true)); //height that you give with padding and borders and margin

// }); //Don't Write outside




// ============================
// $(function() {
//Ancestors [parent, parents, parentsUntil]
//Code
// $("span").parent().css({
//     border: '2px solid red'
// });
// $("li").parents().css({
//     border: '2px solid blue'
// });
// $("span").parents("div").css({
//     border: '2px solid orange'
// });
// $("span").parentsUntil("ul").css({
//     border: '2px solid green'
// });

//Descendants [children, find]
// $("section").children().css({
//     border: '2px solid green'
// });
// $("section").children("ul").css({
//     border: '2px solid orange'
// });
// $("section").find("div").css({
//     border: '2px solid red'
// });

//Siblings [siblings, next, nextAll,nextUntil, prev, prevAll,prevUntil]
// $(".siblings").siblings().css({
//     border: '2px solid red'
// });
// $(".siblings").next().css({
//     border: '2px solid green'
// });
// $(".siblings").nextAll().css({
//     border: '2px solid yellow'
// });
// $(".siblings").nextUntil().css({
//     border: '2px solid yellow'
// });
// $(".div").prev().css({
//     border: '2px solid blue'
// });
// $(".div").prevAll().css({
//     border: '2px solid red'
// });
// $(".div").prevUntil("li").css({
//     border: '2px solid red'
// });
//filter [first, last, eq, filter, not]
//     $(".siblings").first().css({
//         border: '2px solid yellow'
//     });
//     $(".siblings").last().css({
//         border: '2px solid red'
//     });
//     $(".siblings").eq(2).css({
//         border: '2px solid black'
//     });
//     $(".siblings").filter('.test').css({
//         border: '2px solid green'
//     });
//     $(".siblings").not('.test').css({
//         border: '2px solid blue'
//     });
// }); //Don't Write outside



//jQuery Ajax
$(function() {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
            format: "json",
        },
        error: function() {
            console.log("error");
            // $("#info").html("<p>An error has occured</p>");
        },
        sucess: function(data) {
            console.log("data", data);
            // var $title = $("<h1>").text(data.talks[0].talk_title);
            // var $description = $("<p>").text(data.talks[0].talk_description);
            // $("#info").append($title).append($description);
        },
    });
});