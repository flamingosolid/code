(async function () {
  async function fetchQuizData() {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&type=boolean"
    );
    const result = await response.json();
    console.log(result.results);
    return result;
  }

  const data = await fetchQuizData();

  let currentQuestionIndex = -1;
  let correctAnswer = 0;
  let wrongAnswer = 0;

  function updateCorrectAnswer() {
    document.getElementById("correctAnswer").innerHTML = correctAnswer;
  }

  function updateWrongAnswer() {
    document.getElementById("wrongAnswer").innerHTML = wrongAnswer;
  }

  function checkAnswer(choice) {
    if (currentQuestionIndex >= data.results.length) {
      return;
    }
    const currentAnswer = data.results[currentQuestionIndex].correct_answer;
    if (choice === currentAnswer) {
      correctAnswer++;
      updateCorrectAnswer();
    } else {
      wrongAnswer++;
      updateWrongAnswer();
    }
    nextQuestion();
  }

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= data.results.length) {
      return;
    }

    const currentQuestion = data.results[currentQuestionIndex].question;
    document.getElementById("question").innerHTML = currentQuestion;
  }

  nextQuestion();

  document.getElementById("true").addEventListener("click", function () {
    checkAnswer("True");
  });
  document.getElementById("false").addEventListener("click", function () {
    checkAnswer("False");
  });
})();
