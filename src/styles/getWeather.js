export default async function getWeatherJson(city = "Kulti") {
  try {
    const respose = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cname%2Clatitude%2Clongitude%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike%2Cdew%2Chumidity%2Cprecipprob%2Csnow%2Cwindspeed%2Cpressure%2Cuvindex&include=days%2Chours&key=QG7KVPYMWLNGYA7R6NLCECND7&contentType=json`,
    );
    return await respose.json();
  } catch (err) {
    console.log(err);
  }
}
