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
function newGame() {
  const secret = secretWords[Math.floor(Math.random() * secretWords.length)];
  function makeGuess() {
    const guess = prompt(
      "Gissa frukten som är " + secret.length + " bokstäver långt"
    );

    if (guess === null) {
      newGame();
      return;
    }
    const lowerCaseGuess = guess.toLowerCase();
    if (lowerCaseGuess.length !== secret.length) {
      alert("ordet måste vara " + secret.length + " tecken långt");
      makeGuess();
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

      console.log(bulls);
      alert(bulls + " exakt antal träffar, " + cows + " finns i ordet");
      makeGuess();
    }
  }

  makeGuess();
}
newGame();
