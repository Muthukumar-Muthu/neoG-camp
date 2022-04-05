const inputDate = document.getElementById("date");
const number = document.getElementById("number");
const check = document.getElementById("check");
const result = document.getElementById("result");
const showData = document.createElement("H1");
const img = document.createElement("IMG");

check.addEventListener("click", checkLucky);
number.addEventListener("focusout", checkNumber);
number.addEventListener("focusin", enable);

function checkLucky() {
    showData.innerText = "";

    let ans = "";
    checkNumber();
    let n = Number.parseInt(number.value);
    if (parseDate(inputDate.value) % n == 0) {
        show(1);
        console.log(true);
    } else {
        show(0);
        console.log(false);
    }
}

function parseDate(date) {
    const dateArray = date.split("");
    let sum = 0;
    for (let i = 0; i < dateArray.length; i++) {
        if (Number.isInteger(Number.parseInt(dateArray[i]))) {
            sum += Number.parseInt(dateArray[i]);
        }
    }
    return sum;
}

function checkNumber() {
    let n = number.value;
    if (n == "" || Number.parseInt(n) < 0) check.setAttribute("disabled", "1");
}

function enable() {
    check.removeAttribute("disabled");
}

function show(data) {
    showData.innerText = "";
    let t = "";
    let src = "";
    if (data == 1) {
        t = "You are lucky";
        src = "RecentHighCreature.gif";
    } else {
        t = "You are not lucky";
        src = "bad-luck-host.gif";
    }
    img.setAttribute("src", src);
    result.append(img);
    const text = document.createTextNode(t);
    showData.append(text);
    result.append(showData);
}