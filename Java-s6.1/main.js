const div1 = document.querySelector("#div1")
let isDrag = false
div1.addEventListener("mousedown",() => {isDrag = true})
div1.addEventListener("mouseup",() => {isDrag = false})

document.addEventListener("mousemove",(event) => {
    if (isDrag){
    div1.style.left = (event.clientX - 50)+ "px"
    div1.style.top = (event.clientY -50)+ "px"
    }   
})