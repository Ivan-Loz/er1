
let text = document.querySelector(".txt"),
    btns = document.querySelectorAll(".btn"),
    title = document.querySelector("h1"),
    img = document.querySelector("img")

    const link = document.createElement("a")
    link.href = "https://www.twitch.tv/lefty_off"
    link.textContent = "lefty_off"
    document.body.prepend(link)
    console.log(link)