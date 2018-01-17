// Letter.js file is used to determine how to display the input from the user. Either as the letter or a "_" blank.
// Do I need to access the random word in this file?????

// Just to test...
// var letter = process.argv[2];
// console.log("What letter did I press? ", letter);

// CONSTRUCTOR function for creating the Letter objects:
var Letter = function(letter) {
    // Set the variable for what the user enters.
    this.letter = letter;
    this.blank = "_";
    console.log("From letter.js...Letter: ", this.letter);
    // Method that prints the letter info:
    this.getLetter = function() {
        console.log("From letter.js...And, getLetter: ", this.letter);
      };
    this.displayLetter = function() {
        // Need a method here that determines how to display the letter, either as letter or "_". 
        // **Q** How do I write this if I can't "see" the random word??? 
        if (this.letter = letter) {
            this.displayLetter = true;
        } else {
            return this.blank;
        }
        console.log("display correct character: ", this.displayLetter);
        }
    }

// Sets a new variable for a new letter input:
var input = new Letter (process.argv[2]);
// calls the getLetter method:
input.getLetter();

// Exports the Letter constructor. It will be required in the word.js file.
module.exports = Letter;