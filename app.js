// JS för huvudsidan:

// Hämta meny-innehållet
const menuContentEl = document.getElementById("myDropDown");
// Hämta knappen från HTML
const dropBtnEl = document.getElementById("myBtn");

// Funktion som ändrar synligheten av knappen
function dropdownMenu() {
    menuContentEl.classList.toggle("changeDisplay");
}

// Använd funktionen som utför dropdownMenu() vid klick av knapp
dropBtnEl.addEventListener('click', dropdownMenu);


// JS för bokningssidan:





// JS för kontaktsidan:

