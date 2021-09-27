function famousDates(mon, date, year) {
  this.mon = mon;
  this.date = date;
  this.year = year;
  this.padMon = function pad(n) {
    return n<10 ? '0'+n : n;
  }
  
  var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  var fullMonthName = monthNames[mon + 1];

  var dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  var fullDayName = (dayNames[date]);

  var fullDateString = fullDayName + ", " + fullMonthName + ", " + date +", " + year;

  var br = document.createElement("br");
  var b = document.createElement("b");
  var time = document.createElement("time");
  var text = document.createTextNode(fullDateString);
  time.append(text);
  b.append(time);
  br.append(b);

  document.getElementById("beethoven").appendChild(br);
  
}

famousDates(12, 17, 1770);
famousDates(07, 27, 1940);
famousDates(01, 02, 1968);
famousDates(07, 04, 1997);

