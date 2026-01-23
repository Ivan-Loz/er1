// const out1 = document.querySelector(".out1"),
// out2 = document.querySelector(".out2"),
// out3 = document.querySelector(".out3")


// document.addEventListener("keydown",(event)=> {
//     out1.textContent = `code ${event.code}`
//     out2.textContent = `key ${event.key}`
// })
//========================================================


const block = document.querySelector(".block")
const box = document.querySelector(".box")
let x= 0,y=0
document.addEventListener("keyup",(event) => {
    if (x >= 740){
        
    }
    else{
        if (event.key === 'ArrowRight'){
            x +=25;
            box.style.left = x + "px"
        }
        else if(event.key === 'ArrowLeft'){
            x -=25;
            box.style.left = x + "px"
        }  
    }
})