'use strict';
const btnSubmit = document.querySelector('.btn__submit');
const radioBtns = document.querySelectorAll('input[name="rating"]');
const sectionChoise = document.querySelector('.section__choise');
const sectionOutput = document.querySelector('.section__output');
const paragraphValue = document.querySelector('.paragraph__value');
let rating;

function visualization() {
  sectionOutput.classList.toggle('visually-hidden');
  sectionChoise.classList.toggle('visually-hidden');
}

btnSubmit.addEventListener('click', () => {
  radioBtns.forEach(element => {
    if (element.checked) rating = element.value;
    element.checked = false;
  });
  if (rating === undefined) {
    alert('You need to select rating');
    return;
  }
  visualization();
  paragraphValue.textContent = `You selected ${rating} out of ${radioBtns.length}`;
  // if you want to set a timer to return to the previous window for rating selection after 10 seconds, uncomment this function below --->
  // setTimeout(() => {
  //   visualization();
  // }, 10000);
});
