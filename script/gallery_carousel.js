var i = 0;
var images  = [];
var time = 3000;

images[0] = document.getElementById('imgSlide').src='img/atmosphere/bathtub.jpg';
images[1] = document.getElementById('imgSlide').src='img/atmosphere/chair.jpg';
images[2] = document.getElementById('imgSlide').src='img/atmosphere/light.jpg';
images[3] = document.getElementById('imgSlide').src='img/atmosphere/stairs.jpg';

function changeImage() {
  
  document.slide.src = images[i];

  if ( i < images.length - 1){
    i++;
  }
  else{
    i = 0;
  }

  setTimeout("changeImage()", time);
}

window.onload = changeImage;
