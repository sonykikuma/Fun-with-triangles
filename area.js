const inputs= document.querySelectorAll(".input")
const areaBtn= document.querySelector(".area-triangle-btn")
const outputEl= document.querySelector(".output")


outputEl.style.display="none";


const baseHeightMul=(base,height)=>{
const mulOfsides= base * height;
return mulOfsides;
}

function computeAreaofTriangle(){
    outputEl.style.display="block";

    const mulOfsides= baseHeightMul(Number(inputs[0].value), Number(inputs[1].value));
console.log(mulOfsides)
const triangleArea= mulOfsides/2;
console.log(triangleArea)
outputEl.innerText= "Area of a Triangle is "+ triangleArea+"sq.cm" 

}

areaBtn.addEventListener("click", computeAreaofTriangle)