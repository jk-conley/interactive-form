/*================
VARIABLES
================*/

// focus variables
const name = document.getElementById('name');

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
const totalCostDiv = document.querySelector('#total-cost');
const jsFrameworks = document.querySelector('.activities > label > input[name="js-frameworks"]');
const express = document.querySelector('.activities > label > input[name="express"]');
const jsLibs = document.querySelector('.activities > label> input[name="js-libs"]');
const node = document.querySelector('.activities > label> input[name="node"]');

// payment section variables
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
const paymentOption = document.getElementById('payment');
const creditCardNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');

// validation variables
const form = document.querySelector('form');
const email = document.getElementById('mail');
// Source for regular expression:
// https://www.w3resource.com/javascript/form/email-validation.php
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const pShirt = document.createElement('p');
const pReg = document.createElement('p');
const numCheck = /^\d+$/;





/*======================
*** ONLOAD FUNCTIONS ***
======================*/

/*==================================
FOCUS ON NAME FIELD WHEN PAGE LOADS
==================================*/

const focusOnNameField = () => {
  name.focus();
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

  if (cost === 0) {
    activityFieldSet.removeChild(divTotal);
  } else {
    activityFieldSet.appendChild(divTotal);
    divTotal.setAttribute('id', 'total-cost');
    divTotal.appendChild(h3);
    h3.textContent = `Total: $${cost}`;
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
  p.style.display = 'none';
}

/*==================================
HIDE ERROR MESSAGE FUNCTION
==================================*/

const hideErrorMessage = (paragraph) => {

  if (paragraph === null) {
    console.log(paragraph);
  } else {
    paragraph.style.display = 'none';
  }

}

/*==================================
SHOW ERROR MESSAGE FUNCTION
==================================*/

const showErrorMessage = (paragraph) => {

  if (paragraph === null) {
    console.log(paragraph);
  } else {
    paragraph.style.display = '';
  }

}

/*==================================
ERROR ELEMENT FUNCTION
==================================*/

const errorElement = (element) => {

    element.classList.add('validation-box');
    element.previousElementSibling.classList.add('validation-text');
    element.classList.remove('success-box');
    element.previousElementSibling.classList.remove('success-text');
    return false;

}

/*==================================
SUCCESS ELEMENT FUNCTION
==================================*/

const successElement = (element) => {

  element.classList.remove('validation-box');
  element.previousElementSibling.classList.remove('validation-text');
  element.classList.add('success-box');
  element.previousElementSibling.classList.add('success-text');
  return true;
}

/*==================================
VALIDATE NAME FUNCTION
==================================*/

const validateName = () => {
  // if name invalid set validation css classses and return false
  if (name.value === '') {
    return errorElement(name);
  } else {
    return successElement(name);
  }

}

/*==================================
VALIDATE EMAIL FUNCTION
==================================*/

const validateEmail = () => {
  // if no email or email is invalid set validation
  // css classes and return false
  if (mail.value === '' || !emailRegex.test(mail.value)) {
    return errorElement(email);
  } else {
    return successElement(email);
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

  let flag = false;

  for (var i = 0; i < activities.length; i++) {
    if (activities[i].children[0].checked) {
      flag = true;
    }
  }

  console.log(flag);

  return flag;

}

/*==================================
*** VALIDATE PAYMENT FUNCTIONS ***
==================================*/

/*==================================
VALIDATE CREDIT CARD FUNCTION
==================================*/

const validateCreditCard = () => {

  // if payment is credit card
  if (paymentOption.value === 'credit card') {
    // if card number is number only and between 13 and 16 digits
    if (numCheck.test(creditCardNum.value) && (creditCardNum.value.length >= 13 && creditCardNum.value.length <= 16)) {
      return successElement(creditCardNum);
    } else {
      return errorElement(creditCardNum);
    }
  }

}

/*==================================
VALIDATE ZIP FUNCTION
==================================*/

const validateZip = () => {

  // if payment is credit card
  if (paymentOption.value === 'credit card') {
    // if zip is number only and is 5 digits
    if (numCheck.test(zip.value) && zip.value.length === 5) {
      return successElement(zip);
    } else {
      return errorElement(zip);
    }
  }

}

/*==================================
VALIDATE CVV FUNCTION
==================================*/

const validateCvv = () => {

  // if payment is credit card
  if (paymentOption.value === 'credit card') {
    // if zip is number only and is 5 digits
    if (numCheck.test(cvv.value) && cvv.value.length === 3) {
      return successElement(cvv);
    } else {
      return errorElement(cvv);
    }
  }

}

/*==================================
VALIDATES FORM FUNCTION
==================================*/

const validate = () => {

  let flag = true;

  // validate name field
  if (validateName() === false) {
    name.previousElementSibling.textContent = 'Name: Please enter your name';
    flag = false;
  } else if (validateName()) {
    name.previousElementSibling.textContent = "Name ✅";
  }

  // validate email field
  if (validateEmail() === false) {
    if (email.value === '') {
      email.previousElementSibling.textContent = 'Email: Please enter a valid email';
    }
    if (email.value !== '') {
      email.previousElementSibling.textContent = 'Email: Valid entry johndoe@email.com';
    }
    flag = false;
  } else if (validateEmail()) {
    email.previousElementSibling.textContent = 'Email ✅';
  }

  // validate t-shirts for design selected
  const shirtErrorMsg = document.getElementById('shirt-error');

  if (validateShirtDesign() === false) {
    showErrorMessage(shirtErrorMsg);
    flag = false;
  } else {
    hideErrorMessage(shirtErrorMsg);
  }

  // validate registry section
  const regErrorMsg = document.getElementById('reg-error');

  if (validateRegistry() === true) {
    hideErrorMessage(regErrorMsg);
  } else {
    showErrorMessage(regErrorMsg);
    flag = false;
  }

  // validate credit card
  if (validateCreditCard() === false) {
    if (creditCardNum.value.length < 13 || creditCardNum.value.length > 16) {
      creditCardNum.previousElementSibling.textContent = 'Card Number: Please enter between 13 and 16 digits';
    }
    if (!numCheck.test(creditCardNum.value)) {
      creditCardNum.previousElementSibling.textContent = 'Card Number: Please enter numbers only';
    }
    flag = false;
  } else if (validateCreditCard()) {
    creditCardNum.previousElementSibling.textContent = "Card Number ✅";
  }

  // validate zipcode
  if (validateZip() === false) {
    if (zip.value.length < 5 || zip.value.length > 5) {
      zip.previousElementSibling.textContent = 'Zip Code: Please enter 5 digits';
    }
    if (!numCheck.test(zip.value)) {
      zip.previousElementSibling.textContent = 'Zip Code: Please enter numbers only';
    }
    flag = false;
  } else if (validateZip()) {
    zip.previousElementSibling.textContent = "Zip Code ✅";
  }

  // validate cvv
  if (validateCvv() === false) {
    if (cvv.value.length < 3 || cvv.value.length > 3) {
      cvv.previousElementSibling.textContent = 'CVV: Please enter 3 digits';
    }
    if (!numCheck.test(cvv.value)) {
      cvv.previousElementSibling.textContent = 'CVV: Please enter numbers only';
    }
    flag = false;
  } else if (validateCvv()) {
    cvv.previousElementSibling.textContent = "CVV ✅";
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

  // create the shirt error element
  createErrorMessage(shirtFieldSet, pShirt, "Don't forget your T-shirt!", 'shirt-error');


  // create the registry error element
  createErrorMessage(activityFieldSet, pReg, "Please select atleast one event", 'reg-error');


  // initial call to displayPaymentOption for setup
  displayPaymentOption();

  // error msg shows until user input validates
  validate();
}

/*======================================
DOMCONTENTLOADED CHECK RUN FUNCTIONS
======================================*/

document.addEventListener('DOMContentLoaded', () => {

  // initialize page
  initialPageLoad();

  //check if user is entering a name, if valid, remove error message
  name.addEventListener('input', () => {
    validateName();
    validate();
  });

  // check if user is entering a valid email, if so, remove error message
  mail.addEventListener('input', () => {
    validateEmail();
    validate();
  });

  // create textarea if option other is selected for job role
  selectJobRole.addEventListener('change', () => {
    jobRoleOptionSelected(selectJobRole.value);
  });

  // listen for changes to design options and colors for t-shirts
  selectShirtDesign.addEventListener('change', () => {
    isShirtDesignChosen();
    displayColorsBasedOnDesign(selectShirtDesign.value);
    validate();
  });

  // listen for activites checked in Register Activities Section
  activityFieldSet.addEventListener('change', (e) => {
    createTotalCostElement(activityTotalCost(activities));
    doEventsConflict();
    // check if user selects option, if so, remove error message
    console.log(e.target);
    validate();

  });

  // listen to payment section for option selected
  paymentOption.addEventListener('change', () => {
    displayPaymentOption();
  });

  // check if user is entering a valid credit card number
  creditCardNum.addEventListener('input', () => {
    validateCreditCard();
    validate();
  });

  // check if user is entering valid zipcode numbers
  zip.addEventListener('input', () => {
    validateZip();
    validate();
  });

  // check if user is entering valid cvv numbers
  cvv.addEventListener('input', () => {
    validateCvv();
    validate();
  });

  // listen for form submition for validation check
  form.addEventListener('submit', (e) =>{
    console.log(validate());
    if (validate() === false) {
      e.preventDefault();
    }
  });


});
