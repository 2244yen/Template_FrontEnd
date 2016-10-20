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
    $("#slider4").responsiveSlides({
        auto: true,
        pager: false,
        nav: true,
        speed: 500,
        namespace: "centered-btns"
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
