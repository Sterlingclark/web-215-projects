const BTNCOOL = document.querySelector('#btn-cool');
const BTNUNCOOL = document.querySelector('#btn-uncool');
const BTNRESET = document.querySelector('#btn-reset');
const STUFF = document.querySelector('span');

BTNCOOL.addEventListener('click', showMatches);
BTNUNCOOL.addEventListener('click', showMatches);
BTNRESET.addEventListener('click', showMatches);

function showMatches() {
  const CATEGORY = this.getAttribute('data-coolness');
  for(i = 0; i < STUFF.length; i++) {
    var itemCoolness = STUFF[i].getAttribute('data-coolness');
    if(CATEGORY == itemCoolness) {
      STUFF[i].style.backgroundColor = '#ff0';
    } else {
      STUFF[i].style.backgroundColor = '#fff';
    } // end if-else
  } // end for loop
} // end function