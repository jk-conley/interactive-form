/*================
VARIABLES
================*/

// Elements on HTML DOC
const nameField = document.getElementById('name');
const basicInfoField = document.getElementById('basic-info');
const selectJobRole = document.getElementById('title');
const selectShirtDesign = document.getElementById('design');
const textArea = document.getElementById('other-title');

/*======================
*** ONLOAD FUNCTIONS ***
======================*/

/*==================================
FOCUS ON NAME FIELD WHEN PAGE LOADS
==================================*/

const focusOnNameField = () => {
  nameField.focus();
}

/*===================================================
*** JOB ROLE FUNCTIONS ***
===================================================*/

/*=========================================
CHECK WHICH JOB ROLE OPTION IS SELECTED
=========================================*/

const jobRoleOptionSelected = (option) => {

  // check if other option is selected
  if (option === 'other') {
    textArea.style.display = '';
  } else if (option !== 'other') {
    textArea.style.display = 'none';
  }
}

/*===================================================
*** T-SHIRT INFO FUNCTIONS ***
===================================================*/

/*==================================
JS PUNS COLORS FUCNTION
==================================*/

const jsPunsColors = (colors) => {

  // sort which colors to show for design js puns

  for (let i = 0; i < colors.length; i++) {
    switch (colors[i].value) {
      case 'cornflowerblue':
        colors[i].style.display = '';
        colors.value = colors[i].value;
        break;
      case 'darkslategrey':
        colors[i].style.display = '';
        break;
      case 'gold':
        colors[i].style.display = '';
        break;
      case 'tomato':
        colors[i].style.display = 'none';
        break;
      case 'steelblue':
        colors[i].style.display = 'none';
        break;
      case 'dimgrey':
        colors[i].style.display = 'none';
        break;
    }
  }

}

/*==================================
HEART JS COLORS FUNCTION
==================================*/

const heartJsColors = (colors) => {

  // sort which colors to show for design heart js

  for (let i = 0; i < colors.length; i++) {
    switch (colors[i].value) {
      case 'cornflowerblue':
        colors[i].style.display = 'none';
        break;
      case 'darkslategrey':
        colors[i].style.display = 'none';
        break;
      case 'gold':
        colors[i].style.display = 'none';
        break;
      case 'tomato':
        colors[i].style.display = '';
        colors.value = colors[i].value;
        break;
      case 'steelblue':
        colors[i].style.display = '';
        break;
      case 'dimgrey':
        colors[i].style.display = '';
        break;
    }
  }

}

/*==================================
DISPLAY COLORS FUNCTION
==================================*/

const displayColorsBasedOnDesign = (designOption) => {

  // get colors to sort
  const colors = document.getElementById('color');

  // depending on design chosen, sorts to display
  // appropriate colors
  if (designOption === 'js puns') {
    jsPunsColors(colors);
  } else if (designOption === 'heart js') {
    heartJsColors(colors);
  }

}

/*===============================================
*** REGISTER ACTIVITY FUNCTIONS ***
===============================================*/



/*===============================================
*** DOMContentLoaded Call Functions ***
===============================================*/

document.addEventListener('DOMContentLoaded', (e) => {

  // Focus on name field onload
  focusOnNameField();

  // hide other job role textarea
  textArea.style.display = 'none';

  // Create textarea if option other is selected
  selectJobRole.addEventListener('change', () => {
    jobRoleOptionSelected(selectJobRole.value);
  });

  selectShirtDesign.addEventListener('change', () => {
    displayColorsBasedOnDesign(selectShirtDesign.value);
  });

});