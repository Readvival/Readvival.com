     // Questionaire
     let prog = document.getElementById("Prog")
     let feedback = document.getElementById("feedbackpage")
const quizData = [
  {
    question: "1. Which of the following sentences contains a verb in the past tense?",
    a: "A) She runs to the store.",
    b: "B) He will eat dinner later.",
    c: "C) They watched a movie last night.",
    d: "D) I am writing a letter.",
    correct: "c"
  },
  {
    question: "2. Which of the following sentences includes a verb in the present continuous tense?",
    a: "A) She wrote an email.",
    b: "B) He is studying for his exam.",
    c: "C) They watched a movie last night.",
    d: "D) I am writing a letter.",
    correct: "b"
  },
  {
    question: "3. Identify the verb form used in the following sentence: 'She has been reading for two hours.'",
    a: "A) Simple present",
    b: "B) Present perfect",
    c: "C) Present continuous",
    d: "D) Present perfect continuous",
    correct: "d"
  },
  {
    question: "4. Which of the following sentences has a verb in the future perfect tense?",
    a: "A) By next year, I will have graduated from college.",
    b: "B) I am going to the store.",
    c: "C) She has finished her homework.",
    d: "D) They were watching TV last night.",
    correct: "a"
  },
  {
    question: "5. Choose the correct form of the verb to complete the sentence: 'My brother and I ___ going to the park tomorrow.'",
    a: "A) am",
    b: "B) is",
    c: "C) are",
    d: "D) be",
    correct: "c"
  },
  {
    question: "6. Which sentence contains a verb in the present perfect tense?",
    a: "A) She had eaten breakfast.",
    b: "B) They will travel to Japan next year.",
    c: "C) He has lived here for five years.",
    d: "D) I am reading a book.",
    correct: "c"
  },
  {
    question: "7. Identify the verb form used in the following sentence: 'We were walking in the park.'",
    a: "A) Simple past",
    b: "B) Past continuous",
    c: "C) Present perfect continuous",
    d: "D) Future continuous",
    correct: "b"
  },
  {
    question: "8. Which of the following sentences has a verb in the simple future tense?",
    a: "A) She had finished her work.",
    b: "B) I will visit my grandparents next week.",
    c: "C) He is reading a novel.",
    d: "D) They have been studying for the test.",
    correct: "b"
  },
  {
    question: "9. Choose the correct form of the verb to complete the sentence: 'He ___ already eaten lunch.'",
    a: "A) has",
    b: "B) have",
    c: "C) had",
    d: "D) is",
    correct: "a"
  },
  {
    question: "10. Which sentence contains a verb in the past perfect tense?",
    a: "A) They have just arrived.",
    b: "B) I had finished my homework before dinner.",
    c: "C) She will be studying later.",
    d: "D) We are going to the party.",
    correct: "b"
  },
  {
    question: "11. Identify the verb form used in the following sentence: 'They have been traveling for hours.'",
    a: "A) Present perfect",
    b: "B) Past continuous",
    c: "C) Present perfect continuous",
    d: "D) Future perfect",
    correct: "c"
  },
  {
    question: "12. Which of the following sentences includes a verb in the past continuous tense?",
    a: "A) She writes a letter.",
    b: "B) They were watching a movie.",
    c: "C) He will have completed the task.",
    d: "D) I am going to the market.",
    correct: "b"
  },
  {
    question: "13. Choose the correct form of the verb to complete the sentence: 'By the time she arrives, we ___ already left.'",
    a: "A) has",
    b: "B) have",
    c: "C) had",
    d: "D) will have",
    correct: "d"
  },
  {
    question: "14. Which of the following sentences has a verb in the simple present tense?",
    a: "A) They are playing soccer.",
    b: "B) She will bake a cake.",
    c: "C) I visit my friend every weekend.",
    d: "D) We were singing a song.",
    correct: "c"
  },
  {
    question: "15. Identify the verb form used in the following sentence: 'I will be meeting him tomorrow.'",
    a: "A) Simple future",
    b: "B) Future continuous",
    c: "C) Present perfect",
    d: "D) Past continuous",
    correct: "b"
  }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
let scores = document.getElementById("scores");
const choice = document.getElementById("listofchoice")
let progres = 0;
let currentQuiz = 0;
let score = 0;
loadQuiz();
    function loadQuiz() {
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
  progres++
  prog.innerHTML = progres;
  
   
  }
  function deselectAnswer() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer = null;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
 function handleAnswerFeedback(isCorrect, selectedAnswerId) {
    const selectedAnswerEl = document.getElementById(selectedAnswerId).parentElement;
    if (isCorrect) {
        selectedAnswerEl.style.background = "#5DFF82";
    } else {
        selectedAnswerEl.style.background = "#FF4651";
    }
}

choice.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        const isCorrect = answer === quizData[currentQuiz].correct;
        if (isCorrect) {
            score++;
            localStorage.setItem("Easyscore", score);
        }
        handleAnswerFeedback(isCorrect, answer);
        scores.innerHTML = score;
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            setTimeout(() => {
                // Clear previous feedback and load the next question
                document.querySelectorAll('.choices li').forEach(li => {
                    li.style.background = "#2E82FF";
                });
                loadQuiz();
            }, 400); // Show feedback for 1 second before moving to the next question
        } else {
            setTimeout(() => {
                quiz.innerHTML = `
                    <h4>You Scored ${score}/ ${quizData.length} </h4>
                    <button onclick="window.location.assign('Easy.html')">Reset</button>
                `;
                 document.querySelectorAll('.choices li').forEach(li => {
                    li.style.background = "#2E82FF";
                    })
                  choice.style.display = "none";
                  if (score == 1 || score == 2 || score == 3){
                      feedback.style.display = "block";
}
                 if (score == 5){
                      feedback.innerHTML = `
                        <h4>You did a good job</h4>
                      `;
                      feedback.style.display = "block";
}
                   
            }, 400); // Show feedback for 1 second before ending the quiz
        }
    }
});
   // for quit btn
     document.getElementById("quit").addEventListener("click" , () => {
       window.location.assign("index.html")
   })
      
      //for timer
      let time = 0;
      setInterval((Time),1000);
    function Time(){
    time++;
   document.getElementById("timer").textContent = time ;
}
    