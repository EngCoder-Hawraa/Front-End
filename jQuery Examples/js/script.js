$(document).ready(function() {
    // ==========//Header Style App
    // $("header li").on('click', function() {
    //     $(this).addClass('active').siblings().removeClass('active');
    // })
    $("header li a").on('click', function() {
        // console.log($(this).text());
        $(this).addClass('active').parent().siblings().find("a").removeClass('active');
    })


    // ===============//Window App
    var homeOffset = $(".home").offset().top;
    // console.log(homeOffset);
    $(window).scroll(function() {
        // console.log($(window).scrollTop());
        var windowScroll = $(this).scrollTop();
        // ex1
        // if (windowScroll >= homeOffset) {
        //     $(".home").css('background', 'red');
        // } else {
        //     $(".home").css('background', 'coral');
        // }


        // ex2
        if (windowScroll > 200) {
            $("header").addClass('changeHeader')
        } else {
            $("header").removeClass('changeHeader')
        }
    })



    // ==============//Dynamic Taps
    // $("header a").click(function() {
    //     // console.log($(this).attr('id'));
    //     var myId = $(this).attr('id');
    //     // console.log('.' + myId);
    //     $('body section').hide();
    //     $('.' + myId).fadeIn();
    // })


    //=============//Filter Images
    // https://www.kunkalabs.com/mixitup/   موقع مهم لهذا الموضوع mixitup jquery plugin
    $(".tabs button").click(function() {
        // console.log($(this).attr('class'));
        var myClass = $(this).attr('class');
        if (myClass == 'all') $(".images img").fadeIn();
        else {
            $(".images img").hide();
            $(".images ." + myClass).fadeIn(); //.images .image(1,2,3)
        }
    })

    //===========//Smooth Scroll Header App
    var headerHeight = $("header").height()
    $("header a").click(function() {
        var id = $(this).attr('id');
        $("body,html").animate({
            scrollTop: $("." + id).offset().top - headerHeight
        })
    })

    //===========//Scroll to Top App
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $(".scrollTop").show()
        } else {
            $(".scrollTop").hide()
        }
    })
    $(".scrollTop").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
    })


    //==========//Calculate / countDown Characters of TextArea App
    $("textarea").keyup(function(e) {
        console.log(e.target.value.length);
        if (e.target.value.length >= 100) {
            e.target.value = e.target.value.substr(0, 100);
        }
    })
}); //End jQuery