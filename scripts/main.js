
document.getElementById("submit-email-btn").addEventListener('click', function() {
    window.alert("One of our knowledgable representatives will email you soon!");
});

window.addEventListener('scroll', function(event) {
    const topOfScreen = window.pageYOffset;
    if (topOfScreen > 2200) {
        let current = document.getElementById("reviews-box");
        current.className = "fadeIn";
    }
});

