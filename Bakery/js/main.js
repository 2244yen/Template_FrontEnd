
$(document).ready(function() {

	//Sort random function
	function random(owlSelector){
	    owlSelector.children().sort(function(){
	        return Math.round(Math.random()) - 0.5;
	    }).each(function(){
	      $(this).appendTo(owlSelector);
	    });
	}
	 
	$("#owl-bakery").owlCarousel({
	    nav: true,
	    dots: false,
	    items:3,
	    navText: [
	      "<i class='fa fa-chevron-circle-left bakery-chevron-left' aria-hidden='true'></i>",
	      "<i class='fa fa-chevron-circle-right bakery-chevron-right' aria-hidden='true'></i>"
	    ],
	 	responsive: true, 
	 	itemsDesktop:[1199,3], 
	 	itemsDesktopSmall:[960,2],
	 	itemsTablet:[768,2],  
		itemsMobile:[479,1]
	});
	$(".link").click(function(){
		var img = $(this).children().attr('src');
		img =  img.slice(7);
		$(".main-img").attr({'src': 'images/big-'+ img});
	});

});

