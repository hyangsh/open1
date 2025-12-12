export default async function main() {
 
const menuitems = document.querySelectorAll(".menu-item");
let currentIndex = 0;
const menu = document.getElementById("main-menu");
const creditpage= document.getElementById("credit-page");
const optionpage= document.getElementById("option-page");
const gameScreen= document.getElementById("game-screen");
let currentPage=:"menu";
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        menuitems[currentIndex].classList.remove("select");
       console.log("Up arrow pressed");
       currentIndex--;
       if(currentIndex < 0){
        currentIndex = 2
       }
      }
    else if (e.key === "ArrowDown") {
        menuitems[currentIndex].classList.remove("select");
        console.log("Down arrow pressed");
        currentIndex++;
    currentIndex = currentIndex % 4;
      }
     menuitems[currentIndex].classList.add("select");
    console.log("currentIndex" );
}
    );
     
}