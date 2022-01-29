$(function () {

	var header = $("#header"),
		// переменная с высотой блока intro
		introH = $("#intro").innerHeight(),
		// текущий скрол при загрузке страницы
		scrollOffset = $(window).scrollTop();

	/* Fixed Header*/
	// запускаем функцию
	checkScroll(scrollOffset);
	// скролим страницу
	$(window).on("scroll", function () {
		// обновляем значение скрола на сколько проскролили
		scrollOffset = $(this).scrollTop();
		// передаем в функцию новое значение
		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		// если высота скрола > intro, то header.fixed
		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();
		// получаем значение id из data-scroll
		var $this = $(this),
			blockId = $this.data('scroll'),
			// получаем позицию элемента от верха страницы
			blockOffset = $(blockId).offset().top;
		// убираем класс у неактивных ссылок
		$("#nav a").removeClass("active");
		// придаем нашей ссылке класс active
		$this.addClass("active");
		// плавно переходим на страницу
		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	})

	/* Menu nav togle (бургер-меню) */
	$("#nav_toggle").on("click", function (event) {
		event.preventDefault();
		// бургер превращаем в крестик
		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	})

	/* Collasce (Аккордеон) */
	$("[data-collapse]").on("click", function (event) {
		event.preventDefault();
		var $this = $(this),
			blockId = $this.data('collapse');
		$this.toggleClass("active");
	})

	/* Slider (Слайдер) */
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});

});