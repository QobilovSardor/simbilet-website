$(function () {

	AOS.init({
		// duration: 1200
	});

	onElementHeightChange(document.body, function () {
		AOS.refresh();
	});


	function onElementHeightChange(elm, callback) {
		var lastHeight = elm.clientHeight
		var newHeight;

		(function run() {
			newHeight = elm.clientHeight;
			if (lastHeight !== newHeight) callback();
			lastHeight = newHeight;

			if (elm.onElementHeightChangeTimer) {
				clearTimeout(elm.onElementHeightChangeTimer);
			}

			elm.onElementHeightChangeTimer = setTimeout(run, 200);
		})();
	}


	$('.menu-opener').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.navbar').toggleClass('active');
	});

	$('.click-mode').on('click', function (e) {
		e.preventDefault();
		$('body').toggleClass('black-mode');
	});

	$('.play-gif').on('click', function (e) {
		e.preventDefault();
		$('.video-block').toggleClass('active');
		$(this).toggleClass('active');
	});


	// home Top slider
	var swiper = new Swiper(".homeTopSlide", {
		slidesPerView: 4.5,
		spaceBetween: 30,
		// grabCursor: true,
		pagination: {
			el: ".swiper-pagination",
			// clickable: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 1.5,
				spaceBetween: 15,
			},
			476: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			700: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1220: {
				slidesPerView: 4.5,
			},
			1920: {
				slidesPerView: 4.5,
			},
		},
		loop: true,
	});

	var swiper3 = new Swiper(".quality-slide-in", {
		slidesPerView: 1,
		spaceBetween: 10,
		autoplay: {
			delay: 4000,
		},
		loop: true,
		speed: 1000,
		navigation: {
			nextEl: ".swiper-button-next2",
			prevEl: ".swiper-button-prev2",
		},
		pagination: {
			el: '.swiper-pagination1',
			clickable: true
		},
		breakpoints: {
			640: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			1024: {
				slidesPerView: 1,
			},
		},
	});

	// concert sec
	try {

		$('.concert-sec__descr p').slice(0, 2).addClass('shown');
		$('.concert-sec__descr p').not('.shown').hide();
		$('.more-text__btn').on('click', function () {
			$('.concert-sec__descr p').not('.shown').toggle(300);
			$(this).toggleClass('showLess');
		});


		$('.reviews-card__box').slideUp(0);
		$(".show-more__card").click(function () {
			$('.reviews-card__box').slideToggle(400);
			if ($(this).text() == "СКРЫВАТЬ") {
				$(this).text("ПОКАЗАТЬ ЕЩЕ");
			} else {
				$(this).text("СКРЫВАТЬ");
			}
		})


		// concertVenuesSlider 
		var swiper = new Swiper(".concertVenuesSlider", {
			slidesPerView: 1.2,
			spaceBetween: 30,
			autoplay: {
				delay: 4000,
			},
			loop: true,
			speed: 500,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1.1,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 1.2
				},
			},
		});
	} catch (error) {
		console.log(erorr);
	}


	var concertSwiper = new Swiper(".concert-swiper", {
		slidesPerView: 2.4,
		grabCursor: true,
		spaceBetween: 30,
		autoplay: {
			delay: 4000,
		},
		clickable: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			0: {
				slidesPerView: 1.2,
				spaceBetween: 15,
			},
			430: {
				slidesPerView: 1.2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2.4,
				spaceBetween: 30,
			},
		},
	});

	var concertSwiper2 = new Swiper(".our-comman-swiper ", {
		slidesPerView: 3.25,
		speed: 500,
		spaceBetween: 30,
		clickable: true,
		autoplay: {
			delay: 4000,
		},
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next2",
			prevEl: ".swiper-button-prev2",
		},
		breakpoints: {
			0: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			430: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3.25,
				spaceBetween: 30,
			},
		},
	});

	var concertSwiper3 = new Swiper(".site-events-swiper ", {
		slidesPerView: 1.3,
		grabCursor: true,
		spaceBetween: 30,
		autoplay: {
			delay: 4000,
		},
		clickable: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next3",
			prevEl: ".swiper-button-prev3",
		},
		breakpoints: {
			360: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			430: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 1.3,
				spaceBetween: 30,
			},
		},
	});
	var concertSwiper4 = new Swiper(".concert-ads-swiper ", {
		slidesPerView: 1.3,
		grabCursor: true,
		spaceBetween: 30,
		autoplay: {
			delay: 4000,
		},
		clickable: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next4",
			prevEl: ".swiper-button-prev4",
		},
		breakpoints: {
			360: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			430: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 1.3,
				spaceBetween: 30,
			},
		},
	});
	var concertSwiper5 = new Swiper(".story-ads-swiper ", {
		slidesPerView: 1.3,
		grabCursor: true,
		spaceBetween: 30,
		autoplay: {
			delay: 4000,
		},
		clickable: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next5",
			prevEl: ".swiper-button-prev5",
		},
		breakpoints: {
			360: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			430: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			640: {
				slidesPerView: 2.2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 1.3,
				spaceBetween: 30,
			},
		},
	});


	$('input[name="daterange"]').daterangepicker({
		opens: 'left',
		"locale": {
			"format": "MM/DD/YYYY",
			"separator": " - ",
			"applyLabel": "Принять",
			"cancelLabel": "Отмена",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": [
				"Вс",
				"Пн",
				"Вт",
				"Ср",
				"Чт",
				"Пт",
				"Сб"
			],
			"monthNames": [
				"Январь",
				"Февраль",
				"Март",
				"Апрель",
				"Май",
				"Июнь",
				"Июль",
				"Август",
				"Сентябрь",
				"Октябрь",
				"Ноябрь",
				"Декабрь"
			],
			"firstDay": 1
		},
		"startDate": "05/15/2023",
		// "endDate": "05/21/2023",
		"buttonClasses": "buttons",
		"applyButtonClasses": "Принять",
		"cancelClass": "Отмена"
	}, function (start, end, label) {
		console.log("A new date selection was made: " + start.format('DD') + ' to ' + end.format('DD MM'));
	});
	$('input[name="daterange"]').val('');


});


const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 1;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});
