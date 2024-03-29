let cityName;
let tempOutput;
let humOutput;
let windOutput;
let desOutput;
let img;
const apiKey = "3727edf6774ae7a0af17a04daec261a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
window.onload = ()=>{
    cityName = document.querySelector("#cityot");
    tempOutput = document.querySelector("#tempot");
    humOutput = document.querySelector("#humot");
    windOutput = document.querySelector("#windot");
    cityInput = document.querySelector("#input");
    desOutput = document.querySelector("#desot");
    container = document.querySelector(".container");
    img = document.querySelector("#img"); 
}
async function checkWeather(){
    let city = cityInput.value;
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`+"&units=metric");
    if(response.status == 404){
        document.querySelector(".main").style.display = "none";
        document.querySelector(".error").style.display = "flex";
        document.querySelector(".error").style.color = "red";
        container.style.height = "100vh";
    }
    else{
        let data = await response.json();
        cityName.innerHTML = data.name;
        tempOutput.innerHTML = data.main.temp +"℃";
        humOutput.innerHTML = data.main.humidity +"%";
        windOutput.innerHTML = data.wind.speed +"km/h";
        desOutput.innerHTML = data.weather[0].description;
        document.querySelector(".main").style.display = "block";
        container.style.height = "100%";
        document.querySelector(".error").style.display = "none";
        if(data.weather[0].main == "Rain"){
            img.src = "images/rain.jpg";
            console.log(data.weather[0].main);
        }
        else if(data.weather[0].main == "Snow"){
            img.src = "images/snow.jpg";
            console.log(data.weather[0].main);
        }
        else if(data.weather[0].main == "Cloud"){
            img.src = "images/cloud.jpg";
            console.log(data.weather[0].main);
        }
        else if(data.weather[0].main == "Clear"){
            img.src = "images/sun.jpg";
            console.log(data.weather[0].main);
        }
        else if(data.weather[0].main == "Drizzle"){
            img.src = "images/drizzle.jpg";
            console.log(data.weather[0].main);
        }
        else if(data.weather[0].main == "Mist"){
            img.src = "images/partSun.jpg";
            console.log(data.weather[0].main);
        }
    }
}