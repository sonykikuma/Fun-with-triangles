const btnIstriangle=document.querySelector(".is-triangle")
const inputs=document.querySelectorAll(".angle-input")
const outputEl= document.querySelector("#output")


outputEl.style.display="none";


function sumOfAngles(angle1, angle2, angle3){
    outputEl.style.display="block";


const sumAngles= angle1+ angle2 + angle3;
return sumAngles
}
const isTriangle=()=>{
    const sumAngles = sumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))
if(sumAngles ===180){
    //console.log("Yay, angles form a triangle")
outputEl.innerText= "Yay, angles form a triangle"

} else {
    //console.log("oh no! angles dont form a triangle")
    outputEl.innerText="oh no! angles dont form a triangle"
}

}

btnIstriangle.addEventListener("click",isTriangle)