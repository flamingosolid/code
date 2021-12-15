const container = document.getElementById("container");

const list = document.getElementById("list");
const button = document.getElementById("addItem");
const number = document.createElement("div");
container.appendChild(number);
const nameField = document.getElementById("nameField");

function addListName(text) {
  const listName = document.createElement("li");
  listName.innerText = text;
  list.appendChild(listName);

  number.innerText = list.childElementCount + " st namn";
}

const names = ["josef", "johan", "anna", "elin", "thomas"];
for (let i = 0; i < names.length; i++) {
  addListName(names[i]);
}

button.addEventListener("submit", function (event) {
  event.preventDefault();
  if (nameField.value === "") {
    return;
  }
  addListName(nameField.value);
  nameField.value = "";
});
