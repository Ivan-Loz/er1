const btn = document.querySelectorAll(".btn"),
    slider = document.querySelector(".slider")
let step = 0
btn[1].addEventListener("click",()=>{
step += 500
if (step > 1500){
    step = 0
    slider.style.left = -step + "px"
}
else{
slider.style.left = -step + "px"
}

})
btn[0].addEventListener("click",()=>{
step -= 500
if (step < 0){
    step = 1500
    slider.style.left = -step + "px"
}
else{
slider.style.left = -step + "px"
}
})