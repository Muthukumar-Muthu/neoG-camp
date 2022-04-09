const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const base = document.querySelector("#base").value;
  const per = document.querySelector("#perpendicular").value;
  if (checkInput(per, base)) {
    alert("check inputs");
  } else {
    const hypo = parseFloat(
      Math.sqrt(Math.pow(per, 2) + Math.pow(base, 2)).toFixed(2)
    );

    alert(`hypo - ${hypo}`);
  }
});

function checkInput(h, b) {
  return h == false || b == false;
}
