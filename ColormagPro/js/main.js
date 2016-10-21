$(function () {
    /**/
    var nav = $(".color-nav");
    $(window).scroll(function() {
        if($(this).scrollTop() >= 161){
            nav.addClass('nav-fixed');
        }
        else{
            nav.removeClass('nav-fixed');
        }
    });

    $('.travel-slider').bxSlider({
        ticker: true,
        useCSS: false,
        tickerHover: true,
        speed: 20000,
        slideWidth: 200,
        minSlides: 3,
        maxSlides: 5,
        slideMargin: 10,
        pager: false,
    });

    $('.bxslider').bxSlider({
        auto: true,
        pager: false,
        prevSelector: '#left-slider',
        nextSelector: '#right-slider',
        prevText: '<i class="fa fa-angle-left left-slider" aria-hidden="true"></i>',
        nextText: '<i class="fa fa-angle-right right-slider" aria-hidden="true"></i>'
    });

    var d = new Date();
    var day = d.getDay();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var dayArray = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var monthArray = ["January","February","March","April","May","June","July","August","September",
    "October","November", "December"]
    var str = dayArray[day] + ", "+ monthArray[month] + " " +  date +  ", " + year;
    $("#date-now").html(str); 

    $('#sticker').vTicker();
    $().UItoTop({ easingType: 'easeOutQuart' });
});
