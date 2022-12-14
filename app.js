// NavBar toggle
const togglebtn = document.getElementById("nav-btn");
const navlinks = document.getElementById("nav-toggle");

togglebtn.addEventListener("click", ()=>{
    navlinks.classList.toggle("active");
} );

// Dark-mode toggle
var a = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) icon.src = "image/sun.png";
    else {
        icon.src = "image/moon.png";
    }
}