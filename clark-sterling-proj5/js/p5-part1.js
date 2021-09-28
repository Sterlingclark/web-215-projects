// For reference - The Beatles breakup announcement was made April 10, 1970

/*
Set a date in the past (The Beatles breakup date) and log it to the console
As the date won't change, it's a constant
*/
const BEATELSBREAKUP = new Date("10 April 1970 00:00:00");
console.log(BEATELSBREAKUP);
/*
Extract the year, month by number, date, and day of week by number and log them to the console
Be sure to log the correct month number. For example, January = 1, not 0
*/
const BREAKUPYEAR = BEATELSBREAKUP.getFullYear();
const BREAKUPMONTH = BEATELSBREAKUP.getMonth();
const BREAKUPDATE = BEATELSBREAKUP.getDate();
const BREAKUPDAY = BEATELSBREAKUP.getDay();

console.log("Year: " + BREAKUPYEAR);
console.log("Month Number: " + (BREAKUPMONTH +1));
console.log("Date: " + BREAKUPDATE);
console.log("Day: " + BREAKUPDAY);
/*
Append a leading 0 to the month number for January through September as those month numbers have a single digit. Log the new number to the console.
*/

/**
 * 
 * @param {Number} n - Month number 
 * @returns - The month number if less then 10 and add the month number to its self if zero. 
 */
function pad(n) {
  return n<10 ? '0'+n : n;
}

var formattedMonth = pad(BREAKUPMONTH + 1);
console.log("Month with Leading Zero: " + formattedMonth);
/*
Convert the month number to a month name (long name, not an abbreviation) and log it to the console
*/
var monthNames = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

var fullMonthName = monthNames[BREAKUPMONTH];
console.log("Month Name: " + fullMonthName);
/*
Convert the day number to a day name (long name, not an abbreviation) and log it to the console
*/
var dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
var fullDayName = (dayNames[BREAKUPDAY]);
console.log("Day name: " + fullDayName);
/* 
Use variables you already have to build a string for the breakup date like this:
Friday, April 10, 1970
*/
var fullDateString = fullDayName + ", " + fullMonthName + " "+ BREAKUPDATE + ", " + BREAKUPYEAR;
/*
Create a <b> element, populate its text with the string above, and place it on the page after the hardcoded <br> tag inside the hardcoded paragraph. If you are cringing because you think the <b> tag is deprecated, read the explanation in Part 2 of this project.
*/
var bTag = document.createElement("b");
var text = document.createTextNode(fullDateString);
bTag.appendChild(text);
document.getElementsByTagName("p")[0].appendChild(bTag);
