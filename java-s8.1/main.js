const block = document.querySelector('.box')
// window.addEventListener('scroll', () => {
//     block.style.left = window.scrollY + "px"
// })
function moveBlock(){
    const windowHeight = window.innerHeight - block.offsetHeight,
    scrollTop = window.scrollY,
    scrollProcent = scrollTop / windowHeight,
    pathBlock = document.documentElement.clientWidth - block.offsetWidth
    // block.style.left = `${pathBlock * scrollProcent}px`
    block.style.cssText = `
    left: ${pathBlock * scrollProcent}px;
    transform: rotate(${360 * scrollProcent}deg)`;
}
window.addEventListener('scroll',moveBlock)
