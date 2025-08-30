import "./styles/styles.css";
import "./styles/reset.css";
import getWeatherJson from "./styles/getWeather";
import processJson from "../processJson";
import processForm from "../processForm";

console.log("test");

async function displayWeather(city = "Rome") {
  const obj = await processJson(getWeatherJson(city));
  console.log(obj);
}

processForm(displayWeather);
