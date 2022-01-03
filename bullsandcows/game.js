function startGame() {
  const secretWords = [
    "ananas",
    "apelsin",
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
    "äpple",
  ];

  /* const secretWords = [
    "apple",
    "watermelon",
    "orange",
    "pear",
    "cherry",
    "strawberry",
    "nectarine",
    "grape",
    "mango",
    "blueberry",
    "pomegranate",
    "carambola",
    "plum",
    "banana",
    "raspberry",
    "mandarin",
    "jackfruit",
    "papaya",
    "kiwi",
    "pineapple",
    "lime",
    "lemon",
    "apricot",
    "grapefruit",
    "melon",
    "coconut",
    "avocado",
    "peach",
  ];*/

  const form = document.getElementById("addItem");
  const guessedWords = document.getElementById("list");
  let secret;
  let maxWrong = 6;
  let mistakes = 0;
  function updatemaxWrong() {
    document.getElementById("maxWrong").innerHTML = maxWrong;
  }
  function updateMistakes() {
    document.getElementById("mistakes").innerHTML = mistakes;
  }

  function newGame() {
    secret = secretWords[Math.floor(Math.random() * secretWords.length)];
    guessedWords.innerHTML = "";
    mistakes = 0;
    updateMistakes();
  }

  updatemaxWrong();

  function makeGuess() {
    const guess = document.getElementById("nameField").value;

    if (guess === null) {
      return;
    }
    const lowerCaseGuess = guess.toLowerCase();
    if (lowerCaseGuess.length !== secret.length) {
      alert("The word needs to be " + secret.length + " letters long");
      return;
    }

    if (lowerCaseGuess === secret) {
      alert("GOOD JOB!");
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

      mistakes++;
      updateMistakes();
      if (mistakes === maxWrong) {
        alert("Game Over");
        newGame();
        return;
      }

      const guessedWord = document.createElement("li");
      guessedWord.innerText =
        guess +
        " - " +
        bulls +
        " letters are on the right position, " +
        cows +
        " letters are in the wrong position";
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
