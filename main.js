const API_KEY = `de7e3067d316c5063fe0f8676162ed23`;

const getWeather = () => {
  const cityInput = document.getElementById("city-input");
  const inputText = cityInput.value;
  cityInput.value = "";

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showWeather(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const showWeather = (weatherData) => {
  setInnerText("city-name", weatherData.name);
  setInnerText("temperature", weatherData.main.temp);
  setInnerText("weather", weatherData.weather[0].main);
  document
    .getElementById("weather-image")
    .setAttribute("src", `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
};
