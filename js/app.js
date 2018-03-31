/*================
VARIABLES
================*/

const nameField = document.getElementById('name');


/*============
FUNCTIONS
============*/

/*
FOCUS ON NAME FIELD WHEN PAGE LOADS
*/

const focusOnNameFiled = () => {
  nameField.focus();
}




/*=============================
DOMContentLoaded
=============================*/

document.addEventListener('DOMContentLoaded', (e) => {

  // Focus on name field
  focusOnNameFiled();

});