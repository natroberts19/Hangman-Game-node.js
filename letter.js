// Letter.js file is used to determine how to display the input from the user. Either as the letter or a "_" blank.

// Just to test...
// var letter = process.argv[2];
// console.log("What letter did I press? ", letter);

// CONSTRUCTOR function for creating the Letter objects:
var Letter = function(letter) {
    // Set the variable for what the user enters.
    this.letter = letter;
    this.blank = "_";
    console.log("From word.js...Letter: ", this.letter);
    // guessed is used to determine if the letter or blank should display. Right now it is set to false.
    this.guessed = false;
}
    
// Prototype from Kristi's example. This one just returns the letter. Create as a prototype to make it more portable and increase usability elsewhere in the application.
    Letter.prototype.getCharacter = function() {
        return this.letter;
    }

// Another prototype that returns whatever character (letter or blank) should display. (Remember! Do not need to know the word yet, this is for future use in the word.js file!)
    Letter.prototype.getDisplayCharacter = function() {
        if(this.guessed) {
            return this.letter;
        } else {
            return this.blank;
        }
    }

// Exports the Letter constructor. It will be required in the word.js file.
module.exports = Letter;