let textbox1;
let textbox2;
let textbox3;
let textbox4;
let textbox5;
let textbox6;
let no = 0;
let input1 = "key1";
let input2 = "key2";
let input3 = "key3";
let input4 = "key4";
let input5 = "key5";
let input6 = "key6";
let state1 = "state1";
let state2 = "state2";
let state3 = "state3";
let state4 = "state4";
let state5 = "state5";
let state6 = "state6";
let noKeep = "noKeep";
window.onload = ()=>{
    textbox1 = document.querySelector("#txt1");
    textbox2 = document.querySelector("#txt2");
    textbox3 = document.querySelector("#txt3");
    textbox4 = document.querySelector("#txt4");
    textbox5 = document.querySelector("#txt5");
    textbox6 = document.querySelector("#txt6");
    textbox1.style.visibility = localStorage.getItem(state1);
    textbox2.style.visibility = localStorage.getItem(state2);
    textbox3.style.visibility = localStorage.getItem(state3);
    textbox4.style.visibility = localStorage.getItem(state4);
    textbox5.style.visibility = localStorage.getItem(state5);
    textbox6.style.visibility = localStorage.getItem(state6);
    textbox1.value = localStorage.getItem(input1);
    textbox2.value = localStorage.getItem(input2);
    textbox3.value = localStorage.getItem(input3);
    textbox4.value = localStorage.getItem(input4);
    textbox5.value = localStorage.getItem(input5);
    textbox6.value = localStorage.getItem(input6);
    no = localStorage.getItem(noKeep);
    if(no){
        no += 1;
    }
}
function showNotepad(){
    let string;
    if(no == 6){
        alert("Max Notepads Reached");
    }
    else{
        no += 1;
        localStorage.setItem(noKeep);
        if(no == 1){
            box1();
        }
        else if(no == 2){
            box2();
        }
        else if(no == 3){
            box3();
        }
        else if(no == 4){
            box4();
        }
        else if(no == 5){
            box5();
        }
        else{
            box6();
        }
    }
}
function box1(){
    string = localStorage.getItem(input1);
    textbox1.style.visibility = "visible";
    textbox1.value = string;
    textbox1.focus()
    setInterval(()=>{
        localStorage.setItem(input1, textbox1.value);
    }, 500);
    localStorage.setItem(state1, "visible");
}
function box2(){
    string = localStorage.getItem(input2);
    textbox2.style.visibility = "visible";
    textbox2.value = string;
    textbox2.focus()
    setInterval(()=>{
        localStorage.setItem(input2, textbox2.value);
    }, 500);
    localStorage.setItem(state2, "visible");
}
function box3(){
    string = localStorage.getItem(input3);
    textbox3.style.visibility = "visible";
    textbox3.value = string;
    textbox3.focus()
    setInterval(()=>{
        localStorage.setItem(input3, textbox3.value);
    }, 500);
    localStorage.setItem(state3, "visible");
}
function box4(){
    string = localStorage.getItem(input4);
    textbox4.style.visibility = "visible";
    textbox4.value = string;
    textbox4.focus()
    setInterval(()=>{
        localStorage.setItem(input4, textbox4.value);
    }, 500);
    localStorage.setItem(state4, "visible");
}
function box5(){
    string = localStorage.getItem(input5);
    textbox5.style.visibility = "visible";
    textbox5.value = string;
    textbox5.focus()
    setInterval(()=>{
        localStorage.setItem(input5, textbox5.value);
    }, 500);
    localStorage.setItem(state5, "visible");
}
function box6(){
    string = localStorage.getItem(input6);
    textbox6.style.visibility = "visible";
    textbox6.value = string;
    textbox6.focus()
    setInterval(()=>{
        localStorage.setItem(input6, textbox6.value);
    }, 500);
    localStorage.setItem(state6, "visible");
}