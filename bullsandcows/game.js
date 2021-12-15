function startGame() {
  const secretWords = [
    "ananas",
    /*"apelsin",
    "aprikos",
  "banan",
  "carambola",
  "citron",
  "citrusfrukt",
  "clementin",
  "granatäpple",
  "grapefrukt",
  "kaktusfikon",
  "kumquat",
  "kiwi",
  "lime",
  "mandarin",
  "mango",
  "melon",
  "nektarin",
  "papaya",
  "passionsfrukt",
  "persika",
  "plommon",
  "päron",
  "satsuma",
  "sharon",
  "äpple",*/
  ];
  const form = document.getElementById("addItem");
  const guessedWords = document.getElementById("list");
  let secret;

  function newGame() {
    secret = secretWords[Math.floor(Math.random() * secretWords.length)];
  }

  function makeGuess() {
    const guess = document.getElementById("nameField").value;

    if (guess === null) {
      return;
    }
    const lowerCaseGuess = guess.toLowerCase();
    if (lowerCaseGuess.length !== secret.length) {
      alert("ordet måste vara " + secret.length + " tecken långt");

      return;
    }

    if (lowerCaseGuess === secret) {
      alert("grattis");
      newGame();
    } else {
      let bulls = 0;
      let cows = 0;
      for (let i = 0; i < lowerCaseGuess.length; i++) {
        const currentLetter = lowerCaseGuess[i];
        if (currentLetter === secret[i]) {
          bulls++;
        } else if (secret.includes(currentLetter)) {
          cows++;
        }
      }

      const guessedWord = document.createElement("li");
      guessedWord.innerText =
        guess +
        " - " +
        bulls +
        " exakt antal bokstäver på rätt position, " +
        cows +
        " bokstäver finns i ordet";
      guessedWords.appendChild(guessedWord);
    }
  }

  newGame();

  document.getElementById("hidelist").addEventListener("click", function () {
    if (guessedWords.style.opacity === "0") {
      guessedWords.style.opacity = "1";
    } else {
      guessedWords.style.opacity = "0";
    }
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    makeGuess();
  });
}

startGame();
