// Load saved game state from localStorage
let cookies = parseInt(localStorage.getItem("cookies")) || 0;
let upgradeCost = parseInt(localStorage.getItem("upgradeCost")) || 10;
let autoClickerCost = parseInt(localStorage.getItem("autoClickerCost")) || 50;
let autoClickers = parseInt(localStorage.getItem("autoClickers")) || 0;
let autoClickerInterval = null;

const cookie = document.getElementById("cookie");
const score = document.getElementById("score");
const upgradeButton = document.getElementById("upgrade");
const autoClickerButton = document.getElementById("autoClicker");
const autoStatus = document.getElementById("autoStatus");
const autoClickerAnimation = document.getElementById("autoClickerAnimation");
autoClickerCost = 10
upgradeCost = 10


// Function to update the score and save progress
function updateScore() {
  score.textContent = `Cookies: ${cookies}`;
  localStorage.setItem("cookies", cookies); // Save cookies to localStorage
  localStorage.setItem("upgradeCost", upgradeCost); // Save upgrade cost
  localStorage.setItem("autoClickerCost", autoClickerCost); // Save auto-clicker cost
  localStorage.setItem("autoClickers", autoClickers); // Save number of auto-clickers
}

// Update the displayed cookies on load
updateScore();

cookie.addEventListener("click", () => {
  cookies++;
  updateScore(); // Update and save after each click
});

upgradeButton.addEventListener("click", () => {
  if (cookies >= upgradeCost) {
    cookies -= upgradeCost;
    upgradeCost = Math.round(upgradeCost * 1.5); // Increase cost for the next upgrade
    updateScore(); // Update and save after the upgrade
    upgradeButton.textContent = `Upgrade Click (Cost: ${upgradeCost} cookies)`; // Update button text
  } else {
    alert("Not enough cookies for upgrade!");
    
  }
});

autoClickerButton.addEventListener("click", () => {
  if (cookies >= autoClickerCost) {
    cookies -= autoClickerCost;
    autoClickerCost = Math.round(autoClickerCost * 2); // Increase cost for the next auto-clicker
    autoClickers++;
    updateScore(); // Update and save after purchasing an auto-clicker
    autoStatus.textContent = `Auto-Clickers: ${autoClickers}`;
    autoClickerButton.textContent = `Buy Auto-Clicker (Cost: ${autoClickerCost} cookies)`; // Update button text

    // Show the auto-clicker animation and start auto-clicking
    autoClickerAnimation.style.display = "block";
    if (!autoClickerInterval) {
      autoClickerInterval = setInterval(() => {
        cookies++;
        updateScore(); // Update and save after each auto-clicker click
      }, 1000);
    }
  } else {
    alert("Not enough cookies for auto-clicker!");
    
  }
});
