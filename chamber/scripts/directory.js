const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

const displayMemberCards = (members) => {
  const gridContainer = document.querySelector(".directory .grid");

  members.forEach((member) => {
    const { address, imageUrl, membershipLevel, name, phone, url } = member;
    const imgUrl = `images/${imageUrl}`;
    gridContainer.innerHTML += `
      <section>
        <img
          src="${imgUrl}"
          alt="${name}"
        />
        <h3>${name}</h3>
        <p>Address: ${address}</p>
        <p>Phone: ${phone}</p>
        <p>Member Level: ${membershipLevel}</p>
        <a
          href="${url}"
          target="_blank"
        >
        ${url}
        </a>
      </section>
    `;
  });
};

const loadMembers = async () => {
  try {
    const reqUrl = `https://christopherdallar.github.io/wdd230/chamber/data/members.json`;
    const resp = await fetch(reqUrl);

    if (!resp.ok) throw Error(resp.text());

    const data = await resp.json();

    displayMemberCards(data.members);
  } catch (error) {
    console.log(error);
  }
};

loadMembers();
