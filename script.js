let units = "";
let unitSymbol = "";
let windUnits = "";

document.addEventListener("DOMContentLoaded", function() {
   const button = document.getElementById('unitToggle');

   if (button.innerText === "Celsius") {
       units = "imperial";
       unitSymbol="°F";
       windUnits = "mph";
   } else {
      units = "metric";
      unitSymbol="°C";
      windUnits = "m/s"
   }


});

async function getWeather() {
   fetchCurrentWeather();
   fetchForecast();
   
}

function toggleTemperatureUnit() {
   if (document.getElementById('unitToggle').innerText==="Celsius"){
      document.getElementById('unitToggle').innerText= "Farenheit";
      units = "metric";
      unitSymbol="°C";
      windUnits = "m/s"
   }else{
      document.getElementById('unitToggle').innerText= "Celsius";
      units = "imperial";
       unitSymbol="°F";
       windUnits = "mph";
   }
   getWeather();
   
}

function fetchCurrentWeather(){
   const city = document.getElementById('cityInput').value;
   const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units="+units+"&appid=5cb25f7f6e9604825620260fd5e4368c";
   
   fetch(url)
        .then(response => {
            if (!response.ok) {
                alert("City not found.")
            }
            return response.json();
        })
        .then(data => {
         const temperature = Math.round(data.main.temp);
         const desc = data.weather[0].main;
         const icon = "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
         const humudity = data.main.humidity;
         const windSpeed = data.wind.speed;
         const feelsLike = Math.round(data.main.feels_like);
         document.getElementById('cityName').innerText= data.name;
         document.getElementById('temperature').innerText= `Temperature: ${temperature} ${unitSymbol}`;
         document.getElementById("description").innerText= desc;
         document.getElementById("weatherIcon").src=icon;
         document.getElementById('humidity').innerText= `Humidity: ${humudity}%`;
         document.getElementById('windSpeed').innerText= `Wind Speed: ${windSpeed} ${windUnits}`;
         document.getElementById('feelsLike').innerText= `Feels Like: ${feelsLike} ${unitSymbol}`;
         
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function fetchForecast(){
   const city = document.getElementById('cityInput').value;
   const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=5cb25f7f6e9604825620260fd5e4368c`;

fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        const forecastList = data.list;
        const dailyForecasts = {};

        forecastList.forEach(item => {
            const date = new Date(item.dt * 1000);
            const dateString = date.toDateString();
            const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
            const temp = item.main.temp;
            const description = item.weather[0].main;
            const icon = item.weather[0].icon;

            if (!dailyForecasts[dateString]) {
               dailyForecasts[dateString] = { dayOfWeek, temps: [], description, icon };
            }
            dailyForecasts[dateString].temps.push(temp);
            
        });

        const dayDivs = document.querySelectorAll('.day');

        Object.keys(dailyForecasts).slice(0, 5).forEach((date, index) => {
            const dailyData = dailyForecasts[date];
            const highTemp = Math.max(...dailyData.temps);
            const lowTemp = Math.min(...dailyData.temps);
            const desc = dailyData.description;
            const iconUrl = `https://openweathermap.org/img/wn/${dailyData.icon}@2x.png`;

            dayDivs[index].querySelector('.day-name').innerText = dailyData.dayOfWeek;
            dayDivs[index].querySelector('.temperature').innerText = `${Math.round(highTemp)}${unitSymbol}/ ${Math.round(lowTemp)}${unitSymbol}`;
            dayDivs[index].querySelector('.weather-icon').src = iconUrl;
            dayDivs[index].querySelector('.description').innerText = desc;
            
        });
    })
    .catch(error => {
        console.error('Error fetching forecast data:', error);
    });
}
