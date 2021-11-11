modal();
/**
 * - This function displays a modal box when the button or link is clicked
 */
function modal() {
  const CLOSE = document.querySelector('#close');
  BOXOUT = document.querySelector('#modalOuterBox');
  BOXIN = document.querySelector('#modalContent');
  const BTN = document.querySelector('button');
  const A = document.querySelector('a');

CLOSE.addEventListener('click', ()=> modalOuterBox.style.display = 'none');

BOXOUT.addEventListener('click', (e)=>{
  console.log(e);
  if(e.target.matches('#modalOuterBox')) {
    modalOuterBox.style.display = 'none';
  }
});

BTN.addEventListener('click', ()=>{
  const btnText = this.textContent;
  showModal(btnText);
});

A.addEventListener('click', (e)=>{
  e.preventDefault();
  const linkText = this.textContent;
  showModal(linkText);
});

}
/**
 * - Creates a paragraph to show the modal box
 * @param {String} modalText 
 */
function showModal(modalText) {
  const oldData = document.querySelector('[data-desc=content]')
  oldData ? oldData.remove() : null;
  const PARA = document.createElement('p');
  PARA.setAttribute('data-desc', 'content');
  PARA.textContent = modalText;
  BOXIN.appendChild(PARA);
  BOXOUT.style.display = 'block';
}