/**
 * Tip Calculator Function
 * @param {Number} bill -base amount of the bill
 * @param {Number} tipPercent - the amount you want to tip
 * @param {Number} people -the number of people spliting the bill
 * @returns {String} A String that Displays the tipCalculator Function
 */

function tipCalculator(bill,tipPercent,people) {
  let tip = (tipPercent / 100) * bill;
  let fullBill = bill + tip;
  let billSplit = fullBill / people;
  return "A " + tipPercent + "% tip on $" + bill + " is $" + tip.toFixed(2) + "." + "\nThe total bill is therefore $" + fullBill.toFixed(2) + "." + "\nSplit between " + people + " people, it's about " + billSplit.toFixed(2) + " each.";
}

console.log(tipCalculator(62.75, 17, 4));
console.log(tipCalculator(105.85, 20, 3));
console.log(tipCalculator(85.98, 18, 2));

/**
 * This is the Movie ovject
 * @param {String} title -title of the movie
 * @param {Number} year -year the movie came out
 * @param {Boolean} favorite -Boolean if this is your favorite movie
 */

function Movie(title, year, favorite) {
  this.title = title;
  this.year = year;
  this.favorite = favorite;
  
  /**
   * A function to change the boolean value of favorite movie
   */
  this.toggleFavorite = function() {
    this.favorite = !this.favorite;
  }
}

var movies = [
  new Movie("Raiders of the Lost Arc", 1981, false),
  new Movie("The Thing", 1982, false),
  new Movie("Midsommer", 2019, true),
]

console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);
console.log(movies[1].toggleFavorite());
console.log(movies[1]);
