import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/styles.css";
import "./styles/mainWeather.css";
import "./styles/sideWeather.css";
import "./styles/address.css";
import "./styles/hourly.css";
import "./styles/tenDays.css";

import getWeatherJson from "./styles/getWeather";
import processJson from "./processJson";
import processForm from "./processForm";

processForm(renderWeather);

async function renderWeather(city) {
  const obj = await processJson(getWeatherJson(city));
  console.log(obj);

  if (!obj) return;

  renderMainWeather(obj);
  renderSideWeather(obj);
  renderAddress(obj);
  renderHourly(obj);
  renderTenDays(obj);
}

async function loadIcon(iconName, imgElement) {
  try {
    const module = await import(`./assets/icons/${iconName}.svg`);
    imgElement.src = module.default;
    imgElement.alt = iconName;
  } catch (err) {
    console.log(`Icon ${iconName} could not be loaded. Error: ${err}`);
  }
}

function renderMainWeather(obj) {
  const mainWeather = document.querySelector(".main-weather");
  const condition = mainWeather.querySelector(".condition");
  condition.textContent = obj.days[0].conditions.split(", ")[0];

  const tempDeg = mainWeather.querySelector(".temp .degrees");
  tempDeg.textContent = `${obj.days[0].temp}°C`;

  const max = mainWeather.querySelector(".max .degrees");
  max.textContent = `${obj.days[0].tempmax}°C`;

  const min = mainWeather.querySelector(".min .degrees");
  min.textContent = `${obj.days[0].tempmin}°C`;

  const icon = mainWeather.querySelector("img");
  loadIcon(obj.days[0].icon, icon);
  icon.height = "200";

  const feelsLike = mainWeather.querySelector(".feels-like .degrees");
  feelsLike.textContent = `${obj.days[0].feelslike}°C`;
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

function renderHourly(obj) {
  const hourly = document.querySelector(".hourly");
  hourly.textContent = "";

  for (let i = 0; i < obj.days[0].hours.length; i += 2) {
    const hour = obj.days[0].hours[i];
    const hourDiv = document.createElement("div");
    hourDiv.classList = "hour-div";

    const time = document.createElement("div");
    time.classList.add("time");

    const icon = document.createElement("img");
    icon.classList.add("icon");

    const temp = document.createElement("div");
    temp.classList.add("temp");

    time.textContent = hour.datetime;
    loadIcon(hour.icon, icon);
    temp.textContent = hour.temp;

    hourDiv.append(time, icon, temp);
    hourly.append(hourDiv);
  }
}

function renderTenDays(obj) {
  const tenDays = document.querySelector(".ten-days");
  tenDays.textContent = "";

  for (let i = 1; i <= 10; ++i) {
    const day = obj.days[i];
    const dayDiv = document.createElement("div");
    dayDiv.classList = "day-div";

    const date = document.createElement("div");
    date.classList.add("date");

    const icon = document.createElement("img");
    icon.classList.add("icon");

    const temp = document.createElement("div");
    temp.classList.add("temp");

    date.textContent = day.datetime;
    loadIcon(day.icon, icon);
    temp.textContent = day.temp;

    dayDiv.append(date, icon, temp);
    tenDays.append(dayDiv);
  }
}
