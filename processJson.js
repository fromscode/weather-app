export default async function processJson(weatherJsonPromise) {
  const weatherJson = await weatherJsonPromise;
  const {resolvedAddress, days, latitude, longitude} = weatherJson;
  return {resolvedAddress, days, latitude, longitude}
}