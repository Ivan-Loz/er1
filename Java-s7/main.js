const block = document.querySelector(".block")
const title = document.querySelector(".title")

// document.addEventListener('click',(event) => {
//     title.style.color = "green"
//     title.textContent += `${event.type}`
// })

// document.addEventListener('mouseup',(event) => {
// title.textContent += `${event.type}`
// block.style.backgroundColor = "green"
// })

// document.addEventListener('mousedown',(event) => {
// title.textContent += `${event.type}`
// block.style.backgroundColor = "red"
// })

//================================================================
// document.addEventListener("mouseup",(event) => {
// //    let mas = event.button
// //     if (mas === 0){
// //         title.style.color = "green"
// //     }
// //     else if (mas === 1){
// //         title.style.color = "red"
// //     }
// //     else if (mas === 2){
// //         title.style.color = "blue"
// //     }
//     if(event.altKey){
//         title.textContent += "press ALT"
//     }
//     else{
//         title.textContent += "error"
//     }
// })

//===============================================

// document.addEventListener("mousemove",(event) => {
//     title.textContent = `X= ${event.clientX}, Y= ${event.clientY}`
// })

//=================================================
// document.addEventListener("mouseover",(event) => {
//     title.textContent = `ушли с ${event.relatedTarget.tagName},пришли на ${event.target.tagName}`   
// })

//-----------------------------------------------------------------------------------------------------------\
// document.addEventListener("wheel",(event) => {
//     console.log(event.deltaY)
// })
//==================================================================================
// document.addEventListener("dblclick",(event) => {
//     block.style.backgroundColor = "green"
// })
// document.addEventListener("click",(event) => {
//     block.style.backgroundColor = "black"
// })
//==================================================================================
// const btn =  document.querySelector(".btn")
// function getRandomHexColor() {
//     return Math.floor(Math.random() * 255 -1 +1)+1;
// }
// btn.addEventListener("click",() => {
//     block.innerHTML += `<div class = 'box' style = 'background-color: rgb( ${getRandomHexColor()},${getRandomHexColor()},${getRandomHexColor()})'></div>`
// })
//========================================================================================================

