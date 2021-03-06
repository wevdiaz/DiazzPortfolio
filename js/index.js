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

checkPageCurrent(navMenu);

