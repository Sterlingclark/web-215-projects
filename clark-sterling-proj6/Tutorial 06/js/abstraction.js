









const H1 = document.querySelector('h1');
const H2 = document.querySelector('h2');
const H3 = document.querySelector('h3');
const P = document.querySelector('p');
const BLOCKQUOTE = document.querySelector('blockquote');
const BUTTON = document.querySelector('button');

H1.addEventListener('click', function(){
  P.style.display = 'none';
});

H2.addEventListener('click', hideTheBlockquote);

function hideTheBlockquote(){
  BLOCKQUOTE.style.display = 'none';
}

H3.addEventListener('click', hideTheOtherHeadings);

function hideTheOtherHeadings(){
  H1.style.display = 'none';
  H2.style.display = 'none';
}

BUTTON.addEventListener('click', showEverything);

function showEverything(){
  P.style.display = 'block';
  BLOCKQUOTE.style.display = 'block';
  H1.style.display = 'block';
  H2.style.display = 'block';
}

