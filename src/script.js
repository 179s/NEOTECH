const menuBtn = document.getElementById("menuBtn");
const hiddenDiv = document.getElementById("hiddenDiv");
const navLinks = document.getElementById("navLinks");

let moved = false;

function resetCheckbox() {
    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        checkbox.checked = false;
    });
}

function isMobile() {
    return window.innerWidth < 768;
}

window.addEventListener("load", resetCheckbox);

document.getElementById("parameters").addEventListener("change", () => {
    hiddenDiv.classList.toggle("active");
});
