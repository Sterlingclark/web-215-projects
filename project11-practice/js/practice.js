setHeading();
const SetLocal = document.querySelector('#save-apples');
if (SetLocal) {
  SetLocal.addEventListener('click', ()=>{
    localStorage.setItem('fruit', 'apples');
    setHeading();
  });
}
/**
 * -- This function is used to set the heading 
 */
function setHeading() {
  let theFood = localStorage.getItem('fruit');

  if (theFood) {
    document.querySelector('h1').textContent = theFood;
  } else {
    document.querySelector('h1').textContent = 'Sorry. No fruit for you.';
  }
}

const ClearLocal = document.querySelector('#clear-apples');
if (ClearLocal) {
  ClearLocal.addEventListener('click', ()=>{
    localStorage.removeItem('fruit');
    setHeading();
  });
} 

// const SetSession = document.querySelector('#save-bananas');
// if(SetSession) {
//   SetSession.addEventListener('click', ()=>{
//     sessionStorage.setItem('fruit', 'bananas');
//   });
// }

// let foodText = sessionStorage.getItem('fruit');
// if(foodText) {
//   document.querySelector('h1').textContent = foodText;
// } else {
//   document.querySelector('h1').textContent = 'No session fruit';
// }

// const LocalOrange = document.querySelector('#loc');
// const SessionOrange = document.querySelector('#ses');
// let whichStorage = '';
// setFinalHeading();

// if(LocalOrange) {
//   LocalOrange.addEventListener('click', ()=>{
//     whichStorage = localStorage;
//     saveOranges(whichStorage);
//   });
// }

// if(SessionOrange) {
//   SessionOrange.addEventListener('click', ()=>{
//     whichStorage = sessionStorage;
//     saveOranges(whichStorage);
//   });
// }

// function saveOranges(theStoragePreference) {
//   theStoragePreference.setItem('finalFruit', 'oranges');
//   setFinalHeading();
// }

// function setFinalHeading(){
//   let headingLocal = localStorage.getItem('finalFruit');
//   let headingSession = sessionStorage.getItem('finalFruit');

//   if(headingLocal) {
//     document.querySelector('h1').textContent = headingLocal;
//   } else if(headingSession) {
//     document.querySelector('h1').textContent = headingSession;
//   } else {
//     document.querySelector('h1').textContent = 'No more fruit';
//   }
// }