/*================
VARIABLES
================*/

// Elements on HTML DOC
const nameField = document.getElementById('name');
const basicInfoField = document.getElementById('basic-info');
const selectJobRole = document.getElementById('title');
const selectShirtDesign = document.getElementById('design');

// Elements created with js
const div = document.createElement('div');
const textArea = document.createElement('textarea');

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

/*=============================
CREATE TEXTAREA
=============================*/
const createTextField = () => {

  // Create textarea attr
  const attrRows = document.createAttribute('rows');
  const attrCols = document.createAttribute('cols');
  const placeHolder = document.createAttribute('placeholder');
  const textAreaId = document.createAttribute('id');

  // assign attr values
  attrRows.value = '5';
  attrCols.value = '50';
  placeHolder.value = 'Your Job Role';
  textAreaId.value = 'other-title';

  // set attr to textarea element
  textArea.setAttributeNode(attrRows);
  textArea.setAttributeNode(attrCols);
  textArea.setAttributeNode(placeHolder);
  textArea.setAttributeNode(textAreaId);

  // append to the basic-info fieldset
  basicInfoField.appendChild(div);
  div.appendChild(textArea);

}

/*=========================================
CHECK WHICH JOB ROLE OPTION IS SELECTED
=========================================*/

const jobRoleOptionSelected = (option) => {

  // assign textarea if present by id
  const textArea = document.getElementById('other-title');

  // check to see if textarea is null or created, then appear based
  // on other option selected only
  if (option === 'other' && textArea === null) {
    createTextField();
  } else if (textArea !== null && option !== 'other') {
    textArea.style.display = 'none';
  } else if (textArea !== null && option === 'other') {
    textArea.style.display = '';
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
*** DOMContentLoaded Call Functions ***
===============================================*/

document.addEventListener('DOMContentLoaded', (e) => {

  // Focus on name field onload
  focusOnNameField();

  // Create textarea if option other is selected
  selectJobRole.addEventListener('change', () => {
    jobRoleOptionSelected(selectJobRole.value);
  });

  selectShirtDesign.addEventListener('change', () => {
    displayColorsBasedOnDesign(selectShirtDesign.value);
  });

});