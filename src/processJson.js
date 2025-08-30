export default async function processJson(weatherJsonPromise) {
  try {
    const weatherJson = await weatherJsonPromise;
    const { resolvedAddress, days, latitude, longitude } = weatherJson;
    return { resolvedAddress, days, latitude, longitude };
  } catch (err) {
    console.log(err);
  }
}
