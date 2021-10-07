const SLIDER = document.querySelector('input');
const PARA = document.querySelector('p');
const CURRENTSIZE = document.createElement('div');
const DEFSIZE = SLIDER.getAttribute('value') + 'px';
CURRENTSIZE.textContent = DEFSIZE;
PARA.insertAdjacentElement('beforebegin', CURRENTSIZE);
document.querySelector('body').appendChild(CURRENTSIZE);
SLIDER.addEventListener('mousemove', function(){
  let textSize = this.value + 'px';
  PARA.style.fontSize = textSize;
  CURRENTSIZE.textContent = textSize;
});

const MINSIZE = SLIDER.getAttribute('min');
const MAXSIZE = SLIDER.getAttribute('max');
const MINEL = document.createElement('span');
MINEL.textContent = MINSIZE +'px';
SLIDER.insertAdjacentElement('beforebegin', MINEL);

const MAXEL = document.createElement('span');
MAXEL.textContent = MAXSIZE + 'px';
SLIDER.insertAdjacentElement('afterend', MAXEL);