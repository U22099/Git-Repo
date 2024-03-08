let background;
let img;

window.onload = function (){
    background = document.querySelector(".container");
    img = ["../images/IMG_0112.JPG","../images/IMG_0113.JPG",
            "../images/IMG_0117.JPG","../images/IMG_0121.JPG",
            "../images/IMG_0348.JPG","../images/IMG_0354.JPG"];
}
function changeImage(){
    let x = Math.ceil(Math.random()*(img.length - 1));
    background.style.backgroundImage = "url(../images/IMG_0113.JPG)";
    alert(img[x]);
}