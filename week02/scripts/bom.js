const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  const inputValue = input.value;

  if (!Boolean(inputValue)) {
    input.focus();
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
  });

  input.focus();
  input.value = "";
});
