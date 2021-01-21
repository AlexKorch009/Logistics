// JavaScript Document
$(document).on('click', '.menu-burger, .nav-close', function() {
	if ($(".nav").hasClass('nav--active')) {
		$(".nav").removeClass('nav--active');
	} else {
		$(".nav").addClass('nav--active');
	}
});

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  autoplay:true,
  autoplayTimeout:7000,
  autoplayHoverPause:true,
	responsive: 
  {
		0: {
      items: 1
    },
		992: {
      items: 2
    },
		1365: {
      items: 3
    },
    1400: {
      items: 4
    }
	}
});

$('#videolink').magnificPopup({
	type: 'inline',
	midClick: true
});