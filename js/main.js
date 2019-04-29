
const connectColor = document.querySelectorAll(".aside__menu_connect_color");
const aside__menu = document.querySelector(".aside__menu");

aside__menu.addEventListener("click", event => {
    if (event.target.classList.contains("aside__menu_connect_color")) {
        connectColor.forEach(l => l.classList.remove("aside__menu_changeColor"));
        event.target.classList.add("aside__menu_changeColor");
    }
});

const line = document.querySelectorAll(".header-menu__line");
const headerMenu = document.querySelector(".header-menu");

headerMenu.addEventListener("click", event => {
    if (event.target.classList.contains("header-menu__line")) {
        line.forEach(l => l.classList.remove("header-menu__line_active"));
        event.target.classList.add("header-menu__line_active");
    }
});


