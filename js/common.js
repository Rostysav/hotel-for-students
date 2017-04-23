$(document).ready(function(){


			/*page scroll 2 id*/


	$("#myMenu a").mPageScroll2id({
		highlightSelector:"#myMenu a"
	});

	$(".introducing-item a").mPageScroll2id({
		highlightSelector:".introducing-item a"
	});

	/*dropdown*/

	$('.dropdown-toggle').dropdown()

	$('.carousel').carousel({

	})

	/*nav btn*/

	$('.nav-btn').click(function(){
		$('.navigation-wrap').slideToggle();
		$('.header-top').toggleClass('background-sm');
	});

	/*search form*/

	$('.search-btn').click(function(){
		$('.search-form').slideToggle();
	})
	$('.search-close').click(function(){
		$('.search-form').slideToggle();
	})
})

