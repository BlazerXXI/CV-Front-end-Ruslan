$(document).ready(function () {
	const headerHeight = $(".header").outerHeight();

	// Smooth scrolling for anchor links
	$('a[href*="#"]').click(function (e) {
		e.preventDefault();

		// Get the target ID from the href attribute
		const blockID = $(this).attr("href").substr(1);
		const targetElement = $($("#" + blockID));

		if (targetElement.length) {
			$("html, body").animate(
				{
					scrollTop: targetElement.offset().top - headerHeight,
				},
				500
			);
		}
	});

	// Intersection Observer for mySkills section
	const mySkills = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("square-animation");
			}
		});
	});
	mySkills.observe($(".my-skills__list")[0]);

	// Intersection Observer for aboutMe section
	const aboutMe = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("about-animation");
			}
		});
	});
	aboutMe.observe($(".about-me__text-block")[0]);

	// Intersection Observer for hero section
	const hero = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("rev-square-animation");
			}
		});
	});
	hero.observe($(".hero__container")[0]);

	// Slick slider for portfolio
	$(".portfolio__slider").slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000,
		waitForAnimate: true,
		slidesToShow: 3,
		rows: 1,
		centerMode: true,
	});

	// Toggle active class for header menu
	const removeActiveMenu = () => {
		$(".header__menu").removeClass("active");
		$(".header__collapse-menu").removeClass("active");
		$(".wrapper").removeClass("active__darkWindow");
	};

	$(".header__menu").click(function () {
		$(".header__menu").toggleClass("active");
		$(".header__collapse-menu").toggleClass("active");
		$(".wrapper").toggleClass("active__darkWindow");
	});

	$(document).click(function (e) {
		!e.target.classList.contains("header__nav") &&
		!e.target.classList.contains("header__menu") &&
		!e.target.classList.contains("header__menu-span")
			? removeActiveMenu()
			: null;
	});

	/*
This code adds a click event listener to an element with the class "btn-block__link".
 When the element is clicked, it checks if it does not have the class "active".
 If it doesn't, it performs a series of animations on elements with the IDs "download" and "check".
  If it does have the class "active", it does nothing.
	*/
	$(".btn-block__link").click(function () {
		if (!this.classList.contains("active")) {
			this.classList.add("active");
			$("#download").css("transform", "translateY(-20px)");
			setTimeout(() => {
				$("#download").css("transform", "translateY(100px)");
			}, 500);
			setTimeout(() => {
				$("#download").css("display", "none");
				$("#check").css("display", "block");
			}, 1000);
			setTimeout(() => {
				$("#check").css("transform", "translateY(0)");
			}, 1500);
		}
	});
});
