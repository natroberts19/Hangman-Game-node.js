// Require the Letter constructor function that was exported from letter.js.
var Letter = require("./letter");

// Global variables (Pulled from original hw assignment):
// Variable that represents the word bank.
var word = ["acadia", "everglades", "yosemite", "yellowstone", "glacier", "badlands", "shenandoah", "arches", "zion", "canaveral", "denali", "gettysburg", "antietam"];
// Variable that represents the solution.
var random = "";
// Variable at beginning of the game.
var guessesLeft = 10;
// Number of blanks shown based on solution.
var numBlanks = 0;


// CONSTRUCTOR FUNCTION for creating the Word objects:
var Word = function(need params) {
// this.letter will hold all the Letter objects
this.letter = [];
// ...add other parameters for the Word object.
// this.
// this., etc.


// The following methods creates a Letter object from the constructor function that we required and pushes it to the "this.letter" array.
this.addLetter = function(need params) {
    this.letter.push(new Letter (need params));
};
};

// Exports the Word constructor that will be used in main.js
module.exports = Word;