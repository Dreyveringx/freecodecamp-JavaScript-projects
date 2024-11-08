const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budge");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/;
  return str.match(regex);
}

function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length;
  const HTMLSting = `
        <label for="${entryDropdown.value}-${entryNumber}-name">Nombre de ${entryNumber} Entrada</label>
        <input id="${entryDropdown.value}-${entryNumber}-name" type="text" placeholder="Nombre"/>
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input type="number" min="0" id="${entryDropdown.value}-${entryNumber}-calories" placeholder="Calories" />`
    `;
}
