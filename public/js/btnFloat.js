
const btnFloat = document.getElementById("btnFloat");

function showBtnFloat() {
  
  if (window.scrollY > 500) {
    btnFloat.classList.add("show");
  }
  else {
    btnFloat.classList.remove("show");
  }

}


window.addEventListener("scroll", showBtnFloat );
