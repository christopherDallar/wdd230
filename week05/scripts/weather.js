const apiKey = "a9cabb47c55030b005e987f2d8194b71";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const displayResults = async (data) => {
  const { main, weather } = data;

  currentTemp.innerHTML = `${main.temp}&deg;F`;

  const wIcon = weather[0];
  let desc = wIcon.description;

  const iconSrc = `https://openweathermap.org/img/w/${wIcon.icon}.png`;

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);

  captionDesc.textContent = `${desc}`;
};

const loadWeatherMap = async () => {
  try {
    const lat = 10.08541142697288;
    const lon = -69.29168581729152;

    const params = `lat=${lat}&lon=${lon}&unit=imperial`;

    const reqUrl = `${apiUrl}?appid=${apiKey}&${params}`;
    const resp = await fetch(reqUrl);

    if (!resp.ok) throw Error(resp.text());

    const data = await resp.json();

    displayResults(data);

    console.log({ data });
  } catch (error) {
    console.log(error);
  }
};

loadWeatherMap();
