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

// slider
const dots = document.querySelectorAll(".portfolio-dots");
const slider = document.querySelectorAll(".portfolio-works__list");

// Select tab content item
function selectItem(e) {
	removeActive();
	removeShow();
	this.classList.add("_active");
	const slide = document.querySelector(`#${this.id}-content`);

	// Add show class
	slide.classList.add("show");
}

function removeActive() {
	dots.forEach((item) => item.classList.remove("_active"));
}
function removeShow() {
	slider.forEach((item) => item.classList.remove("show"));
}

//  Listen for tab click
dots.forEach((item) => item.addEventListener("click", selectItem));

$(document).ready(function () {
	$(".portfolio__slider").slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		variableWidth: true,
		autoplay: false,
		autoplaySpeed: 2000,
		waitForAnimate: true,
		slidesToShow: 3,
		rows: 1,
		centerMode: true,
	});
});
