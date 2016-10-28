$(function () {
	var nav = $(".moesia-nav");
	$(window).scroll(function() {
		var height = $(".header").height();
		if($(this).scrollTop() >= height){
			nav.addClass('nav-fixed');
		}
		else{
   			nav.removeClass('nav-fixed');
		}
	});
    $('.parallax').scrolly({bgParallax: true});
    new WOW().init();
    $(".center").slick({
    	dots: false,
    	infinite: false,
    	slidesToShow: 4,
    	slidesToScroll: 1,
    	autoplay: true,
    	autoplaySpeed: 1000,
    	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    	nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    	responsive: [
	    	{
	    		breakpoint: 960,
	    		settings: {
	    			slidesToShow: 3,
	    			slidesToScroll: 1
	    		}
	    	},
	    	{
	    		breakpoint: 768,
	    		settings: {
	    			slidesToShow: 2,
	    			slidesToScroll: 1
	    		}
	    	},
	    	{
	    		breakpoint: 480,
	    		settings: {
	    			slidesToShow: 2,
	    			slidesToScroll: 1
	    		}
	    	},
	    	{
	    		breakpoint: 320,
	    		settings: {
	    			slidesToShow: 2,
	    			slidesToScroll: 1
	    		}
	    	}
    	]
    });
    
    $("span.number").counterUp({
    	delay: 10,
    	time: 1000
    });
});
