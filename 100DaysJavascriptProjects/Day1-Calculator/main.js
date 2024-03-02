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
}
function no1(){
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += one.innerText;
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
    output.innerText += two.innerText;
    y = output.innerText;
}
function no3(){
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += three.innerText;
    y = output.innerText;
}
function no4(){
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += four.innerText;
    y = output.innerText;
}
function no5(){
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += five.innerText;
    y = output.innerText;
}
function no6(){
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += six.innerText;
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
    output.innerText += seven.innerText;
    y = output.innerText;
}
function no8(){
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += eight.innerText;
    y = output.innerText;
}
function no9(){
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += nine.innerText;
    y = output.innerText;
}
function no0(){
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    if(output.innerText == "0"){
        output.innerText = "";
    }
    clear.innerText = "C";
    output.innerText += zero.innerText;
    y = output.innerText;
}
function dot(){
    if (pressed){
        output.innerText = "";
        pressed = false;
    }
    clear.innerText = "C";
    output.innerText += dotw.innerText;
    y = output.innerText;
}
function ac(){
    clear.innerText = "AC";
    output.innerText = "0";
}
function abs(){
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
    pressed = true;
    let pctx = output.innerText;
    let pcty = parseFloat(pctx) / 100;
    output.innerText = pcty;
    y = output.innerText;
}
function div(){
    pressed = true;
    x = output.innerText;
    sign = "/";
}
function mul(){
    pressed = true;
    x = output.innerText;
    sign = "*";
}
function add(){
    pressed = true;
    x = output.innerText;
    sign = "+";
}
function min(){
    pressed = true;
    x = output.innerText;
    sign = "-";
}
function equals(){
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