const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function getChapterList() {
  return JSON.parse(localStorage.getItem("BOMList"));
}

function setChapterList() {
  localStorage.setItem("BOMList", JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}

function displayList(item) {
  const inputValue = item;

  if (!Boolean(inputValue)) {
    return;
  }

  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");

  li.textContent = inputValue;
  deleteBtn.textContent = "❌";

  li.appendChild(deleteBtn);

  list.appendChild(li);

  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
  });
}

let chaptersArray = getChapterList() || [];

button.addEventListener("click", () => {
  const inputValue = input.value;
  if (inputValue != "") {
    displayList(inputValue);
    chaptersArray.push(inputValue);
    setChapterList();
    input.value = "";
    input.focus();
  }
});

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});
