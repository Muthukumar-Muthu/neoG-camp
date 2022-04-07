const form = document.querySelector("form");
const bill_amount_input = document.querySelector("#bill_amount");
const bill_amount_output = document.querySelector("#amount_given");
const table_div = document.querySelector(".table");

let bill_amount = 0;
let amount_given = 0;

const notes = [2000, 500, 100, 20, 10, 5, 1];
let notes_to_be_given = [];

showNotes(notes, notes_to_be_given); //constructing table

document.querySelector(".year").innerText = new Date().getFullYear();

bill_amount_input.addEventListener("input", () => {
  document.querySelectorAll(".amount_given").forEach((element) => {
    element.style.display = "block";
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitHandler();
  reset();
});

function reset() {
  notes_to_be_given = [];
}

function submitHandler() {
  bill_amount = +bill_amount_input.value;
  amount_given = +bill_amount_output.value;
  if (checkNumber(bill_amount, amount_given)) {
    //if invalid show warning
    return;
  } else {
    let diff = amount_given - bill_amount;
    if (diff < 0) {
      alert("Ready to wash dishes?");
    } else if (diff === 0) {
      alert("No exchange needed");
    } else {
      for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        if (diff >= note) {
          let no_of_notes = diff / note;
          diff = diff % note;
          no_of_notes = Math.floor(no_of_notes);
          notes_to_be_given[i] = no_of_notes;
        }
      }
      showNotes(notes, notes_to_be_given);
    }
  }
}

function checkNumber(smaller, bigger) {
  if (isNaN(smaller) || isNaN(bigger)) {
    alert("Amount Invalid");
    return true;
  } else if (smaller > bigger) {
    alert("Washing dishes?");
    return true;
  }
  return false;
}

function showNotes(notes, notes_to_be_given) {
  table_div.innerHTML = "";
  const table = document.createElement("TABLE");

  table.appendChild(createRow("Notes", "No of Notes", "TH"));
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    table.appendChild(createRow(note, notes_to_be_given[i]));
  }
  table_div.append(table);
}

function createRow(value1, value2, type) {
  if (!value2) value2 = 0;
  const row = document.createElement("TR");
  const col1 = createColumn(value1, type);
  const col2 = createColumn(value2, type);
  row.appendChild(col1);
  row.appendChild(col2);
  return row;
}

function createColumn(content, type = "TD") {
  const col = document.createElement(type);
  col.innerText = content;
  return col;
}
