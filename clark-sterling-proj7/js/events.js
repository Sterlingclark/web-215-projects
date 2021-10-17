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
swapDescriptions('#thumbs > a', 'mouseover', '#descriptions > div',  'data-descriptionId');
roundCorners('#thumb-roundness-control input', '#gallery a');
roundCorners('#large-roundness-control input', '#full-size img');
toggleElement('#description-control span', '#descriptions', 'Show Descriptions', 'Hide Descriptions');

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

/**
 * 
 * @param {String} thumbNail -anchor tag of the thumbnail img
 * @param {String} event - the event you want to happen
 * @param {String} container - the container of the discription text
 * @param {String} attribute - the attribute in the html that is passed
 */
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

function roundCorners(slider, target) {
  if(!target.isArray) {
    var targetElm = document.querySelectorAll(target);
  } else {
    var targetElm = document.querySelector(target);
  }

  let newSlider = document.querySelector(slider);
  let span = document.createElement('span');
  newSlider.insertAdjacentElement('afterend', span);

  newSlider.addEventListener('mousemove', function() {
    if(this.value < 9) {
      span.textContent = '0' + this.value + '%';
    } else {
      span.textContent = this.value + '%';
    }
    targetElm.forEach(el => el.style.borderRadius = this.value + 'px');
  });
}





/**
 * 
 * @param {String} bttn - the element around the button
 * @param {String} des - the descriptions
 * @param {String} show - the value passed to show the descriptions when clicked
 * @param {String} hide - the value passed to hide the descriptions when clicked
 */
function toggleElement(bttn, des, show, hide) {
  var toggled = false;
  var button = document.querySelector(bttn);
  var target = document.querySelector(des);

  button.addEventListener('click', function() {
    toggled = !toggled;
    if(toggled == true) {
      button.textContent = show;
      target.style.display = 'none';
    } else {
      button.textContent = hide;
      target.style.display = 'block';
    }
  });
}

