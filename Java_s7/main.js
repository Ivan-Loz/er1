const btns = document.querySelectorAll(".btn"),
    tabs = document.querySelectorAll(".item"),
    menu = document.querySelector(".menu")

function hiddenTabs(){
tabs.forEach((item) => {
    item.classList.add("hidden")
    item.classList.remove("show")
})    
btns.forEach((item) =>{
    item.classList.remove("act")
})
}
function showTab(i){
tabs[i].classList.remove("hidden")
tabs[i].classList.add("anime","show")
btns[i].classList.add("act")
}
hiddenTabs()
showTab(1)

menu.addEventListener('click',(event)=>{
    let target = event.target
    if(target.classList.contains("btn")){
        btns.forEach((item,i) => {
            if(item === target){
                hiddenTabs()
                showTab(i)  
            }
        })
    }
})