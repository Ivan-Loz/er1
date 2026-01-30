function myc(par){
    const actSlide = document.querySelector(".act"),
        slide = [...document.querySelectorAll(".pic")],
        currentSlide = slide.indexOf(actSlide)
    let newIndex = currentSlide + par
    if (newIndex < 0) newIndex = slide.length -1 
    if (newIndex >= slide.length)newIndex = 0
    slide[newIndex].classList.add("act")
    actSlide.classList.remove("act")
}
const btns = document.querySelectorAll("button")
btns[1].addEventListener("click",() => myc(1))
btns[0].addEventListener("click",() => myc(-1))