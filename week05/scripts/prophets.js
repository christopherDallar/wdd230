const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const section = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");

    fullName.textContent = prophet.name;

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name}`); // fill in the blank
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    section.appendChild(fullName); //fill in the blank
    section.appendChild(portrait);

    cards.appendChild(section);
  });
};

const getProphetData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  // console.table(data);
  displayProphets(data.prophets);
};

getProphetData();
