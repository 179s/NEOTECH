const burger = document.getElementById("burger");
const hiddenDiv = document.getElementById("hiddenDiv");
const navLinks = document.querySelectorAll("nav ul");
const links = hiddenDiv.querySelectorAll("ul li a");


function isMobile(){
    return window.innerWidth < 768;
}

function resizeHandler(){
    if (!isMobile()){
        burger.classList.remove("active");
        hiddenDiv.classList.remove("active");
    };
}

function navbarHandler(){
    burger.classList.toggle("active");
    if (burger.classList.contains("active")){
        hiddenDiv.classList.add("active");
    } else {
        hiddenDiv.classList.remove("active");
    }
}

burger.addEventListener("click", () => {
    navbarHandler();
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navbarHandler();
    })
});

window.addEventListener("resize", resizeHandler);

