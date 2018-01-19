// Letter.js file is used to determine how to display the input from the user. Either as the letter or a "_" blank.

// ------------------------------------------------------
// CONSTRUCTOR function for creating the Letter objects:
// ------------------------------------------------------
var Letter = function(letter) {
    // Set the variable for what the user enters.
    this.letter = letter;
    console.log("From letter.js...Letter: ", this.letter);
    // Set a placeholder variable for the blank spaces.
    this.blank = "_ ";
    console.log("From letter.js...Blank: ", this.blank);
    // Set a boolean variable to determine if the letter or blank should display based on the user guess. Right now it is set to false.
    this.guessed = false;
    console.log("From letter.js...Guessed: ", this.guessed);
}
    
// Prototype from Kristi's example. This one just returns the letter. Create as a prototype to make it more portable and increase usability elsewhere in the application. (Created outside of the constructor.)
    Letter.prototype.getCharacter = function() {
        return this.letter;
    }

// Another prototype that incorporates all of the constructor variables set earlier. This function returns whatever character (letter or blank) should display. (Remember! Do not need to know the word yet, this is for future use in the word.js file!)
    Letter.prototype.getDisplayCharacter = function() {
        if(this.guessed) {
            return this.letter;
        } else {
            return this.blank;
        }
    }

// Exports the Letter constructor. It will be required in the word.js file.
module.exports = Letter;