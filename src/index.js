import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/styles.css";

import getWeatherJson from "./styles/getWeather";
import processJson from "./processJson";
import processForm from "./processForm";

console.log("test");

processForm(renderWeather);

async function renderWeather(city) {
  const obj = await processJson(getWeatherJson(city));
  const mainWeather = document.querySelector(".main-weather");
  mainWeather.textContent = obj.days[0].temp;
}
