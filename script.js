const apiKey = "YOUR_OPENWEATHER_API_KEY_HERE"; // Replace this with your actual key
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    // Logic will be added tomorrow
    console.log("Function ready for city: " + city);
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
