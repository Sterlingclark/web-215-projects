const SLIDER = document.querySelector('input');
const PARA = document.querySelector('p');
SLIDER.addEventListener('mousemove', function(){
  let textSize = this.value;
  PARA.style.fontSize = textSize + 'px';
});

