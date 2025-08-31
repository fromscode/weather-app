export default async function getWeatherJson(city = "Rome") {
  try {
    const respose = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike%2Chumidity%2Cprecipprob%2Cwindspeed%2Cpressure%2Cvisibility%2Cuvindex%2Cconditions%2Cicon&include=days%2Chours&key=QG7KVPYMWLNGYA7R6NLCECND7&contentType=json`,
    );
    return await respose.json();
  } catch (err) {
    console.log(err);
  }
}
