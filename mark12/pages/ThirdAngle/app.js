const generateButton = document.querySelector("#generate");
const firstAngle = document.querySelector("#first-angle");
const secondAngle = document.querySelector("#second-angle");
const thirdAngle = document.querySelector("#third-angle");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const third = thirdAngle.value;
  if (third == false) {
    alert("third angle - invalid");
  } else {
    const a = parseInt(firstAngle.value);
    const b = parseInt(secondAngle.value);
    const c = parseInt(third);
    const sum = a + b + c;
    console.log(sum);
    if (180 === sum) alert("correct");
    else alert("incorrect");
  }
});
generateButton.addEventListener("click", () => {
  setAngles();
});
function setAngles() {
  const max = 178;
  const min = 1;
  const one = parseInt(getNumber(max, min));
  const two = parseInt(getNumber(max - one, min));
  firstAngle.value = one;
  secondAngle.value = two;
}
function getNumber(max, min) {
  return Math.random() * (max - min) + min;
}
function alert(input) {
  const not = document.querySelector(".notification");
  not.style.display = "block";
  not.value = input;
}
