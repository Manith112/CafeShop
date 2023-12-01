const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode")
})

const menu = document.querySelector(".list");
const menuItems = document.querySelectorAll(".grey");
const hamburger = document.querySelector(".bar");
const closeIcon = document.querySelector(".fa-xmark");
const menuIcon = document.querySelector(".hamburger");

function toggleMenu() {
    if (menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

