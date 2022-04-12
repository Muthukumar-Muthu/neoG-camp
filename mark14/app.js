const form = document.querySelector("form");
const ip_input = document.querySelector("#ip-input");
const ns_input = document.querySelector("#ns-input");
const cp_input = document.querySelector("#cp-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const initalPrice = ip_input.value;
  const currentPrice = cp_input.value;
  const noOfStocks = ns_input.value;
  if (!initalPrice || !currentPrice || !noOfStocks) {
    alert("input invalid");
    return;
  } else {
    const { diff, diffInPer } = calcDiff(initalPrice, noOfStocks, currentPrice);
    let message = "";
    if (diff === 0) {
      message = "No Pain! No Gain!";
      show(message);
    } else if (diff > 0) {
      message = `Your Profit is ${diff} and Profit Percentage is ${diffInPer}%`;
      show(message, "green");
    } else if (diff < 0) {
      message = `Your Loss is ${-diff} and Loss Percentage is ${-diffInPer}%`;
      show(message, "red");
    }
  }
});

function calcDiff(ip, ns, cp) {
  const diff = +((cp - ip) * ns).toFixed(2);
  const diffInPer = +(((cp - ip) / ip) * 100).toFixed(2);
  return { diff, diffInPer };
}
function show(data = "", color = "") {
  const show = document.querySelector(".show");
  show.style.color = color;
  show.innerHTML = data;
}
