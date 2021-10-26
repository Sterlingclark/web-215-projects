makePyramid(10, ':');
makePyramid(3, '*');
makePyramid(5, '^');

makeMultiCharPyramid(5, "^~^");
makeMultiCharPyramid(8, "qwert");
makeMultiCharPyramid(10, "1 2 3");

/**
 * 
 * @param {INT} rows - The number of rows in the pyramid
 * @param {String} character - The character you want the pyramid made out of
 */
function makePyramid(rows, character) {
  for(i = 1; i <= rows; i++){
    const DIV = document.createElement("div");

    for(c = 1; c <= (rows - i); c++){
      DIV.innerHTML += "&nbsp;";
    }

    for(j = 1; j <= i; j++) {
      DIV.innerHTML += character + "&nbsp;";
    }

    document.querySelector("body").appendChild(DIV);
  }
  
  document.querySelector("body").innerHTML += '<hr>';
  }

  /**
 * 
 * @param {INT} rows - The number of rows in the pyramid
 * @param {String} character - The characters you want the pyramid made out of
 */
  function makeMultiCharPyramid(rows, characters) {
    for(i = 1; i <= rows; i++){
      const DIV = document.createElement("div");
  
      for(c = 1; c <= (rows - i); c++){
        DIV.innerHTML += "&nbsp;".repeat(characters.length);
      }
  
      for(j = 1; j <= i; j++) {
        DIV.innerHTML += "&nbsp;".repeat(characters.length) + characters;
      }
  
      document.querySelector("body").appendChild(DIV);
    }
    
    document.querySelector("body").innerHTML += '<hr>';
    }
