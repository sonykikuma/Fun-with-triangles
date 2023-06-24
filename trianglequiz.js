const submitAnswerBtn= document.querySelector("#submit-answer-btn");
const quizForm=document.querySelector(".quiz-form");
const outputEl= document.querySelector(".output")


const correctAnswers =["90°","right angled"];
outputEl.style.display="none";


const calculateScore=()=>{
    outputEl.style.display="block";

let score = 0;
let index = 0;
const formResults=  new FormData(quizForm);
for (let value of formResults.values()){
    if(value === correctAnswers[index]){
        score=score+1;
    }
    index= index+1;
}
outputEl.innerText=score;
console.log(score)
}

submitAnswerBtn.addEventListener("click",calculateScore)