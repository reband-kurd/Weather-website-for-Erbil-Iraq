const api = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/erbil?unitGroup=metric&key=WM88WLYPWLTGXJRS9QM9LAK4H&contentType=json";
const wetherIcon = document.querySelector(".wether-icon");
const wetherBg = document.querySelector("body");

async function Weatherspot() {
  const response = await fetch(api);
  var data = await response.json();
  document.querySelector(".temp").innerHTML = data.currentConditions.temp;
  document.querySelector(".address").innerHTML = data.resolvedAddress;
  document.querySelector(".humidity").innerHTML = data.currentConditions.humidity;
  document.querySelector(".windspeed").innerHTML = data.currentConditions.windspeed;
  document.querySelector(".ftemp").innerHTML = data.days[1].tempmax;
  document.querySelector(".ftempmin").innerHTML = data.days[1].tempmin;
  document.querySelector(".stemp").innerHTML = data.days[2].tempmax;
  document.querySelector(".stempmin").innerHTML = data.days[2].tempmin;
  document.querySelector(".ttemp").innerHTML = data.days[3].tempmax;
  document.querySelector(".ttempmin").innerHTML = data.days[3].tempmin;
  document.querySelector(".fotemp").innerHTML = data.days[4].tempmax;
  document.querySelector(".fotempmin").innerHTML = data.days[4].tempmin;
  if (data.currentConditions.icon == "Cloudy") {
    wetherIcon.src = "images/1163736.png";
  }
  else if (data.currentConditions.icon == "clear-day") {
    wetherIcon.src = "images/weather-clear-symbolic-icon-511x512-zfj6vb21.png";
  }
  else if (data.currentConditions.icon == "clear-night") {
    wetherIcon.src = "images/17279.png";


  }
  else if (data.currentConditions.icon == "partly-cloudy-night") {
    wetherIcon.src = "images/weather_partly_cloudy_night_regular_icon_204694.png";
  }
  else if (data.currentConditions.icon == "partly-cloudy-day") {
    wetherIcon.src = "images/475380.png";
  } console.log(data);
}

Weatherspot();

