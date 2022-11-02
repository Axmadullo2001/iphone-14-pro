const nav = document.querySelector(".nav")
const menu_btn = document.querySelector(".menu-btn")

menu_btn?.addEventListener("click", () => {
    nav?.classList.toggle("menu-open")
    if (nav?.classList.contains("menu-open")) {
        document.body.style.overflow = "hidden"
    }else {
        document.body.style.overflow = "auto"
    }
})

