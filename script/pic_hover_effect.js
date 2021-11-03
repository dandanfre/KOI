const massPic1= document.getElementById("massPic1")

function setNewImage(){
    massPic1.src ="img/people/daniel2.png";
}

function setOldImage(){
    massPic1.src = "img/people/daniel1.png";
}

massPic1.addEventListener("mouseover", setNewImage);
massPic1.addEventListener("mouseout", setOldImage);

const massPic2= document.getElementById("massPic2")

function setNewImage2(){
    massPic2.src ="img/people/celine2.png";
}

function setOldImage2(){
    massPic2.src = "img/people/celine1.png";
}

massPic2.addEventListener("mouseover", setNewImage2);
massPic2.addEventListener("mouseout", setOldImage2);

const massPic3= document.getElementById("massPic3")

function setNewImage3(){
    massPic3.src ="img/people/ida2.png";
}

function setOldImage3(){
    massPic3.src = "img/people/ida1.png";
}

massPic3.addEventListener("mouseover", setNewImage3);
massPic3.addEventListener("mouseout", setOldImage3);

const massPic4= document.getElementById("massPic4")

function setNewImage4(){
    massPic4.src ="img/people/khai2.png";
}

function setOldImage4(){
    massPic4.src = "img/people/khai1.png";
}

massPic4.addEventListener("mouseover", setNewImage4);
massPic4.addEventListener("mouseout", setOldImage4);
