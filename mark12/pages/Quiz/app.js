const form = document.querySelector("form");

const ans = ["right", "acute", "Equilateral-triangle"];
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  let i = 0,
    score = 0;
  for (const answer of formData.values()) {
    if (ans[i++].toLowerCase() === answer.toLowerCase()) score++;
  }
  alert(score);
});

function alert(score) {
  const data = "Your score is - " + score;
  const not = document.querySelector(".notification");
  not.style.display = "block";
  not.value = data;
}
