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

// load members

const displayMemberCards = (members) => {
  const cardContainer = document.querySelector(".spotlight-members .cards");

  members.forEach((member) => {
    const { address, imageUrl, membershipLevel, name, phone } = member;
    const imgUrl = `images/${imageUrl}`;
    cardContainer.innerHTML += `
      <section class="card">
        <img
          loading="lazy"
          src="${imgUrl}"
          alt="${name}"
          width="750"
          height="500"
        />

        <div class="info">
          <h3>
            ${name}
            <span class="tag-membership tag-${membershipLevel}">${membershipLevel}</span>
          </h3>
          <p>${address}</p>
          <p>${phone}</p>
        </div>
      </section>
    `;
  });
};

const loadMembers = async () => {
  try {
    const reqUrl = `data/spotlightMembers.json`;
    const resp = await fetch(reqUrl);

    if (!resp.ok) throw Error(resp.text());

    const data = await resp.json();

    displayMemberCards(data.members);
  } catch (error) {
    console.log(error);
  }
};

loadMembers();

const showBanner = () => {
  const bannerElem = document.querySelector("#chamber-meet-banner");

  const dayWeek = new Date().getDay();

  if (dayWeek >= 1 && dayWeek <= 3) {
    bannerElem.classList.add("show-banner");
  }
};

showBanner();
