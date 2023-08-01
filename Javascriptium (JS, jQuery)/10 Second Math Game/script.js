$(document).ready(function () {
  let currentQuestion, interval, timeLeft = 10, score = 0;

  const updateTimeLeft = (amount) => {
    timeLeft += amount;
    $('#time-left').text(timeLeft);
  };

  const updateScore = (amount) => {
    score += amount;
    $('#score').text(score);
  };

  const updateHighScore = () => {
    const currentHighScore = parseInt(localStorage.getItem('highScore')) || 0;
    if (score > currentHighScore) {
      localStorage.setItem('highScore', score);
      $('#high-score').text(score);
    }
  };

  const startGame = () => {
    if (!interval) {
      if (timeLeft === 0) {
        updateTimeLeft(10);
        updateScore(-score);
      }
      interval = setInterval(() => {
        updateTimeLeft(-1);
        if (timeLeft === 0) {
          clearInterval(interval);
          interval = undefined;
          updateHighScore();
        }
      }, 1000);
    }
  };

  const randomNumberGenerator = (size) => Math.ceil(Math.random() * size);

  const questionGenerator = () => {
    const numberLimit = parseInt($('#number-limit').val(), 10);
    const num1 = randomNumberGenerator(numberLimit);
    const num2 = randomNumberGenerator(numberLimit);

    $('#chosen-number-limit').text(numberLimit);

    const additionEnabled = $('#addition').prop('checked');
    const subtractionEnabled = $('#subtraction').prop('checked');
    const multiplicationEnabled = $('#multiplication').prop('checked');
    const divisionEnabled = $('#division').prop('checked');

    const availableTypes = [];
    if (additionEnabled) availableTypes.push('addition');
    if (subtractionEnabled) availableTypes.push('subtraction');
    if (multiplicationEnabled) availableTypes.push('multiplication');
    if (divisionEnabled) availableTypes.push('division');

    const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)];

    const question = {};
    switch (randomType) {
      case 'addition':
        question.answer = num1 + num2;
        question.equation = `${num1} + ${num2}`;
        break;
      case 'subtraction':
        if (num1 >= num2) {
          question.answer = num1 - num2;
          question.equation = `${num1} - ${num2}`;
        } else {
          question.answer = num2 - num1;
          question.equation = `${num2} - ${num1}`;
        }
        break;
      case 'multiplication':
        question.answer = num1 * num2;
        question.equation = `${num1} * ${num2}`;
        break;
      case 'division':
        if (num2 !== 0 && num1 % num2 === 0) {
          question.answer = num1 / num2;
          question.equation = `${num1} / ${num2}`;
        } else {
          question.answer = num1;
          question.equation = `${num1 * num2} / ${num2}`;
        }
        break;
    }
    return question;
  };

  $('#number-limit').on('input', questionGenerator);

  const renderNewQuestion = () => {
    currentQuestion = questionGenerator();
    $('#equation').text(currentQuestion.equation);
  };

  const checkAnswer = (userInput, answer) => {
    if (userInput === answer) {
      renderNewQuestion();
      $('#user-input').val('');
      updateTimeLeft(1);
      updateScore(1);
      updateHighScore();
    }
  };

  $('#high-score').text(localStorage.getItem('highScore') || 0);

  $('#user-input').on('keyup', () => {
    startGame();
    checkAnswer(Number($('#user-input').val()), currentQuestion.answer);
  });

  renderNewQuestion();
});
