var city = "";
var searchCity = $("#searchCity");
var searchButton = $("#searchButton");
var clearButton = $("#clear-history");
var currentCity = $("#currentCity");
var currentTemperature = $("#temperature");
var currentHumidity = $("#humidity");
var currentWindSpeed = $("#windSpeed");
var savedCities = [];

// search saved cities
function find(c) {
    for (var i = 0; i < savedCities.length; i++) {
      if (c.toUpperCase() === savedCities[i]) {
        return -1;
      }
    }
    return 1;
  }

  // API Key

  // Tie city to forecast 
function displayWeather(event) {
    event.preventDefault();
    if (searchCity.val().trim() !== "") {
      city = searchCity.val().trim();
      currentWeather(city);
    }
  }