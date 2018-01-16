// Word.js file is used to check the random word from the word bank against the letters guessed.

// Require the Letter constructor function that was exported from letter.js.
var Letter = require("./letter");

// Global variables (Pulled from original hw assignment):
    // Variable that represents the word bank.
    var wordBank = ["acadia", "everglades", "yosemite", "yellowstone", "glacier", "badlands", "shenandoah", "arches", "zion", "canaveral", "denali", "gettysburg", "antietam"];
    console.log("Words: ", wordBank);
    // variable to break the solution up into indv letter to be stored in the array:
    var lettersInChosenWord = [];
    // number of blanks shown based on solution.
    var numBlanks = 0;
    // mixture of blanks and correct letters.
    var blanksAndSuccesses = [];
    // holds all the wrong guesses.
    var guessWrongArray = [];
    // Variable that represents the solution.
    var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("Random Word: ", randomWord);
    // Variable at beginning of the game.
    var guessesLeft = 10;
    console.log("Guesses Left: ", guessesLeft);

// CONSTRUCTOR FUNCTION for creating the Word objects:
var Word = function(randomWord) {
    // To display a random word:
    this.randomWord = randomWord;
    console.log("And, Random Word: ", this.randomWord);
    // this.letter will hold all the Letter objects
    this.letter = [];
    console.log("Letter: ", this.letter);
     // Method that prints the letter info:
     this.printInfo = function() {
        console.log("And, word: ", this.randomWord);
        console.log("And, letter: ", this.letter);
      };
    // ...add other parameters for the Word object.
    // this., etc.
    
    // ...Do I add methods here to pull in information from the letter.js file? Such as:
    // method for filling up the blanks and successes list with the correct number of blanks based on the number of letters in the solution. (From the StartGame() in the original hw.)
    // method for completing all of the comparisons to match letters to guesses, etc. (Part III function from original hw.)
    // Method based on whether a user letter is found in the word. (From Part III of original HW)
//     this.letterInWord = function checkLetters(letter) {
//         var letterInWord = false;
//         for (var i = 0; i < numBlanks; i++) {
//             if (randomWord[i] === letter) {
//                 letterInWord = true;
//             }
//         }
//         // if the letter exists in the word, then find out where it belongs.
//         if (letterInWord) {
//             // Loop through the word
//             for (var j = 0; j < numBlanks; j++) {
//                 if (randomWord[j] === letter) {
//                     // put it in the correct spot.
//                     blanksAndSuccesses[j] = letter;
//                 }
//             }
//             console.log("Correct Spot?: ", blanksAndSuccesses);
//         } else {
//             // add the letter to the list of wrong letters and subtract one of the guesses.
//             guessWrongArray.push(letter);
//             guessesLeft--;
//         }
//     }
//     // Add Method for breaking the word up into indv letters. 
//     this.lettersInChosenWord = randomWord.split("");
//     console.log("Letters in Chosen Word (split): ", lettersInChosenWord);
//     // Then counts the letters in the word.
//     this.numBlanks = lettersInChosenWord.length;
//     console.log("Blanks: ", numBlanks);

// // The following methods create a Letter object from the constructor function that we required and pushes it to the "this.letter" array.
// this.addLetter = function(letter) {
//     this.letter.push(new Letter (letter));
// };
};


// Exports the Word constructor that will be used in main.js
module.exports = Word;