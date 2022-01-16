
/* Dark mode toggle */

let findDarkButton = document.querySelector("#dark-mode-button")
let darkButton = findDarkButton.addEventListener("click", turnOnDarkMode)

function turnOnDarkMode() {
document.body.classList.toggle("dark-mode-theme")
}
  
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function addRemoveRepsonsive() {
    var topNav = document.getElementById("myTopnav");
    if (topNav.className === "topnav") {
      x.className += " responsive";
    } else {
      topNav.className = "topnav";
    }
  }
