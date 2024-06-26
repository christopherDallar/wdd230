const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#passwordRepeated");
const message = document.querySelector("#formmessage");
const pageRatingElem = document.querySelector("#pageRating");

kp2.addEventListener("focusout", checkSame);

pageRatingElem.addEventListener("change", handleChangePageRating);

// This should be refactored.
function checkSame() {
  if (kp1.value !== kp2.value) {
    message.textContent = "❗Key Phrases DO NOT MATCH!";
    message.style.visibility = "show";
    kp2.style.backgroundColor = "#fff0f3";
    kp2.value = "";
  } else {
    message.style.display = "none";
    kp2.style.backgroundColor = "#fff";
    kp2.style.color = "#000";
  }
}

function handleChangePageRating({ target }) {
  const pageRatingValueElem = document.querySelector("#pageRatingValue");

  pageRatingValueElem.textContent = target.value;
}
