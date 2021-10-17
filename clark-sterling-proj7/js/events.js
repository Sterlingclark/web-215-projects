/*******************************************
Page Initialization Function Calls
*******************************************/
showElement('#thumb-roundness-control', 'block');
showElement('#large-roundness-control', 'block');
showElement('#description-control', 'block');
hideElements('#descriptions > div');
showElement('#descriptions > div:first-of-type', 'block');
cancelLinks('a');


/*******************************************
Event Function Calls
*******************************************/
swapImage('#thumbs > a', '#full-size > img', 'mouseover');
roundCorners('thumb-roundness-control', '#thumbs > a');
roundCorners('large-roundness-control', '#full-size > img');
toggleElement('#discription-control > span', '#descriptions', 'Show Descriptions', 'Hide Descriptions');

/*******************************************
Initialize Page Functions
 *******************************************/
/**
 * 
 * @param {String} tag - pass in the anchor tag to prevent them from opening. 
 */
function cancelLinks(tag) {
  var links = document.querySelectorAll(tag);
  for (var i =0; i < links.length; i++) {
    links[i].addEventListener('click', function(event)
    { event.preventDefault(); }, false);
  }
}
/**
 * 
 * @param {String} id - id of the div surronding the tag you want to show.
 * @param {String} html - the html tag of what you want shown.
 */
function showElement(id, style) {
  document.querySelector(id).style.display = style;
}
/**
 * 
 * @param {String} elem - the element that you want to hide. 
 */
function hideElements(elem) {
  let divs = document.querySelectorAll(elem);
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }
}

/*******************************************
Event Functions
 *******************************************/
/**
 * 
 * @param {String} thumbNail - the thumbnail anchor tag
 * @param {String} large  - the full size image to swap
 * @param {String} event - the event you want to do
 */
function swapImage(thumbNail, large, event) {
  let thumbs = document.querySelectorAll(thumbNail);
  let fullSize = document.querySelector(large);
  for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener(event, function() {
      let newSrc = this.getAttribute('href');
      fullSize.setAttribute('src', newSrc);
    });
  }
}

swapDescriptions('#thumbs > a', 'mouseover', '#descriptions > div',  'data-descriptionId');

function swapDescriptions(thumbNail, event, container, attribute) {
  // hideElements('#descriptions > div');
  let thumbs = document.querySelectorAll(thumbNail);
  let con = document.querySelectorAll(container);
  for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener(event, function(e) {
      for (var i = 0; i < con.length; i++) {
        let data = con[i].getAttribute(attribute);
        if (data == e.target.getAttribute(attribute)) {
          con[i].style.display = 'block';
        } else {
          con[i].style.display = 'none';
        }
      }
    });
  }
}

function roundCorners(slider, roundElem) {
  
  var span = document.createElement('span');
  span.textContent = '00';
  console.log(span)

} 

function toggleElement(bttn, des,) {
  /*
  set visibility flag = true
  get toggle button 
  get the big box of all descriptions 
  add click listener to the toggle button
    if big box is visible, hide it and change the buttons text
    if the big box is hidden, show it and change the buttons text
  */
}

