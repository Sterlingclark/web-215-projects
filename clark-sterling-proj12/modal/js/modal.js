modal();
/**
 * - This function displays a modal box when the button or link is clicked
 */
function modal() {
  const CLOSE = document.querySelector('#close');
  const BOXOUT = document.querySelector('#modalOuterBox');
  const BOXIN = document.querySelector('#modalContent');
  const BTN = document.querySelector('button');
  const A = document.querySelector('a');

CLOSE.addEventListener('click', ()=> modalOuterBox.style.display = 'none');

BOXOUT.addEventListener('click', function(e) {
  console.log(e);
  if(e.target.matches('#modalOuterBox')) {
    modalOuterBox.style.display = 'none';
  }
});

BTN.addEventListener('click', function() {
  const btnText = this.textContent;
  console.log(btnText);
  showModal(btnText);
});

A.addEventListener('click', function(e) {
  e.preventDefault();
  const linkText = this.textContent;
  console.log(linkText);
  showModal(linkText);
});

}
/**
 * - Creates a paragraph to show the modal box
 * @param {String} modalText 
 */
function showModal(modalText) {
  const BOXOUT = document.querySelector('#modalOuterBox');
  const BOXIN = document.querySelector('#modalContent');
  const oldData = document.querySelector('[data-desc=content]')
  oldData ? oldData.remove() : null;
  const PARA = document.createElement('p');
  PARA.setAttribute('data-desc', 'content');
  PARA.textContent = modalText;
  BOXIN.appendChild(PARA);
  BOXOUT.style.display = 'block';
}