let currentImage = "0";
let lastImage = "slider18";
let firstImage = "slider1";
let sliderActive = false;

const buttonModule = ( function (){
(function setSliderButtons(){

    // changed from arrows to full div for current project implementation
    (function setLeftArrow () {
    let leftArrow = document.getElementById("slider-left");
        leftArrow.addEventListener('click', () => { previousImage();})
    }) ();
    // changed from arrows to full div for current project implementation
    (function setRightArrow () {
    let rightArrow = document.getElementById("slider-right");
        rightArrow.addEventListener('click', () => {nextImage();});
    }) ();

})();

function next(){
    if (currentImage == lastImage)
    {
        let oldImage = document.getElementById(currentImage);
        oldImage.className = "slider-image";
        let newImage = document.getElementById(firstImage);
        newImage.className = "slider-image-visible";
        currentImage = newImage.id;
    }else{
        let oldImage = document.getElementById(currentImage);
        oldImage.className = "slider-image";
        let oldNumber = oldImage.id.slice(6);
        let newNumber = parseInt(oldNumber, 10);
        newNumber += 1;
        let nextImage = "slider" + newNumber.toString();

        let newImage = document.getElementById(nextImage);
        newImage.className = "slider-image-visible";
        currentImage = newImage.id;
    }
}

function previous(){
    if (currentImage == firstImage)
    {
        let oldImage = document.getElementById(currentImage);
        oldImage.className = "slider-image";
        let newImage = document.getElementById(lastImage);
        newImage.className = "slider-image-visible";
        currentImage = newImage.id;
    }else{
        let oldImage = document.getElementById(currentImage);
        oldImage.className = "slider-image";
        let oldNumber = oldImage.id.slice(6);
        let newNumber = parseInt(oldNumber, 10);
        newNumber -= 1;

        let nextImage = "slider" + newNumber.toString();
        let newImage = document.getElementById(nextImage);
        newImage.className = "slider-image-visible";
        currentImage = newImage.id;
    }
}
return {next, previous};
}) (); // end of button module


function nextImage(){
buttonModule.next();
}

function previousImage(){
    buttonModule.previous();
}

function startSlider(slideToStart){

(function hideGallery() {
let gallery = document.getElementById('gallery');
gallery.style.display = 'none';
})();

(function showSliderWindow() {
let slider = document.getElementById('slider-popup');
slider.style.display = "grid";
let sliderMiddle = document.getElementById('slider-middle');
    sliderMiddle.style.display = "grid";
    let sliderRight = document.getElementById('slider-right');
        sliderRight.style.display = "grid";
        let sliderLeft = document.getElementById('slider-left');
        sliderLeft.style.display = "grid";
}) ();

(function showSelectedImage () {
       let sliderImage =  document.getElementById(slideToStart);
            sliderImage.className = "slider-image-visible";
            currentImage = sliderImage.id;
}) ();
}// startSlider Ending

function endSlider(){

    (function hideLastImage () {
    let displayedImage = document.getElementById(currentImage);
        displayedImage.className = "slider-image";
    }) ();

(function hideSliderWindow () { 
    let slider = document.getElementById('slider-popup');
    slider.style.display = "none";
    let sliderMiddle = document.getElementById('slider-middle');
    sliderMiddle.style.display = "none";
    let sliderRight = document.getElementById('slider-right');
    sliderRight.style.display = "none";
    let sliderLeft = document.getElementById('slider-left');
    sliderLeft.style.display = "none";
}) ();

(function showGallery () {
let gallery = document.getElementById('gallery');
gallery.style.display = 'grid';
}) ();
} // endSlider ending

function toggleSlider (sliderNumber) {
    if (!sliderActive){
        sliderActive = true;
        startSlider(sliderNumber);
    }else {
        endSlider();
        sliderActive = false;
    }
} 

