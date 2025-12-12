const apiKey = "d946fd832697d1c9b2f1166bf9ee3c83"; // Make sure your real key is here
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".weather").style.display = "none";
            alert("Invalid City Name");
        } else {
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            document.querySelector(".weather").style.display = "block";
        }
    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    });


    //7f3607978b06e9688ffe9cce904100f2