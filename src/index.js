import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/styles.css";
import "./styles/mainWeather.css";
import "./styles/sideWeather.css";
import "./styles/address.css";

import getWeatherJson from "./styles/getWeather";
import processJson from "./processJson";
import processForm from "./processForm";

console.log("test");

processForm(renderWeather);

async function renderWeather(city) {
  const obj = await processJson(getWeatherJson(city));
  console.log(obj);

  renderMainWeather(obj);
  renderSideWeather(obj);
  renderAddress(obj);
}

function renderMainWeather(obj) {
  const mainWeather = document.querySelector(".main-weather");
  const temp = mainWeather.querySelector(".temp");
  temp.textContent = obj.days[0].temp;

  const max = mainWeather.querySelector(".max");
  max.textContent = obj.days[0].tempmax;

  const min = mainWeather.querySelector(".min");
  min.textContent = obj.days[0].tempmin;

  const icon = mainWeather.querySelector(".icon");
  icon.textContent = obj.days[0].icon;

  const feelsLike = mainWeather.querySelector(".feels-like");
  feelsLike.textContent = obj.days[0].feelslike;
}

function renderSideWeather(obj) {
  const sideWeather = document.querySelector(".side-weather");

  const humidity = sideWeather.querySelector(".humidity");
  humidity.textContent = obj.days[0].humidity;

  const precipitation = sideWeather.querySelector(".precipitation");
  precipitation.textContent = obj.days[0].precipprob;

  const windSpeed = sideWeather.querySelector(".windspeed");
  windSpeed.textContent = obj.days[0].windspeed;

  const uv = sideWeather.querySelector(".uv-index");
  uv.textContent = obj.days[0].uvindex;
}

function renderAddress(obj) {
  const address = document.querySelector(".address");

  const resolvedAddress = address.querySelector(".resolved-address");
  resolvedAddress.textContent = obj.resolvedAddress;

  const lat = address.querySelector(".lat");
  lat.textContent = obj.latitude;

  const long = address.querySelector(".long");
  long.textContent = obj.longitude;
}
