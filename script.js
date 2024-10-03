const questions= [
  {
      question:"Kedilerin sahip oldukları içgüdüsel avcılık davranışı hangi hayvanlardan kaynaklanır? " ,
      answers:[
        { text: "Köpeklerden", correct: false},
        { text: "Yırtıcılardan", correct: true},
        { text: "Kuşlardan", correct: false},
        { text: "Balıklardan", correct: false},
      ]
  } ,
 
  {
    question:"Bir kedinin ne kadar süreyle uyuduğu ortalama olarak günde kaç saattir?" ,
    answers:[
      { text: "8 saat ", correct: false},
      { text: "12 saat", correct: false},
      { text: "16 saat", correct:  true},
      { text: "20 saat ", correct: false},
    ]
} , 

{
  question:"Hangi kedi ırkı, mavi gözleri ve tüysüz vücut yapısıyla bilinir? " ,
  answers:[
    { text: "Persian ", correct: false},
    { text: " Sphynx ", correct: true},
    { text: " Maine Coon ", correct:  false},
    { text: " Bengal ", correct: false},
  ]
} ,

{
  question:"Kedilerin hangi duyusu, insanlarinkinden çok daha gelişmiştir?  " ,
  answers:[
    { text: " Görme ", correct: false},
    { text: "Dokunma ", correct: false},
    { text: "Koku ", correct:  true},
    { text: "Tat ", correct: false},
  ]
} 


];


const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
currentQuestionIndex=0;
score=0;
nextButton.innerHTML = "Next";
showQuestion();

}

function showQuestion() {
  resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.
question;

currentQuestion.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer.text; 
  button.classList.add("btn");
  answerButtons.appendChild(button);

if(answer.correct){
  button.dataset.correct = answer.correct;
}


  button.addEventListener("click" , selectAnswer);


} );
}
 
/// Burada html kısmında answer 1 answer seceneklerini kaldırıyo ///
/// Yapmasaydık ekrana 8 tane secenek halinde gozukecekti ///

function resetState(){
 nextButton.style.display ="none";
 while(answerButtons.firstChild){
  answerButtons.removeChild(answerButtons.firstChild);
 }
}



function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct ==="true";


/// Dogruysa yesil yanlıs ise cevresi kırmızı olacak 
if(isCorrect){
  selectedBtn.classList.add("correct");
  score++;
}else {
  selectedBtn.classList.add("incorrect");
}

/// bir butona basınca yanlıssa direkt oto olarak  dogru butonu yesil yancak
Array.from(answerButtons.children).forEach(button => {

if(button.dataset.correct === "true"){
  button.classList.add("correct");
}

button.disabled=true;

});
 
nextButton.style.display="block"; //yanlış veya doğru başka butona basmayı engeller

}

function showScore(){
  resetState();
  questionElement.innerHTML = `'You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML="Restart";
  nextButton.style.display="block";
  }
  
  function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
  }
  
  nextButton.addEventListener("click" , ()=> {
  if(currentQuestionIndex < questions.length ) {
  handleNextButton();
  }else{
    startQuiz();
  }
  
  });
  
  
  startQuiz();





