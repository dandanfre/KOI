var i = 0;
var images  = [];
var time = 3000;

images[0] = "img/incence.jpg";
images[1] = "img/LogoKoi.png";
images[2] = "img/incence.jpg";
images[3] = "img/LogoKoi.png";

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