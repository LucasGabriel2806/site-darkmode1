let icon = document.getElementById("icon");
let dark_mode = false;

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png"; 
    } else {
        icon.src = "images/moon.png";
    }
}