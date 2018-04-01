/*================
VARIABLES
================*/

// focus variables
const nameField = document.getElementById('name');

// job role variables
const selectJobRole = document.getElementById('title');
const textArea = document.getElementById('other-title');

// t-shirt variables
const selectColors = document.getElementById('colors-js-puns');
const selectShirtDesign = document.getElementById('design');
const shirtFieldSet = document.querySelector('.shirt');

// register activity variables
const activities = document.querySelectorAll('.activities > label');
const activityFieldSet = document.querySelector('.activities');
const divTotal = document.createElement('div');
const h3 = document.createElement('h3');
const totalCostDiv = document.querySelector('.activities > div');
const jsFrameworks = document.querySelector('.activities > label > input[name="js-frameworks"]');
const express = document.querySelector('.activities > label > input[name="express"]');
const jsLibs = document.querySelector('.activities > label> input[name="js-libs"]');
const node = document.querySelector('.activities > label> input[name="node"]');

// payment section variables
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const paymentOption = document.getElementById('payment');

// validation variables
const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('mail');
// Source for regular expression:
// https://www.w3resource.com/javascript/form/email-validation.php
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const pRegError = document.createElement('p');
const pShirtError = document.createElement('p');
const pPaymentError = document.createElement('p');





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

const isShirtDesignChosen = () => {
  if (selectShirtDesign.value === 'js puns' || selectShirtDesign.value === 'heart js') {
    selectColors.style.display = '';
    return true;
  } else {
    selectColors.style.display = 'none';
    return false;
  }
}

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
    activityFieldSet.appendChild(divTotal);
    divTotal.appendChild(h3);
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

  // check if input name checked conflicts with counterpart
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
*** PAYMENT SECTION FUNCTIONS ***
===============================================*/

/*==================================
DISPLAY PAYMENT OPTION FUNCTION
==================================*/

const displayPaymentOption = () => {
  if (paymentOption.value === 'credit card') {
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
    creditCard.style.display = '';
  } else if (paymentOption.value === 'paypal') {
    paypal.style.display = '';
    bitcoin.style.display = 'none';
    creditCard.style.display = 'none';
  } else if (paymentOption.value === 'bitcoin') {
    paypal.style.display = 'none';
    bitcoin.style.display = '';
    creditCard.style.display = 'none';
  } else {
    paymentOption.value = 'credit card';
    paypal.style.display = 'none';
    bitcoin.style.display = 'none';
    creditCard.style.display = '';
  }
}

/*===============================================
*** VALIDATION FUNCTIONS ***
===============================================*/

/*==================================
CREATE ERROR MESSAGE FUNCTION
==================================*/

const createErrorMessage = (element, p, message, id) => {
  element.firstElementChild.append(p);
  p.textContent = message;
  p.setAttribute('class', 'validation-text');
  p.setAttribute('id', id);
  p.style.fontSize = '1rem';
}

/*==================================
REMOVE ERROR MESSAGE FUNCTION
==================================*/

const removeErrorMessage = (parent, id) => {
  const element = document.getElementById(id);
  if (element !== null) {
    parent.firstElementChild.remove();
  }
}

/*==================================
VALIDATE NAME FUNCTION
==================================*/

const validateName = () => {
  // if name invalid set validation css classses and return false
  if (name.value === '') {
    name.classList.add('validation-box');
    name.previousElementSibling.classList.add('validation-text');
    return false;
  } else {
    name.classList.remove('validation-box');
    name.previousElementSibling.classList.remove('validation-text');
    return true;
  }
}

/*==================================
VALIDATE EMAIL FUNCTION
==================================*/

const validateEmail = () => {
  // if no email or email is invalid set validation
  // css classes and return false
  console.log(mail.value);
  console.log(emailRegex.test(mail.value));
  if (mail.value === '' || !emailRegex.test(mail.value)) {
    email.classList.add('validation-box');
    email.previousElementSibling.classList.add('validation-text');
    return false;
  } else {
    email.classList.remove('validation-box');
    email.previousElementSibling.classList.remove('validation-text');
    return true;
  }

}

/*==================================
VALIDATE SHIRT DESIGN FUNCTION
==================================*/

const validateShirtDesign = () => {

  if (selectShirtDesign.value === 'js puns' || selectShirtDesign.value === 'heart js') {
    return true;
  } else {
    return false
  }

}

/*==================================
VALIDATE REGISTRY FUNCTION
==================================*/

const validateRegistry = () => {

  for (var i = 0; i < activities.length; i++) {
    if (activities[i].children[0].checked) {
      return true;
    } else {
      return false;
    }
  }

}




/*==================================
VALIDATES FORM FUNCTION
==================================*/

const validate = () => {

  let flag;
  // validate name field
  if (validateName() === false) {
    name.previousElementSibling.textContent = 'Name: Please enter your name';
    flag = false;
  }
  // validate email field
  if (validateEmail() === false) {
    email.previousElementSibling.textContent = 'Email: Please enter a valid email';
    flag = false;
  }
  // validate t-shirts for design selected
  if (validateShirtDesign() === false) {
    createErrorMessage(shirtFieldSet, pShirtError, "Don't forget your T-shirt!", 'shirt-error');
  } else if (validateShirtDesign() === true) {
    removeErrorMessage(shirtFieldSet.firstElementChild, 'shirt-error');
  }

  return flag;
}
/*===============================================
*** CALL FUNCTIONS AND DOMCONTENTLOADED ***
===============================================*/

/*==================================
INITIALIZE ON PAGE LOAD FUNCTION
==================================*/

const initialPageLoad = () => {
  // focus on name field onload
  focusOnNameField();

  // hide other job role textarea
  textArea.style.display = 'none';

  // hide colors until design is chosen
  isShirtDesignChosen();

  // initial call to displayPaymentOption for setup
  displayPaymentOption();
}

/*======================================
DOMCONTENTLOADED CHECK RUN FUNCTIONS
======================================*/

document.addEventListener('DOMContentLoaded', () => {

  // initialize page
  initialPageLoad();

  // create textarea if option other is selected for job role
  selectJobRole.addEventListener('change', () => {
    jobRoleOptionSelected(selectJobRole.value);
  });

  // listen for changes to design options and colors for t-shirts
  selectShirtDesign.addEventListener('change', () => {
    isShirtDesignChosen();
    displayColorsBasedOnDesign(selectShirtDesign.value);
    if (isShirtDesignChosen()) {
      removeErrorMessage(shirtFieldSet.firstElementChild, 'shirt-error');
    }
  });

  // listen for activites checked in Register Activities Section
  activityFieldSet.addEventListener('change', () => {
    removeErrorMessage();
    removeTotalCostElement();
    createTotalCostElement(activityTotalCost(activities));
    doEventsConflict();
  });

  // listen to payment section for option selected
  paymentOption.addEventListener('change', () => {
    displayPaymentOption();
  });

  // listen for form submition for validation check
  form.addEventListener('submit', (e) =>{
    if (validate() === false) {
      e.preventDefault();
    }
  });


});
