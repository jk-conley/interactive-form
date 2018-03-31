/*================
VARIABLES
================*/

// focus variables
const nameField = document.getElementById('name');

// job role variables
const selectJobRole = document.getElementById('title');
const selectShirtDesign = document.getElementById('design');
const textArea = document.getElementById('other-title');

// register activity variables
const activities = document.querySelectorAll('.activities > label');
const activityFieldSet = document.querySelector('.activities');
const div = document.createElement('div');
const h3 = document.createElement('h3');
const totalCostDiv = document.querySelector('.activities > div');
const jsFrameworks = document.querySelector('.activities > label > input[name="js-frameworks"]');
const express = document.querySelector('.activities > label > input[name="express"]');
const jsLibs = document.querySelector('.activities > label> input[name="js-libs"]');
const node = document.querySelector('.activities > label> input[name="node"]');




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

/*==================================
TOTAL COST FUNCTION
==================================*/

const activityTotalCost = (checkedList) => {

  let total = 0;

  for (let i = 0; i < checkedList.length; i++) {
    console.log(checkedList[i].children[1].textContent);

    if (checkedList[i].children[0].checked) {
      total += parseInt(checkedList[i].children[1].textContent);
    }
  }

  return total;
}

/*==================================
CREATE TOTAL COST ELEMENT FUNCTION
==================================*/

const createTotalCostElement = (cost) => {

  if (totalCostDiv === null) {
    // append elements
    activityFieldSet.appendChild(div);
    div.appendChild(h3);
    h3.textContent = `Total: $${cost}`;
  } else if (totalCostDiv !== null) {
    h3.textContent = `Total: $${cost}`;
    totalCostDiv.style.display = '';
  }

}

/*==================================
REMOVE TOTAL COST ELEMENT FUNCTION
==================================*/

const removeTotalCostElement = () => {
  if (totalCostDiv !== null) {
    totalCostDiv.style.display = 'none';
  }
}

/*==================================
CHECK INPUT NAMES FUNCTION
==================================*/

const checkInputNames = (name, counterpart) => {

  // check if input named checked conflicts with counterpart
  if (name.checked) {
    counterpart.disabled = true;
    counterpart.parentNode.classList.add('disabled');
  } else if (!name.checked) {
    counterpart.disabled = false;
    counterpart.parentNode.classList.remove('disabled');
  }

}

/*==================================
DO EVENTS CONFLICT FUNCTION
==================================*/

const doEventsConflict = () => {

  // if jsFrameworks is checked disable express
  checkInputNames(jsFrameworks, express);

  // if express is checked disable jsFrameworks
  checkInputNames(express, jsFrameworks);

  // if jsLibs is checked disable node
  checkInputNames(jsLibs, node);

  // if node is checked disable jsLibs
  checkInputNames(node, jsLibs);

}


/*===============================================
*** DOMCONTENTLOADED CHECKED CALL FUNCTIONS ***
===============================================*/

document.addEventListener('DOMContentLoaded', () => {

  // focus on name field onload
  focusOnNameField();

  // hide other job role textarea
  textArea.style.display = 'none';

  // create textarea if option other is selected for job role
  selectJobRole.addEventListener('change', () => {
    jobRoleOptionSelected(selectJobRole.value);
  });

  // listen for changes to design options and colors for t-shirts
  selectShirtDesign.addEventListener('change', () => {
    displayColorsBasedOnDesign(selectShirtDesign.value);
  });

  // listen for activites checked in Register Activities Section
  activityFieldSet.addEventListener('change', () => {
    removeTotalCostElement();
    createTotalCostElement(activityTotalCost(activities));
    doEventsConflict();
  });


});