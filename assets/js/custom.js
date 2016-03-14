(function ($) {

	//Initiat WOW JS
	wow = new WOW(
	{
		animateClass: 'animated',
		offset: 100
	});
	wow.init();

	new gnMenu( document.getElementById( 'gn-menu' ) );


	// //jQuery for page scrolling feature - requires jQuery Easing plugin
	// $(function() {
	// 	$('.gn-menu li a').bind('click', function(event) {
	// 		var $anchor = $(this);
	// 		$('html, body').stop().animate({
	// 			scrollTop: $($anchor.attr('href')).offset().top
	// 		}, 1500, 'easeInOutExpo');
	// 		event.preventDefault();
	// 	});
	// 	$('a.scroll').bind('click', function(event) {
	// 		var $anchor = $(this);
	// 		$('html, body').stop().animate({
	// 			scrollTop: $($anchor.attr('href')).offset().top
	// 		}, 1500, 'easeInOutExpo');
	// 		event.preventDefault();
	// 	});
	// });

	cbpBGSlideshow.init();


  function stripTrailingSlash(str) {
    if(str.substr(-1) == '/') {
      return str.substr(0, str.length - 1);
    }
    return str;
  }

  var url = window.location.pathname;
  var activePage = stripTrailingSlash(url);

  $('.side-menu li a, .gn-menu li a').each(function(){
    var currentPage = stripTrailingSlash($(this).attr('href'));

    if (activePage == currentPage) {
      $(this).parent().addClass('active');
    }
	  });



})(jQuery);

$(document).ready(function(){

	// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		};

	//$('.gn-icon-menu').tooltip({delay: 50});

// var tocHeight = $('.tabs-wrapper .side-menu').length ? $('.tabs-wrapper .side-menu').height() : 100;
// var bottomOffset = $('#contact').offset().top -  tocHeight;

//       if ($('nav').length) {
//         $('.tabs-wrapper').pushpin({
//           top: $('nav').height(),
//           bottom: bottomOffset
//         });
//       }
//       else {
//         $('.tabs-wrapper').pushpin({
//           top: 0,
//           bottom: bottomOffset
//         });
//       }

});