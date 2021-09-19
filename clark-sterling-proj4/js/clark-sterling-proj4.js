// Change the inner HTML of the H1 element
document.querySelector("h1").innerHTML = "Congratulations!";

// Change the first paragraph to a BLOCKQUOTE and changed the text
document.querySelector("p").outerHTML = "<blockquote>You have JavaScript.</blockquote>";

// Add the target attribute to anchor tags
const MDNLINK = document.querySelector(".externalLink");

if (MDNLINK.hasAttribute("target")) {
  console.log(MDNLINK.getAttribute("target"));
} else {
  MDNLINK.setAttribute("target", "_blank");
}

// Change the H1 to display as uppercase
document.querySelector("h1").style.textTransform = "uppercase";

// Change css properties on the BLOCKQUOTE
document.querySelector("blockquote").style.cssText = "background-color: #ffff80; border: solid 5px #ff0000; padding: 1rem; ";

// Change classes for the anchor tag
MDNLINK.classList.remove("importantLink");
MDNLINK.classList.add("veryImportantLink");