/*****************
Initialize Page
*****************/
init();

/**
 * Hides the 'log out' button
 *
 */

function init() {
  const NOTME = document.querySelector('#not-me');
  NOTME.style.display = 'none';
}

/********************
Name Personalization
********************/
getName();
clearName();
setName();

/**
 * Gets the user's name stored in either local or session storage
 * and displays a personalized message if it exists
 * Shows the Name form if it doesn't exist and
 * shows the personalized 'log out' button if it does exist
 *
 */

function getName() {
  let local = localStorage.getItem('name');
  let session = sessionStorage.getItem('name');

  if (local) {
    document.querySelector('h1').textContent = local;
  } else {
    document.querySelector('h1').textContent = session;
  } 
}

/**
 * Clears the name from storage
 *
 */

function clearName() {
  let removeLocal = localStorage.removeItem('name');

}

/**
 * Writes the entered name to local storage (if Remember box is checked)
 * or to session storage (if Remember box isn't checked)
 * then calls getName to display the name
 *
 */

function setName() {
  const REM = document.querySelector('#remember');
  const SAVE = document.querySelector('form');
  let name = document.querySelector('#name').value;
  let chosenStorage = '';

  console.log(name);

  REM.addEventListener('change', (e) => {
    e.preventDefault();
    if (this.checked) {
      chosenStorage = 'localStorage';
    }
  });

  SAVE.addEventListener('submit', () => {
    if (chosenStorage == 'localStorage') {
      localStorage.setItem('name', name);
    } else {
      sessionStorage.setItem('name', name);
    }
  });
}
