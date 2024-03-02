let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;
let zero;
let dotw;
let clear;
let absx;
let sign;
let x;
let y;
let z;
let pressed = false;
let absolute;
let output;
let click;
window.onload = function (){
    one = document.querySelector(".one");
    two = document.querySelector(".two");
    three = document.querySelector(".three");
    four = document.querySelector(".four");
    five = document.querySelector(".five");
    six = document.querySelector(".six");
    seven = document.querySelector(".seven");
    eight = document.querySelector(".eight");
    nine = document.querySelector(".nine");
    zero = document.querySelector(".zero");
    dotw = document.querySelector(".dot");
    clear = document.querySelector("#ac");;
    output = document.querySelector(".output");
    click = new Audio();
    click.src = "assets/aud1.wav";
}
function no1(){
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "1";
    y = output.innerText;
}
function no2(){
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "2";
    y = output.innerText;
}
function no3(){
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "3";
    y = output.innerText;
}
function no4(){
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "4";
    y = output.innerText;
}
function no5(){
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "5";
    y = output.innerText;
}
function no6(){
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "6";
    y = output.innerText;
}
function no7(){
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "7";
    y = output.innerText;
}
function no8(){
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "8";
    y = output.innerText;
}
function no9(){
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "9";
    y = output.innerText;
}
function no0(){
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += "0";
    y = output.innerText;
}
function dot(){
    click.play();
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    clear.innerText = "C";
    output.innerText += ".";
    y = output.innerText;
}
function ac(){
    click.play();
    if(clear.innerText == "AC"){
        z = "0";
    }
    clear.innerText = "AC";
    output.innerText = "0";
}
function abs(){
    click.play();
    if (pressed){
        output.innerText = "-0";
        pressed = false;
    }
    absx = output.innerText;
    if(absx < 0){
        output.innerText = -1 *  parseFloat(absx);
    }
    else if(absx > 0){
        output.innerText = "-" +absx;
    }
    y = output.innerText;
}
function pct(){
    click.play();
    pressed = true;
    let pctx = output.innerText;
    let pcty = parseFloat(pctx) / 100;
    output.innerText = pcty;
    y = output.innerText;
}
function div(){
    click.play();
    pressed = true;
    x = output.innerText;
    sign = "/";
}
function mul(){
    click.play();
    pressed = true;
    x = output.innerText;
    sign = "*";
}
function add(){
    click.play();
    pressed = true;
    x = output.innerText;
    sign = "+";
}
function min(){
    click.play();
    pressed = true;
    x = output.innerText;
    sign = "-";
}
function equals(){
    click.play();
    pressed = true;
    if(sign == "+"){
        z =  parseFloat(x)+ parseFloat(y);
    }
    else if(sign == "-"){
        z =  parseFloat(x) - parseFloat(y);
    }
    else if(sign == "*"){
        z =  parseFloat(x)* parseFloat(y);
    }
    else if(sign == "/"){
        z =  parseFloat(x)/ parseFloat(y);
    }
    output.innerText = z;
}