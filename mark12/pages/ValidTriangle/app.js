const form = document.querySelector("#form-validate");
const button = document.querySelector("button");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  let sum = 0;
  for (let key of formData.values()) {
    if (!checkInput(key)) {
      alert("invalid input");
      return;
    } else {
      sum += parseFloat(key);
    }
  }
  if (sum === 180) alert("valid Triangle");
  else alert("invalid triangle");
});

const checkInput = (...number) => {
  number.forEach((num) => {
    if (isNaN(num)) {
      return false;
    }
  });
  return true;
};
