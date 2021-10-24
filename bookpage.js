// current download selections
function downloadChoice() {
    let userChoice = document.getElementById("choice").value;
    if (userChoice ==="EARHT"){
        window.open("./books/EARHT.pdf", "Even A Rose Has Thorns",);
    }else if (userChoice === "BL"){
        window.open("./books/BL.pdf", "Black Lotus",);
    }else if (userChoice === "19"){
        window.open("./books/19AHR.pdf", "Nineteen: A Hero's Rise",);
    }else if (userChoice === "CA"){
        window.open("./books/CloningAround.pdf", "Cloning Around",);
    }else if (userChoice === "FL"){
        window.open("./books/ForbiddenLove.pdf", "Forbidden Love",);
    }else if (userChoice === "H1"){
        window.open("./books/Hangman.pdf", "Hangman",);
    }else if (userChoice === "GL"){
        window.open("./books/GrandLibrarian.pdf", "Grand Librarian",);
    }else if (userChoice === "TP"){
        window.open("./books/FatherTomPadilla.pdf", "Tom Padilla: Mark of The Demon Preist",);
    }else if (userChoice === "DB"){
        window.open("./books/DeathBrothers.pdf", "Death Brothers",);
    }else if (userChoice === "ST"){
        window.open("./books/SusanTaki.pdf", "Susan Taki",);
    }else if (userChoice === "HV"){
        window.open("./books/HangmanVengeance.pdf", "Hangman Vengeance",);
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
