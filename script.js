const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hot Mail", "How to Make Links", "None of the above"],
      answer: 0
    },
    {
      question: "What is the correct syntax for referring to an external script called 'abc.js'?",
      options: ["<script src='abc.js'>", "<script name='abc.js'>", "<script href='abc.js'>", "<script link='abc.js'>"],
      answer: 0
    },
    {
      question: "How do you write 'Hello World' in an alert box?",
      options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
      answer: 3
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById('question').textContent = q.question;
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach((btn, i) => btn.textContent = q.options[i]);
  }
  
  function checkAnswer(index) {
    const correct = quizData[currentQuestion].answer;
    if (index === correct) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong!");
    }
    document.getElementById('score').textContent = "Score: " + score;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      document.getElementById('quiz-box').innerHTML = "<h2>Quiz Completed!</h2><p>Your score: " + score + "</p>";
    }
  }
  
  window.onload = loadQuestion;
  
