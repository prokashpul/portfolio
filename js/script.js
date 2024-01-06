// Togle icon menu bar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navlink = document.querySelector(".nav-links");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active")
}

// scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");
window.onscroll = () => {
    // scrool active
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(
                links => {
                    links.classList.remove("active");
                    document.querySelector("nav a[href*=" + id + "]").classList.add("active")
                }
            )
        }
    })


    // scroll header
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 100);

    // remove scrole active and icon
    menuIcon.classList.remove("bx-x")
    navbar.classList.remove("active")
}