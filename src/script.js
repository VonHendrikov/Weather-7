function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;

  searchCity(cityInput.value);
}
searchCity("Glasgow");

function searchCity(city) {
  let apiKey = "16fe8924e5a075000ef90dc44bff1cd0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let dateElement = document.querySelector("#Date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//let searchForm = document.querySelector("#search-form");
//searchForm.addEventListener("submit", search);

//geolocator current location
//function showPosition(position) {
// let h1 = document.querySelector("h1");
// h1.innerHTML = console.log(position.coords.latitude);
// console.log(position.coords.longitude);
//}

//function getCurrentPosition() {
// navigator.geolocation.getCurrentPosition(showPosition);
//}

//let button = document.querySelector("button");
//button.addEventListener("click", getCurrentPosition);

function showTemperature(response) {
  console.log(response.data);

  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let windElement = document.querySelector("#wind");
  let conditionElement = document.querySelector("#conditions");
  let humidityElement = document.querySelector("#humidity");

  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  windElement.innerHTML = Math.round(response.data.wind.speed);
  conditionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;

  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute(
    "alt",
    `http://openweathermap.org/img/wn/${response.data.weather[0].description}@2x.png`
  );
}

//function convertToFahrenheit(event) {
//event.preventDefault();
//let temperatureElement = document.querySelector("#temperature");
// temperatureElement.innerHTML = `${temperature}`;
//}

//function convertToCelsius(event) {
// event.preventDefault();
// let temperatureElement = document.querySelector("#temperature");
// temperatureElement.innerHTML = `${temperature}`;
//}

//let fahrenheitLink = document.querySelector("#fahrenheit-link");
//fahrenheitLink.addEventListener("click", convertToFahrenheit);

//let celsiusLink = document.querySelector("#celsius-link");
//celsiusLink.addEventListener("click", convertToCelsius);
