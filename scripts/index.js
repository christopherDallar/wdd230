const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🕶️")) {
    main.style.background = "#000";
    main.style.color = "#fff";
    modeButton.textContent = "🔆";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    modeButton.textContent = "🕶️";
  }
});

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

const displayResults = async (data) => {
  const currentTemp = document.querySelector("#weather-info");
  const weatherIcon = document.querySelector("#weather-icon");

  const { main, weather } = data;

  const wIcon = weather[0];
  const desc = wIcon.description;

  const iconSrc = `https://openweathermap.org/img/w/${wIcon.icon}.png`;

  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);

  currentTemp.innerHTML = `${main.temp}&deg;C - ${desc}`;
};

const loadWeatherMap = async () => {
  try {
    const apiKey = "a9cabb47c55030b005e987f2d8194b71";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

    const lat = 10.08541142697288;
    const lon = -69.29168581729152;

    const params = `lat=${lat}&lon=${lon}&units=metric`;

    const reqUrl = `${apiUrl}?appid=${apiKey}&${params}`;
    const resp = await fetch(reqUrl);

    if (!resp.ok) throw Error(resp.text());

    const data = await resp.json();

    displayResults(data);
  } catch (error) {
    console.log(error);
  }
};

loadWeatherMap();
