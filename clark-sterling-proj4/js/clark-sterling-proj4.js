//Variables
let firstH1 = document.querySelector("h1");
// Change the inner HTML of the H1 element
firstH1.textContent = "Congratulations!";

// Change the first paragraph to a BLOCKQUOTE and changed the text
document.querySelector("p").outerHTML = "<blockquote>You have JavaScript.</blockquote>";

// Add the target attribute to anchor tags
const MDNLINK = document.querySelector(".externalLink");

MDNLINK.setAttribute("target", "_blank");

// Change the H1 to display as uppercase
firstH1.style.textTransform = "uppercase";

// Change css properties on the BLOCKQUOTE
document.querySelector("blockquote").style.cssText = "background-color: #ff8; border: solid 5px #f00; padding: 1rem; ";

// Change classes for the anchor tag
MDNLINK.classList.remove("importantLink");
MDNLINK.classList.add("veryImportantLink");