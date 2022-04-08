document.querySelector(".year").innerText = new Date().getFullYear();

const form = document.querySelector("form");
const dateInput = document.querySelector("#date");
const numberInput = document.querySelector("#number");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitHandler();
});

function submitHandler() {
  let date = dateInput.value;
  let number = numberInput.value;
  if (!date || !number) {
    alert("Enter both Inputs");
    return;
  }
  number = +number;
  date = parsedDate(date);
  if (!checkInput(date, number)) {
    alert("Input Invalid");
  } else {
    const sumOfDate = getSumOfDate(date);

    if (sumOfDate % number === 0) {
      alert(`${number} is Lucky number🙂🙂`);
    } else {
      alert(`${number} is not Lucky! so sad😞😒`);
    }
  }
}

function getSumOfDate(date = 0) {
  let sum = 0;

  while (date > 0) {
    const digit = date % 10;
    date = Math.trunc(date / 10);
    sum += digit;
  }

  return sum;
}

function parsedDate(date) {
  return +date.replaceAll("-", "");
}

function checkInput(date, num) {
  if (isNaN(date) || isNaN(num)) return false;
  else return true;
}

function alert(d) {
  const notification = document.querySelector(".notification");
  notification.innerHTML = "";
  notification.innerText = d;
}
