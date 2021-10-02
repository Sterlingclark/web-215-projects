const ANSWERS = document.querySelectorAll('.a');
const BTNHIDE = document.querySelector('#btn-h');
const BTNSHOW = document.querySelector('#btn-s');
const BTNTOGGLE = document.querySelector('#btn-t');

BTNHIDE.addEventListener('click', hideAnswers);
BTNSHOW.addEventListener('click', showAnswers);
BTNTOGGLE.addEventListener('click', toggleAnswers);

for(i = 0; i < ANSWERS.length; i++) {
  ANSWERS[i].style.display = 'none';
}
/**
 * uses a loop to got through elements to hide them. 
 */
function hideAnswers() {
  for(i = 0; i < ANSWERS.length; i++) {
    ANSWERS[i].style.display = 'none';
  }
}
/**
 * uses a loop to got through elements to show them. 
 */
function showAnswers() {
  for(i = 0; i < ANSWERS.length; i++) {
    ANSWERS[i].style.display = 'block';
  }
}
/**
 * uses a loop to got through elements to toggle them on and off. 
 */
function toggleAnswers() {
  for(i = 0; i < ANSWERS.length; i++) {
    if (ANSWERS[i].style.display == 'block') {
      ANSWERS[i].style.display = 'none';
    } else {
      ANSWERS[i].style.display = 'block';
    } // end if else 
  } // end for loop 
} // end function 
