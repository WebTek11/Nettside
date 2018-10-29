var slideIndex = 0;
showSlides();

function showSlides() {
/* Funksjonen viser et slideshow av bilder der det skiftes på hvilket bilde
som vises hvert 4. sekund. */
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
}
