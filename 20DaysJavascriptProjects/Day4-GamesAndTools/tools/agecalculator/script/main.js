let date;
let output;
window.onload = function(){
    date = document.querySelector("#date");
    output = document.querySelector("#output");
    date.max = new Date().toISOString().split("T")[0];
}
function calculate(){
    let currentDate = new Date();
    let birthdate = new Date(date.value);
    let y = currentDate.getFullYear() - birthdate.getFullYear();
    let m = currentDate.getMonth() - birthdate.getMonth();
    let d = currentDate.getDate() - birthdate.getDate();
    if(m < 0){
        m += 12;
    }
    if(d < 0){
        let mlim = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        d += mlim;
    }
    output.innerHTML = "You are "+(y-1)+" Years "+m+" Months and "+d+" Days Old.";
}