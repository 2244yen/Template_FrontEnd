
$(document).ready(function() {
	 
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
		itemsMobile:[479,1],
	});
	var n = $(".link").length;
	$("#tasty-0").removeClass("myHide");
});

