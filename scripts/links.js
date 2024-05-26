const baseURL = window.location.href.slice(0, window.location.href.length - 1);

const displayLinks = (weekLinksData) => {
  const weekLinks = document.querySelector("#weekLinks");

  weekLinksData.forEach((weekLinkData) => {
    const { links, week } = weekLinkData;

    const divElem = document.createElement("div");

    divElem.innerHTML = `${week}:`;

    links.forEach((link, idx) => {
      const { title, url } = link;

      divElem.innerHTML += `
        <a href='${url}'>${title}</a>
      `;

      if (idx < links.length - 1) {
        divElem.innerHTML += `
          |
        `;
      }
    });

    weekLinks.append(divElem);
  });
};

const loadWeekMenuLinks = async () => {
  try {
    const linksURL = `${baseURL}/data/links.json`;

    const resp = await fetch(linksURL);

    if (!resp.ok) throw Error(resp.text());

    const data = await resp.json();

    displayLinks(data.weeks);
  } catch (error) {
    console.log(error);
  }
};

loadWeekMenuLinks();
