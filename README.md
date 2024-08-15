Weather App

Table of Contents

    Introduction
    Features
    Technologies Used
    Setup and Installation
    Usage
    API Reference
    Project Structure
    Contributing
    Contact

Introduction

The Weather App is a simple web application that allows users to view the current weather and a 5-day forecast for any city. The app fetches weather data from the OpenWeatherMap API and displays it in an easy-to-read format.
Features

    Search by City: Users can search for the weather in any city worldwide.
    Current Weather: Displays the current temperature, weather conditions, humidity, and wind speed.
    5-Day Forecast: Provides a 5-day weather forecast with daily high and low temperatures.
    Responsive Design: The app is fully responsive and works well on all devices.

Technologies Used

    HTML5: Structure and content of the app.
    CSS3: Styling and layout (using Flexbox and Grid).
    JavaScript (ES6): Functionality and interactivity.
    OpenWeatherMap API: Fetching weather data.


Setup and Installation

To run the Weather App locally, follow these steps:

    Clone the repository:

    bash

git clone https://github.com/AlexCrogh/WeatherApp.git
cd weather-app

Open the index.html file:
You can simply open the index.html file in your web browser to run the app.

(Optional) Use a local server:
If you want to run the app on a local server, you can use tools like live-server:

bash

    npm install -g live-server
    live-server

Usage

    Search for a city: Enter the name of a city in the search bar and press enter.
    View weather data: The app will display the current weather and a 5-day forecast for the selected city.

API Reference

The Weather App uses the OpenWeatherMap API to fetch weather data.

    Base URL: https://api.openweathermap.org/data/2.5/
    Endpoints Used:
        weather: For current weather data.
        forecast: For the 5-day weather forecast.
    API Key: You will need an API key to access the OpenWeatherMap API. Sign up on their website to get a free API key and replace YOUR_API_KEY in the code.

Project Structure

bash

weather-app/
│
├── index.html          # Main HTML file
├── style.css           # Main CSS file
├── script.js           # Main JavaScript file
└── README.md           # Project documentation

Contributing

Contributions are welcome! If you'd like to contribute to the Weather App, please follow these steps:

    Fork the repository.
    Create a new branch for your feature (git checkout -b feature-branch).
    Commit your changes (git commit -m 'Add new feature').
    Push to the branch (git push origin feature-branch).
    Create a Pull Request.


For any inquiries or questions, feel free to reach out:

    Name: Alex Croghan
    Email: croghan_alexander@gmail.com
    GitHub: AlexCrogh
    