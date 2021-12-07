generateURL('general', jokeSuccess, jokeError);

function generateURL(category, updateDOMSuccess, updateDOMError) {
  let url = `https://karljoke.herokuapp.com/jokes/${category}/ten`;
  createRequest(url, updateDOMSuccess, updateDOMError);
}

function createRequest(url, updateDOMSuccess, updateDOMError) {
  fetch(url)
  .then(responseFromServer => handleErrors(responseFromServer)) 
  .then(goodData => updateDOMSuccess(goodData))
  .catch(thereWasAnError => updateDOMError(thereWasAnError));
}

function handleErrors(response) {
  if(!response.ok) {
    throw(response.status + ': ' + response.statusText);
  }
  return response.json();
}

function jokeError(error) {
  const p = document.createElement('p');
  p.innerHTML = `<p>There was an error:<br>${error}</p>`;
  document.querySelector('body').appendChild(p);
}

function jokeSuccess(parsedData) {
  const OL = document.createElement('ol');
  for(i= 0; i < parsedData.length; i++) {
    const setup = parsedData[i].setup;
    const punchline = parsedData[i].punchline;
    const displayString = `${setup}<br>${punchline}<hr>`;
    const LI = document.createElement('li');
    console.log(displayString);
    LI.innerHTML = displayString;
    OL.appendChild(LI);
  }
  document.querySelector('body').appendChild(OL);
}