// current download selections
function downloadChoice() {
    let userChoice = document.getElementById("choice").value;
    if (userChoice ==="EARHT"){
        console.log('wHY');
        window.open("./books/EARHT.pdf", "Even A Rose Has Thorns",);
    }else if (userChoice === "BL"){
        window.open("./books/BL.pdf", "Black Lotus",);
    }else if (userChoice === "19"){
        window.open("./books/19AHR.pdf", "Even A Rose Has Thorns",);
    }
}

// dropdown menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".menu-button");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
    } else {
        menu.classList.add("showMenu");
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
        menuItem.addEventListener("click", hamburgerToggle);
    }
)

// hamburger animation 
const menuButton = document.querySelector('.menu-button');
let menuOpen = false;

function hamburgerToggle () {
    if(!menuOpen) {
        menuButton.classList.add('open');
        menuOpen = true;
    }else {
        menuButton.classList.remove('open');
        menuOpen = false;
    }
}

menuButton.addEventListener('click',hamburgerToggle);