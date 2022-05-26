const API_KEY = "452a04703eaa4b53910140404222605";

const getTodaysWeather = async () => {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`
  );

  return await response.json();
};

export { getTodaysWeather };
