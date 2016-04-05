(function ($) {

	//Initiat WOW JS
	wow = new WOW(
	{
		animateClass: 'animated',
		offset: 100
	});
	wow.init();

	new gnMenu( document.getElementById( 'gn-menu' ) );


		$('a.scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-75976627-1', 'auto');
ga('send', 'pageview');