// // let title = document.getElementsByTagName("h1")
// // allBtn = document.getElementsByClassName("btn")
// // console.log(title)
// // console.loh(allBtn)
// //===============================================
// console.log(text)
// // console.log(btns)

// title.textContent = "Пока!!!!!!!!!!!!!!!"
// text.style.fontSize = "25px"

// // btns[0].style.backgroundColor = "green"

// // for (let i = 0;i < btns.length;i++){
// //     btns[i].style.backgroundColor = "green"
// // }

// // btns.forEach(item => item.style.backgroundColor = "green")

// // btns[0].addEventListener("click",() => {
// //     title.style.color = "red"
// // })
// // btns[1].addEventListener("click",() => {
// //     title.style.color = "black"
// // })
// //---------------------------------------------------
// // btns[0].addEventListener("click",()=>{
// //     title.classList.add("active")
// // })
// // btns[1].addEventListener("click",() => {
// //     title.classList.remove("active")
// // })


// // btns[0].addEventListener("click",()=>{
// //     title.classList.toggle("active")
// // })
// //======================================================


// // btns[0].addEventListener("click",()=>{
// //     img.classList.toggle("imgg")
// // })

// //======================================================

// btns[1].addEventListener("click",()=>{
//     img.remove()
// })
//===========================================================================
let text = document.querySelector(".txt"),
    btns = document.querySelectorAll(".btn"),
    title = document.querySelector("h1"),
    img = document.querySelector("img")

    const link = document.createElement("a")
    link.href = "https://www.twitch.tv/lefty_off"
    link.textContent = "lefty_off"
    document.body.prepend(link)

    let block = document.querySelector(".block")

    // block.innerHTML += "<a href = 'https://github.com/Ivan-Loz/er1/tree/main/LEFTY_OFF'>";

    

    console.log(link)