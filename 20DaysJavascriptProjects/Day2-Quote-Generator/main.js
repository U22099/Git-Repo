let img;
let images = ["images/IMG1.JPG","images/IMG2.JPG","images/IMG3.JPG","images/IMG4.JPG",
            "images/IMG5.JPG","images/IMG6.JPG","images/IMG7.JPG","images/IMG8.JPG",
            "images/IMG9.JPG","images/IMG10.JPG","images/IMG11.JPG","images/IMG12.JPG",
            "images/IMG13.JPG","images/IMG14.JPG","images/IMG15.JPG","images/IMG16.JPG",
            "images/IMG17.JPG","images/IMG18.JPG","images/IMG19.JPG","images/IMG20.JPG",
            "images/IMG21.JPG","images/IMG22.JPG","images/IMG23.JPG","images/IMG24.JPG",
            "images/IMG25.JPG","images/IMG26.JPG","images/IMG27.JPG","images/IMG28.JPG",
            "images/IMG29.JPG","images/IMG30.JPG"]
window.onload = function(){
    img = document.querySelector(".img");
}
function next(){
    //Change the background image Randomly
    let x = Math.ceil(Math.random()*29);
    img.src = images[x];
}