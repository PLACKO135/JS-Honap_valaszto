"use strict";

const tableDiv = document.getElementById('table-div');
const honapok_select = document.getElementById("Honapok_select");
const honap = honapok_select.value;

const honaphossz = {
  'Január': 31,
  'Február': 28,
  'Március': 31,
  'Április': 30,
  'Május': 31,
  'Június': 30,
  'Július': 31,
  'Augusztus': 31,
  'Szeptember': 30,
  'Október': 31,
  'November': 30,
  'December': 31
};



function createTable() {

  const valasztott_honap = honapok_select.value;
  const maxnapok = honaphossz[valasztott_honap];
  const table = document.createElement('table');

  for (let i = 1; i <= maxnapok; i++) {
    const row = table.insertRow();
    const dayCell = row.insertCell();
    dayCell.innerHTML = i;
    const inputCell = row.insertCell();
    const input = document.createElement('input');
    input.type = 'text';
    inputCell.appendChild(input);
  }

  tableDiv.innerHTML = '';
  tableDiv.appendChild(table);
}