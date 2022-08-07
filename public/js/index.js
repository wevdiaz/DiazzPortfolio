function getYearCurrent() {
    const yearFooter = document.getElementById("yearCurrent");
    const now = new Date();
    const year = now.getFullYear();

    yearFooter.textContent = year;
}

getYearCurrent();

const navMenu = document.querySelectorAll(".menu li a");

function checkPageCurrent(links) {
    const urlPage = document.location.pathname.replace("/", "").split(".")[0]; 
    
    for (let link of links) {
        
        const nameLink = link.innerText.toLocaleLowerCase();
        
            if (urlPage === nameLink) {
                link.className = "active";
            }
            else {
                link.className = ""
            }        
    }
}

const navMenuMobile = document.querySelector("nav .menu-mobile");

function openMenuMobile() {
    const menu = document.querySelector("nav .menu");

    menu.classList.add("active");
}

navMenuMobile.addEventListener("click", openMenuMobile );

checkPageCurrent(navMenu);

const btnDarkMode = document.querySelector(".dark-mode input[name='darkmode']");

function saveTheme(body) {
    
    if(body.classList.contains("dark")) {
        localStorage.setItem("darkmodethemez",1);
    } else {
        localStorage.removeItem("darkmodethemez");
    }
}

function loadTheme() {
    const theme = localStorage.getItem("darkmodethemez");

    if (theme) {
        document.querySelector("body").classList.add("dark");
    }
}

function changeTheme() {
    const body = document.querySelector("body");
    body.classList.toggle("dark");

    saveTheme(body);
}

btnDarkMode.addEventListener("click", changeTheme );
loadTheme();

