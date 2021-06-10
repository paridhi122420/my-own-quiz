
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "what is paridhi's favourite desert ",
      answers: {
        a: "icecream ",
        b: "choclate ",
        c: "both "
      },
      correctAnswer: "c"
    },
    {
      question: "do paridhi cook often ",
      answers: {
        a: "no ",
        b: "yes ",
        c: "sometimes "
      },
      correctAnswer: "c"
    },
    {
      question: "which is paridhi's favourite band",
      answers: {
        a: "bts ",
        b: "blackpink",
        c: "one direction ",
        d: "both a and b "
      },
      correctAnswer: "d"
    },
    {
      question: "how many siblings does paridhi have ",
      answers: {
        a: "1 ",
        b: "2",
        c: "3 ",
        d: "4 "
      },
      correctAnswer: "b"
    },
    {
      question: "what is parihdi's mom name ",
      answers: {
        a: "pinky  ",
        b: "ashita ",
        c: "kanchan ",
        d: "monika"
      },
      correctAnswer: "a"
    },
    {
      question: "Paridhi's favurite game?",
      answers: {
        a: "tennis",
        b: "bandminton",
        c: "basketball",
        d: "football "
      },
      correctAnswer: "b"
    },
    {
      question: "What would Paridhi prefer?",
      answers: {
        a: "both a and c ",
        b: "text",
        c: "calls ",
        d: "neither "
      },
      correctAnswer: "a"
    },
    {
    },
     {
      question: "Type of songs Paridhi like?",
      answers: {
        a: "2020's",
        b: "1990's",
        c: "both ",
        d: "neither "
      },
      correctAnswer: "c"
    },
    {
      question: "paridhi's favourite food ?",
      answers: {
        a: "burger",
        b: "pizza",
        c: "fries ",
        d: "neither "
      },
      correctAnswer: "b"
    },
    {
      question: "What season is Paridhi's  favorite?",
      answers: {
        a: "autum",
        b: "winter",
        c: "summer ",
        d: "rainy "
      },
      correctAnswer: "c"
    },
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
;