// Letter.js file is used to render the letter. (Determine how to display letters for the user.) Either as the letter or a "_" blank.

// Just to test...
// var letter = process.argv[2];
// console.log("What letter did I press? ", letter);

// CONSTRUCTOR function for creating the Letter objects:
var Letter = function(letter) {
    // Set the variable for what the user enters.
    this.letter = letter;
    console.log("Letter: ", this.letter);
    // Method that prints the letter info:
    this.printInfo = function() {
        console.log("And, letter: ", this.letter);
      };
}
// Sets a new variable for a new letter input:
var input = new Letter (process.argv[2]);
// calls the printInfo method:
input.printInfo();

// Exports the Letter constructor. It will be required in the word.js file.
module.exports = Letter;