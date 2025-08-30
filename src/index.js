import "./styles/styles.css";
import "./styles/reset.css";
import getWeatherJson from "./styles/getWeather";

console.log("test");


getWeatherJson("Lisbon").then(console.log)