function addNestedList(){
  const SPECIAL = document.querySelector('#specialItem');
  const NEWUL = document.createElement('ul');
  const NEWLI = document.createElement('li');
  NEWLI.textContent = 'Valid';
  
  NEWUL.appendChild(NEWLI);
  console.log(NEWUL.outerHTML);
}

addNestedList();
