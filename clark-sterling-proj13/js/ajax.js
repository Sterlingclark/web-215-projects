/*
REMEMBER TO LINK THIS FILE TO YOUR HTML!

Use the free API (no key needed) at https://github.com/15Dkatz/official_joke_api
HOWEVER - that server went down some time ago! A replacement server/api is available at:
https://karljoke.herokuapp.com
Other than a different URL, the API is the same!
 - let users choose between two categories of jokes: general or programming
 - display 10 jokes in a usable/readable format
 - number each joke (1-10)
  - Headings/paragraphs, summary/details, ordered list, ... It's up to you!
 
Use a standard XHR request. Do not use fetch().
 
Tip: you'll need to loop through the JSON results to display ten of them
------------------
*/


// Figure out which category the user selected and then pass their choice along to the createRequest function
function chooseCategory() {
  const RADIOBTN = document.querySelectorAll('input');
  var endPoint_URL = "https://karljoke.herokuapp.com/jokes/random";
  
  for(i=0; i < RADIOBTN.length; i++) {
    if(RADIOBTN.value === 'general') {
      RADIOBTN.addEventListener('click', function() {
        console.log(RADIOBTN);
      });
    } else {
      
    }
  }
  createRequest(endPoint_URL);
  
/*
  grab all radio buttons on page
  loop them, adding a listener to each to see if clicked.
  if clicked, which one is it? 
  construct the endpoint URL and store it in a var named endPoint_URL
  create and send the request:
  createReques(endPoint_URL);  
*/
}
chooseCategory();

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
  
/*
  grab the element containing the jokes 
  if it exists, delete it(how do you delete an element from the DOM n JS?)
*/
}

// Display a human-readable user-friendly error message on the page if the request failed.
function updateUIError(error) {
  
}
