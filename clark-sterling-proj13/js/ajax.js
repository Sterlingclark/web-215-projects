chooseCategory();
// Figure out which category the user selected and then pass their choice along to the createRequest function
function chooseCategory() {
  const RADIOBTNS = document.querySelectorAll('input');
  var endPoint_URL;
  
    RADIOBTNS.forEach(function(button) {
      button.addEventListener('click', (e) =>{
        if(e.target.value === 'general') {
          endPoint_URL = 'https://karljoke.herokuapp.com/jokes/general/ten';
          createRequest(endPoint_URL);
        } else{
          endPoint_URL = 'https://karljoke.herokuapp.com/jokes/programming/ten';
          createRequest(endPoint_URL);
        }
      })
    });

}


// Create the XHR request and call the responseMethod function
function createRequest(url) {
  const httpRequest = new XMLHttpRequest(url);
  httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest));
  httpRequest.open('GET', url);
  httpRequest.send();
}


// Define what happens if the request is successful or if it fails. Call the updateUISuccess function if successful and call the updateUIError function is it fails
function responseMethod(httpRequest) {
  if (httpRequest.readyState === 4) {
    if (httpRequest.status === 200) {
      updateUISuccess(httpRequest.responseText);
    } else {
      updateUIError(httpRequest.status + ': ' + httpRequest.responseText);
    }
  }
}

// Work with the data returned by the server and display the jokes on the page
function updateUISuccess(data) {
  const parsedData = JSON.parse(data);
  
  for(var i = 0, len = parsedData.length; i < len; i++) {
    const DIV = document.createElement('div');
    const P1 = document.createElement('p');
    const P2 = document.createElement('p');
    const HR = document.querySelector('hr');
    var setup = parsedData[i].setup;
    var punchLine = parsedData[i].punchline;

    P1.textContent = setup;
    P2.textContent = punchLine;
    P1.appendChild(P2);
    DIV.appendChild(P1);
    HR.append(DIV);
  }


/*
  grab the element containing the jokes 
  if it exists, delete it(how do you delete an element from the DOM n JS?)
*/
}

// Display a human-readable user-friendly error message on the page if the request failed.
function updateUIError(error) {
  const H1 = document.createElement('h1');
  H1.textContent = "Unable to get data Request failed!";
  return H1;
}
