function famousDates(mon, day, year) {
  this.mon = mon;
  this.day = day
  this.year = year
  this.padMon = function pad(n) {
    return n<10 ? '0'+n : n;
  }
}