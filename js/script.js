// Togle icon menu bar


// scroll section
window.onscroll = () => {
    // scroll header
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 100)
}