const STANDARD = document.querySelector('#standard-swap');
STANDARD.addEventListener('mouseover', standardSwap);
STANDARD.addEventListener('mouseout', standardSwapBack)
/**
 * changes the image
 */
function standardSwap() {
  const newSrc = 'img/day235.jpg';
  this.setAttribute('src', newSrc);
}
/**
 * switches image back to the original
 */
function standardSwapBack() {
  const originalSrc = 'img/day0.jpg';
  this.setAttribute('src', originalSrc);
}

const DISJOINTED = document.querySelector('#disjointed-swap');
const BTNO = document.querySelector('#show-me-day-0');
const BTNO235 = document.querySelector('#show-me-day-235');
const IMAGE0 = 'img/day0.jpg';
const IMAGE235 = 'img/day235.jpg';

BTNO.addEventListener('click', function() {
  showImage(IMAGE235);
});

BTNO.addEventListener('click', function() {
  showImage(IMAGE0);
});
/**
 * 
 * @param {jpg} showThisImage - changes the src of for the image shown
 */
function showImage(showThisImage) {
  DISJOINTED.setAttribute('src', showThisImage);
}
