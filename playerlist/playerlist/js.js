/* ------ RÖR EJ ------ */
function addPlayer(playerName) {
  const list = document.getElementById("players");
  const item = document.createElement("li");

  item.innerText = playerName;

  list.appendChild(item);
}

function log(name, number) {
  console.log(name + number);
}
/* ------ SLUT RÖR EJ ------ */

// Skapa en variabel som innehåller en lista av spelarnamn i form av strängar

// Loopa igenom alla spelare med hjälp av en for-loop och kör funktionen addPlayer med spelarens namn
// https://www.w3schools.com/js/js_functions.asp

const playerNames = ["messi", "ronaldo", "bravo", "puyol", "xavi", "iniesta"];

for (let i = 0; i < playerNames.length; i++) {
  let playerName = playerNames[i];
  if (i > 3) {
    addPlayer(playerName);
  } else if (i > 2) {
    log(playerName, i);
  } else {
    log("goat", 10);
    addPlayer("goat");
  }

  if
  functioner
  for loopar 
  variabler
  data types

}
