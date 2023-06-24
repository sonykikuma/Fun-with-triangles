const sides= document.querySelectorAll(".side-input")
const outputEl= document.querySelector(".output")
const hypotenuseBtn =document.querySelector("#hypotenuse-btn")

outputEl.style.display="none";

function calculateSumOfsquares(a,b){
    outputEl.style.display="block";
  
const sumOfsquares= a*a + b*b;
//console.log(sumOfsquares);
return sumOfsquares;
}

function calculateHypotenuse(){
const sumOfsquares= calculateSumOfsquares(Number(sides[0].value), Number(sides[1].value))// typecasting
const lengthOfhypotenuse= Math.sqrt(sumOfsquares);
console.log(lengthOfhypotenuse)
outputEl.innerText= "The length of hypotenuse is " +lengthOfhypotenuse
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)

