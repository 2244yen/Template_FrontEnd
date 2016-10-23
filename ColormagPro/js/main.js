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

    $("#sport-slider").bxSlider({

         buildPager: function(slideIndex){
            switch(slideIndex){
                case 0:
                return '<img src="images/sports/thumbs/pommel-horse-150x150.jpg">';
                case 1:
                return '<img src="images/sports/thumbs/utah-150x150.jpg">';
                case 2:
                return '<img src="images/sports/thumbs/the-ball-150x150.jpg">';
                case 3:
                return '<img src="images/sports/thumbs/triumph-rocket-150x150.jpg">';
                case 4: 
                return '<img src="images/sports/thumbs/runner-150x150.jpg">';
            }
        }
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
    $('#breaking-news').newsTicker({
        max_rows: 3,
        row_height: 100,
        duration: 4000,
        autostart: 1,
        prevButton: $("#btn-prev"),
        nextButton: $("#btn-next"),
    });
});
