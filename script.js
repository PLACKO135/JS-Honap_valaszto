"use strict";

let button = document.querySelector('input[type="button"]');
let calendar_div = document.getElementsByClassName("calendar");
let honapok_select = document.getElementById("Honapok_select");
const honap = honapok_select.value;

select.addEventListener('change', createTable);

const monthLengths = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31
};

function createTable() {
    const rowAmount = monthLengths[honapok_select.value];

  const table = document.createElement('table');

  for (let i = 0; i < rowAmount; i++) {
    const row = document.createElement('tr');
    table.appendChild(row);

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      row.appendChild(cell);
    }
  }
  calendar_div.appendChild(table);
}






createTable();