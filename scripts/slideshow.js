var slideNumber = 1;
slideshow();

function slideshow() {
/* Funksjonen viser et slideshow av bilder der det skiftes på hvilket bilde
som vises hvert 4. sekund. */
    var i;
    var slides = document.getElementsByClassName("slides");
    if (slideNumber > slides.length) {
        slideNumber = 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideNumber-1].style.display = "block";
    slideNumber++;
    setTimeout(slideshow, 4000);
}
