const text = document.querySelector("#text");
const inc_font_button = document.querySelector("#increase-size");
const desc_font_button = document.querySelector("#decrease-size");

function getFontSize(obj) {
  const size = +getComputedStyle(obj).fontSize.split("px")[0];
  return size;
}
inc_font_button.addEventListener("click", () => {
  const size = getFontSize(text) + 2;
  console.log(size);
  text.style.fontSize = `${size}px`;
});

desc_font_button.addEventListener("click", () => {
  const size = getFontSize(text) - 2;
  text.style.fontSize = `${size}px`;
});
