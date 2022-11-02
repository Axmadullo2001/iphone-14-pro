const nav = document.querySelector(".nav")
const menu_btn = document.querySelector(".menu-btn")

menu_btn?.addEventListener("click", () => {
    nav?.classList.toggle("menu-open")
})
