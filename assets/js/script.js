$(function () {
    "use strict"

	//  Fixed navbar
	$(window).on("scroll", function () {
		let scrolling = $(this).scrollTop();
		let headerHeight = $('header').innerHeight();

		if (scrolling > headerHeight) {
			$(".navbar").addClass("navbar--fixed");
		} else {
			$(".navbar").removeClass("navbar--fixed");
		}
	});

	// Scroll top button
	$(".scroll-top").on("click", function () {
		$("html,body").animate(
			{
				scrollTop: 0,
			},50,
		);
	});
	$(window).on("scroll", function () {
		let scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	// Closes responsive menu when a scroll link is clicked
	$(".nav-link").on("click", function () {
		$(".navbar-collapse").collapse("hide");
	});

	// Bootstrap form validation
	window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
		  form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
			  event.preventDefault();
			  event.stopPropagation();
			}
			form.classList.add('was-validated');
		  }, false);
		});
	}, false);

	// jQuery(document).ready(function ($) {
	// 	$('.counter').counterUp({
	// 		delay: 10,
	// 		time: 1000
	// 	});
	// });

    // //  Banner slider
    // $(".banner__slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     speed: 500,
    //     arrows: true,
    //     prevArrow:'<i class="fas fa-chevron-left slick__arrows slick__arrows--left"></i>',
    //     nextArrow:'<i class="fas fa-chevron-right slick__arrows slick__arrows--right"></i>',
    //     dots: false,
    //     pauseOnHover: false,
    //     pauseOnFocus: false,
    //     infinite: true,
    // });

    // // veno box
    // $('.venobox').venobox({
    //     bgcolor    : '#ffffff',
    //     spinner    : 'three-bounce',
    //     border     : '10px',
    //     frameheight: '82vh',
    // });

});