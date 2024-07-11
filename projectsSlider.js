// slideIndex variable keeps track of the current slide being displayed. 
//It starts at 1, indicating the first slide.
let slideIndex = 1;
showSlides(slideIndex);

//Functions: plusSlides, currentSlide, and showSlides are all functions defined to control the slideshow.
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//n > is a parameter: which represents represents the change in slide index (plusSlides), 
//the specific slide index (currentSlide), or the new slide index (showSlides).
function currentSlide(n) {
    showSlides(slideIndex = n);
}
//This function calls the showSlides function and passes slideIndex as an argument. 
// It displays the initial slide when the script runs.
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); // retrieving all HTML elements with a specific class name ("mySlides" and "dot").
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";// It sets the CSS display property of each slide to "none", effectively hiding them.
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
