let allSlides = document.querySelectorAll('#slideshow .slides');
let curSlide = 0;
let slideInt = setInterval(nextSlide, 3000);

function nextSlide() {
    // if last slide has been shown, end with first slide
    if (curSlide == allSlides.length - 1) {
        allSlides[curSlide].className = 'slides';
        allSlides[0].className = 'slides show';
    }
    if (curSlide < allSlides.length - 1) {
        allSlides[curSlide].className = 'slides';
    }
    curSlide = curSlide + 1;
    allSlides[curSlide].className = 'slides show';
}

document.getElementById("submit-email-btn").addEventListener('click', function() {
    window.alert("One of our knowledgable representatives will email you soon!");
});

window.addEventListener('scroll', function(event) {
    const topOfScreen = window.pageYOffset;
    if (topOfScreen > 2000) {
        let current = document.getElementById("reviews-box");
        current.className = "fadeIn";
    }
});

