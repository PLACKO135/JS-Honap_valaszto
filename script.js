"use strict";

let button = document.querySelector('input[type="button"]');
let calendar_div = document.getElementsByClassName("calendar");
let honapok_select = document.getElementById("Honapok_select");
let honap = honapok_select.value;

const monthLengthsArray = [
  31, // January
  28, // February
  31, // March
  30, // April
  31, // May
  30, // June
  31, // July
  31, // August
  30, // September
  31, // October
  30, // November
  31 // December
];


button.addEventListener('click', createTable);

function createTable() {

  let calendarDiv = document.querySelector('.calendar');

  let table = document.createElement('table');
  for (let index = 0; index < array.length; index++) {
    let tr = document.createElement('tr');    
    
  }
  calendarDiv.appendChild(table);

}