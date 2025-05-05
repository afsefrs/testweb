let cookies = 0;
const score = document.getElementById("score");
const cookie = document.getElementById("cookie");

cookie.addEventListener("click", () => {
  cookies++;
  score.textContent = `Cookies: ${cookies}`;
});
