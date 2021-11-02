createEmail(); 
/**
 * -This function is used to create and display email address within the HTML
 */
function createEmail() {
  const EMAILS = document.querySelectorAll('.email');
  EMAILS.forEach(email => {
    const USER = email.dataset.user;
    const DOMAIN = email.dataset.domain;
    const A = document.createElement('a');
    const ADDRESS = `${USER}@${DOMAIN}`;
    A.setAttribute('href', 'mailto:', ADDRESS);
    A.textContent = ADDRESS;
    email.textContent = '';
    email.appendChild(A);
  });
}

let foods = [
  'apple',
  'banana',
  'durian'
]

// for(i = 0; i < foods.length; i++){
//   console.log(foods[i]);
// }


// foods.forEach(showMembers);
// function showMembers(member, index, arr) {
//   console.log(member);
//   console.log(index);
//   console.log(arr);
//   console.log('-----------');
// }

foods.forEach(function(arrMember) {
  console.log(`${arrMember} is a real tasty fruit`);
});