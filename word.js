// Word.js file is used to check the random word from the word bank against the letters guessed.

// Require the Letter constructor function that was exported from letter.js.
var Letter = require("./letter");

// Global variables (Pulled from original hw assignment):
    // Variable that represents the word bank.
    var wordBank = ["acadia", "everglades", "yosemite", "yellowstone", "glacier", "badlands", "shenandoah", "arches", "zion", "canaveral", "denali", "gettysburg", "antietam"];
    // Variable that represents the solution.
    var randomWord = "";
    // Number of blanks shown based on the solution.
    var numBlanks = 0;
    // Variable at beginning of the game.
    var guessesLeft = 10;

// CONSTRUCTOR FUNCTION for creating the Word objects:
var Word = function(randomWord) {
    // To display a random word:
    this.randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randomWord);;
    // this.letter will hold all the Letter objects
    this.letter = [];
    // ...add other parameters for the Word object.
    // this., etc.
    
    // ...Do I add methods here to pull in information from the letter.js file? Such as:
    // method for filling up the blanks and successes list with the correct number of blanks based on the number of letters in the solution. (From the StartGame() in the original hw.)
    // method for completing all of the comparisons to match letters to guesses, etc. (Part III function from original hw.)
}

// The following methods create a Letter object from the constructor function that we required and pushes it to the "this.letter" array.
// this.addLetter = function(need params) {
//     this.letter.push(new Letter (need params));
// };
// };

// Exports the Word constructor that will be used in main.js
module.exports = Word;