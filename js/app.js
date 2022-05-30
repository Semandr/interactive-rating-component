'use strict';
const btnSubmit = document.querySelector('.btn__submit');
const radioBtns = document.querySelectorAll('input[name="rating"]');
const sectionChoise = document.querySelector('.section__choise');
const sectionOutput = document.querySelector('.section__output');
let rating;
btnSubmit.addEventListener('click', () => {
  radioBtns.forEach(element => {
    if (element.checked) rating = element.value;
  });
});
