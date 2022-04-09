const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const heightInput = document.querySelector("#height");
  const baseInput = document.querySelector("#base");
  const height = heightInput.value;
  const base = baseInput.value;
  if (checkInput(height, base)) {
    alert("check inputs");
  } else {
    const area = parseFloat(((height * base) / 2).toFixed(2));
    alert(`area - ${area}`);
  }
});
function checkInput(h, b) {
  return h == false || b == false;
}
