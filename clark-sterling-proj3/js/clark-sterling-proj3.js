/**
 * Tip Calculator Function
 * @param {Number} bill -base amount of the bill
 * @param {Number} tipPercent - the amount you want to tip
 * @param {Number} people -the number of people spliting the bill
 * @returns {String} A String that Displays the tipCalculator Function
 * 
 *  * This is the Movie ovject
 * @param {String} title -title of the movie
 * @param {Number} year -year the movie came out
 * @param {Boolean} favorite -Boolean if this is your favorite movie
**/

function tipCalculator(bill,tipPercent,people) {
  let tip = (tipPercent / 100) * bill;
  let fullBill = bill + tip;
  let billSplit = fullBill / people;
  return "A " + tipPercent + "% tip on $" + bill + " is $" + tip.toFixed(2) + "." + "\nThe total bill is therefore $" + fullBill.toFixed(2) + "." + "\nSplit between " + people + " people, it's about " + billSplit.toFixed(2) + " each.";
}

console.log(tipCalculator(62.75, 17, 4));
console.log(tipCalculator(105.85, 20, 3));
console.log(tipCalculator(85.98, 18, 2));

function Movie(title, year, favorite) {
  this.title = title;
  this.year = year;
  this.favorite = favorite;
  this.toggleFavorite = function() {
    this.favorite = !this.favorite;
  }
}

movie1 = new Movie("Raiders of the Lost Arc", 1981, false);
movie2 =  new Movie("The Thing", 1982, false);
movie3 = new Movie("Midsommer", 2019, true);

console.log(Movie("Raiders of the Lost Arc", 1981, false));
console.log(movie2);
console.log(movie3);
console.log(movie2.toggleFavorite());
console.log(movie2);
