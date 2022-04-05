const button = document.querySelector("#submit");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
console.clear();

button.addEventListener("click", () => {
  console.log(input.value);

  setTranslate(input.value);
});

input.addEventListener("input", function chnage(e) {
  output.value = "";

  console.log("input inputed");
});
function setTranslate(value) {
  let translated = null;
  const url = `https://api.funtranslations.com/translate/minion.json?text=${value}`;

  fetch(url)
    .then((res) => {
      if (res.ok) return res.json();
      else throw new Error("Made too many requests wait for 1 hour");
    })
    .then((res) => {
      translated = res.contents.translated;
      output.value = translated;
    })
    .catch((err) => alert(err.message));
}
