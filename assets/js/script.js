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
			},50
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
		$(".navbar-collapse").collapse("hide")
	});

	// Banner image parallax
	$(".banner").on("mousemove", function (e){
		let xPosition = (($(window).innerHeight() / 2) - e.pageX) / 50;
		let yPosition = (($(window).innerHeight() / 2) - e.pageY) / 50;
		$("#circle-left--top, #circle-right--top, #rect-sm").css(
			"transform", `translateX(${xPosition}px) translateY(${yPosition}px)`
		);
		$("#success, #circle-left--bottom--sm").css(
			"transform", `translateX(${xPosition * -1}px) translateY(${yPosition *-1}px)`
		);
		$("#tab-screen").css(
			"transform", `translateX(${xPosition * -0.5}px) translateY(${yPosition * -0.8}px)`
		);
		$("#rect-lg").css(
			"transform", `translateX(${xPosition * -1}px) translateY(${yPosition * -1}px)`
		)
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

	// Counter down
	jQuery(document).ready(function () {
		$('.counter__block__number').counterUp({
			delay: 5,
			time: 3000
		});
		$('.about__conten__number').counterUp({
			delay: 5,
			time: 1000
		});
	});

    //  Testimonial slider
    $(".testimonial__slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 1
			  }
			}
		]
    });

    //  Case Studies slider
    $(".case-studies__slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        arrows: true,
        prevArrow:'<i class="flaticon-back slick__arrows d-inline-flex align-items-center justify-content-center rounded-circle slick__arrows--left"></i>',
        nextArrow:'<i class="flaticon-next slick__arrows d-inline-flex align-items-center justify-content-center rounded-circle slick__arrows--right"></i>',
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1
			  }
			},
		]
    });

    // Veno box popup
    $('.venobox').venobox({
        bgcolor: '#ffffff',
        spinner: 'wandering-cubes',
        border: '10px',
    });

	// AOS scroll animation
	AOS.init({
		duration: 1500,
		once: true,
	});
	
});