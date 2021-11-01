var i = 0;
var images  = [];
var time = 3000;

images[0] = "img/ourRoom/bathtub.jpg";
images[1] = "img/ourRoom/chair.jpg";
images[2] = "img/ourRoom/garden.jpg";
images[3] = "img/ourRoom/stairs.jpg";

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
