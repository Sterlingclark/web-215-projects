pageBottom();
window.addEventListener('scroll', pageBottom);

function pageBottom() {
  const BODY = document.querySelector('body');
  let bodyHeight = BODY.offsetHeight;
  let viewportHeight = window.innerHeight;
  let scrollDistance = window.pageYOffset;
  let totalSeen = scrollDistance + viewportHeight;

  if(totalSeen >= bodyHeight) {
    const LASTPARA = BODY.lastElementChild;
    const DATAID = LASTPARA.dataset.id;
    if(DATAID) {
      var nextParagraph = parseInt(DATAID) + 1;
    } else {
      var nextParagraph = 0;
    }
    let newContent = getNewContent(nextParagraph);
    if(!newContent) {
      return;
    }
    BODY.appendChild(newContent);
    let newBodyHeight = BODY.offsetHeight;
    if(newBodyHeight <= viewportHeight) {
      pageBottom();
    }
  }
}

function getNewContent(paragraphIndex) {
  const PARA = document.createElement('p');
  PARA.setAttribute('data-id', paragraphIndex);
  PARA.textContent = text[paragraphIndex];
  return (PARA.textContent != '' ? PARA : null);
}