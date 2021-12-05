
let findDarkButton = document.querySelector("#dark-mode-button")
let darkButton = findDarkButton.addEventListener("click", turnOnDarkMode)

function turnOnDarkMode() {
document.body.classList.toggle("dark-mode-theme")
}
  

