const apiKey = "9c382dc299d414b0379d8eca4f65f85b";
let city = "Chisinau";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async (city) => {
  const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°с";
    document.querySelector(".humadity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./assets/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./assets/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./assets/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./assets/images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
