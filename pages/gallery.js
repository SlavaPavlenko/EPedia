var images = ["попугай.jpg","змея.jpg","кошка.jpg"];
var slideIndex = 0;
const leftArrow = document.querySelector("left");
const rightArrow = document.querySelector("right");
var obj = document.getElementById("gallery_img");


function showSlides(n){
    if(n>images.length-1) slideIndex = 0;
    if(n<0) slideIndex=images.length-1;
    loadSlide();
}
function loadSlide(){
    var obj = document.getElementById("gallery_img");
    obj.src = "../Content/images/"+images[slideIndex];
    obj.alt = images[slideIndex].slice(0, images[slideIndex].length-4)
    images.forEach((index)=>images[index].style.display = "none");
    images[slideIndex].style.display="block";
}