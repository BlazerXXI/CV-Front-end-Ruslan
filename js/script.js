const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		const blockID = anchor.getAttribute("href").substr(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
}

const mySkills = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("square-animation");
		}
	});
});
mySkills.observe(document.querySelector(".my-skills__list"));

const aboutMe = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("about-animation");
		}
	});
});
aboutMe.observe(document.querySelector(".about-me__text-block"));

const hero = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("rev-square-animation");
		}
	});
});
hero.observe(document.querySelector(".hero__container"));

$(document).ready(function () {
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

	$(".header__menu").click(function () {
		$(".header__menu").toggleClass("active");
		$(".header__collapse-menu").toggleClass("active");
	});
	$(document).click(function (e) {
		console.log(e.target);
	});
});
