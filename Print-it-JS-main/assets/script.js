const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Javascript insertion fleches et dots
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');

console.log(arrowLeft);
console.log(arrowRight);

let currentIndex = 0;

//slide des fleches(images,textes, alt)
function updateSlide(index, direction) {
	if (currentIndex === -1 && direction === 'left') {
		currentIndex = slides.length - 1;
	} else if (currentIndex === slides.length && direction === 'right') {
		currentIndex = 0;
	}

	const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
	bannerImg.src = imagePath;
	bannerImg.alt = `Slide ${currentIndex + 1}`;

	const tagLine = slides[currentIndex].tagLine;
	document.querySelector('p').innerHTML = tagLine;
}

//slide des boutons et selection de la classe
function slideDots(index) {
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

//addeventlisteners pour fleches et boutons
arrowLeft.addEventListener('click', function () {
	currentIndex = (currentIndex - 1);
	updateSlide(currentIndex, 'left');
	slideDots(currentIndex);
});

arrowRight.addEventListener('click', function () {
	currentIndex = (currentIndex + 1);
	updateSlide(currentIndex, 'right');
	slideDots(currentIndex);
});

updateSlide(currentIndex, 'start');
slideDots(currentIndex);
