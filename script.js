//...................................JavaScript Code for nav bar, image Carousel and light and dark button................................................//


// nav bar code

const menuNames = document.querySelector('#smart-menu');
const setLinks = document.querySelector('.navigation-list');

menuNames.addEventListener('click', function() {
    menuNames.classList.toggle('is-active');
    setLinks.classList.toggle('active');
});

// Image carousel

//starting at image one
var imageIndex = 1;
showImages(imageIndex)

//writing a function keyword with parameter of num in round bracket
function plusSlides(num) {
    //adding one extra after the first image.
    showImages(imageIndex += num);

};
// another keyword function named currentSlides with parameter called num which is a number.
function currentSlides(num) {
    //the images will equal the numbers one from the next.
    showImages(imageIndex = num);
};

function showImages(num) {
    
    var slidesInto = document.getElementsByClassName("myCarousels");
    var circles = document.getElementsByClassName("circle");

    if (num > slidesInto.length) {
        imageIndex = 1;
    }

    if(num < 1) {
        imageIndex = slidesInto.length;
    }

    for(var i = 0; i < slidesInto.length; i++) {
        slidesInto[i].style.display = "none";
    }

    for(var i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" active", "");
    }
    slidesInto[imageIndex - 1].style.display = "block";
    circles[imageIndex - 1].className += " active";

};


// Toggle command for light and dark Toggle Button mode.

const colorConvert = document.getElementById('input-color-switch');

//looking out for a click. when its on then it will check the operation from a function I made called 'styleCheck'.
colorConvert.addEventListener('click',checkMode);

// I want this function to check if dark mode is enabled. if it isnt then I want it to check.

function checkMode() {
    //console.log('checking...');
    // This will check if its on.
    if(colorConvert.checked) {
       console.log('dark on');
       darkModeOn();
    } else { 
        //console.log('dark off');
        darkModeOff();
    }

};
// Make a function of dark mode on.
// this will add the opposite colours on the page.
// adding the class name from the CSS.
function darkModeOn() {
    document.body.classList.add("dark-mode");
};

// Then a function to remove opposite color off.

function darkModeOff() {
    document.body.classList.remove("dark-mode");
};


