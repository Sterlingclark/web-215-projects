/**
 * 
 * @param {Number} n - Month number 
 * @returns - The month number if less then 10 and add the month number to its self if zero. 
 */
  function pad(n) {
  return n<10 ? '0'+n : n;
}

/**
 * 
 * @param {string} theDate -the date  
 * @param {string} id  - the id of the element to attach the string to.
 */

function dateString(theDate, id) {
  const IMPORTANTDATE = new Date(theDate);
  
  var dateNumber = IMPORTANTDATE.getDate();
  var mon = IMPORTANTDATE.getMonth();
  const YEAR = IMPORTANTDATE.getFullYear();
  const DAY = IMPORTANTDATE.getDay();

  var formattedDate = pad(dateNumber);

  var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  var fullMonthName = monthNames[mon];

  var dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  var fullDayName = (dayNames[DAY]);

  var fullDateString = fullDayName + ", " + fullMonthName + " " + dateNumber +", " + YEAR;

  var br = document.createElement("br");
  document.querySelector(id).appendChild(br);
  var b = document.createElement("b");
  document.querySelector(id).appendChild(b);
  var time = document.createElement("time");
  time.setAttribute('datetime', YEAR-mon-formattedDate);
  time.textContent = fullDateString;
  document.querySelector(id + ' b').appendChild(time);
}

dateString('Dec 17, 1770', '#beethoven');
dateString('July 27, 1940', '#bugs');
dateString('Jan 2, 1968', '#transplant');
dateString('July 4, 1997', '#mars');
