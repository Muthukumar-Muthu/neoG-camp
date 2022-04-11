const dateInput = document.querySelector("#date");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let date = dateInput.value;
  //2022-03-12
  if (!date) {
    showOutput("Check date");
    warning();
    return;
  }
  const dateArray = date.split("-");
  date = {
    year: +dateArray[0],
    month: +dateArray[1],
    day: +dateArray[2],
  };
  console.log(date);
  let p = 0,
    n = 0,
    nOutputDate = {},
    pOutputDate = {};
  const nextDate = nextDateParent(date);
  const perviousDate = perviousDateParent(date);
  let output = ``;
  //forward
  while (1) {
    const nextDay = nextDate();
    const isPalindrome = isAllDatesPalindrome(nextDay);
    if (isPalindrome) {
      const diff = dateDiff(nextDay, date);
      n = diff;
      nOutputDate = nextDay;
      break;
    }
  }
  //backward
  while (1) {
    const nextDay = perviousDate();
    const isPalindrome = isAllDatesPalindrome(nextDay);
    if (isPalindrome) {
      const diff = dateDiff(nextDay, date);
      p = diff;
      pOutputDate = nextDay;
      break;
    }
  }
  if (p > n) {
    console.log(n, nOutputDate);
    output = `The nearest palindrome date is ${dateToOutputForm(
      nOutputDate
    )}, you was ahead by ${n} ${n === 1 ? "day" : "days"}.`;
  } else if (p === n) {
    output = `ay! Your birthday is palindrome!`;
    console.log(n, nOutputDate);
  } else {
    output = `The nearest palindrome date is ${dateToOutputForm(
      pOutputDate
    )}, you missed by ${p}  ${n === 1 ? "day" : "days"}.`;
    console.log(p, pOutputDate);
  }
  showOutput(output);
});
function warning() {
  document.querySelector("input").style.border = "thick solid red";
  setTimeout(() => {
    showOutput("");
    document.querySelector("input").style.border = "";
  }, 1000);
}
function dateToOutputForm({ day, year, month }) {
  return `${day}-${month}-${year}`;
}
function showOutput(display) {
  document.querySelector(".notification").innerHTML = display;
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
function checkPalindrome(str = "") {
  return str === reverseString(str);
}

function dateToString(date) {
  const { day, month, year } = date;
  return {
    day: numToStr(day),
    month: numToStr(month),
    year: numToStr(year),
  };
}
function numToStr(input) {
  return input < 10 ? "0" + input : "" + input;
}
function getAllDateFormats(dat) {
  let date = dateToString(dat);
  let ddmmyyyy = date.day + date.month + date.year;
  let mmddyyyy = date.month + date.day + date.year;
  let yyyymmdd = date.year + date.month + date.day;
  let ddmmyy = date.day + date.month + date.year.slice(-2);
  let mmddyy = date.month + date.day + date.year.slice(-2);
  let yyddmm = date.year.slice(-2) + date.day + date.month;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}

function isAllDatesPalindrome(date) {
  const listOfFormats = getAllDateFormats(date);
  let isPalindrome = false;
  for (let i = 0; i < listOfFormats.length; i++) {
    if (checkPalindrome(listOfFormats[i])) {
      isPalindrome = true;
      break;
    }
  }
  return isPalindrome;
}

function nextDateParent(date) {
  const { year, month, day } = date;
  let i = 0;
  return function () {
    const nextDay = simpleToNative({ year, month: month, day: day + i });
    i++;

    return {
      day: nextDay.getDate(),
      year: nextDay.getFullYear(),
      month: nextDay.getMonth() + 1,
    };
  };
}
function perviousDateParent(date) {
  const { year, month, day } = date;
  let i = 0;
  return function () {
    const nextDay = simpleToNative({ year, month: month, day: day - i });
    i++;

    return {
      day: nextDay.getDate(),
      year: nextDay.getFullYear(),
      month: nextDay.getMonth() + 1,
    };
  };
}
function dateDiff(date1, date2) {
  const dateObj1 = simpleToNative(date1);
  const dateObj2 = simpleToNative(date2);
  let diff = dateObj1 - dateObj2;
  diff = diff / (1000 * 60 * 60 * 24);
  return diff < 0 ? -diff : diff;
}
function simpleToNative({ year, month, day }) {
  return new Date(year, month - 1, day);
}
