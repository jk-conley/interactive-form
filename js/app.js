/*================
VARIABLES
================*/

// Elements on HTML DOC
const nameField = document.getElementById('name');
const basicInfoField = document.getElementById('basic-info');
const selectJobRole = document.getElementById('title');

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

/*==================================
CHECK WHICH OPTION IS SELECTED
==================================*/

const optionSelected = (option) => {

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


/*=============================
DOMContentLoaded Call Functions
=============================*/

document.addEventListener('DOMContentLoaded', (e) => {

  // Focus on name field onload
  focusOnNameField();

  // Create textarea if option other is selected
  selectJobRole.addEventListener('change', () => {
    optionSelected(selectJobRole.value);
  });

});