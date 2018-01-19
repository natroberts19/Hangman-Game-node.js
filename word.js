// Word.js file is used to:
// Check the random word from the word bank against the letters guessed.

// Require the Letter constructor function that was exported from letter.js.
var Letter = require("./letter");

// --------------------------------------------------------------
// TEST the functions from letter.js
// --------------------------------------------------------------
// Create an instance of the Letter object(constructor) and pass hardcode values to test the functions from letter.js.
var myLetter = new Letter("b");
console.log("myLetter: ", myLetter.getCharacter());
console.log("displayCharacter: ", myLetter.getDisplayCharacter());

// Now change the guessed value of myLetter to "true" and run displayCharacter again. (Do this here, not in letter.js!)
myLetter.guessed = true;
console.log("displayCharacter true: ", myLetter.getDisplayCharacter());

// ---------------------------------------------------------------------
// Legacy code below from Week 3 HW
// ---------------------------------------------------------------------

// variable to break the solution up into indv letter to be stored in the array:
var lettersInChosenWord = [];
// number of blanks shown based on solution.
var numBlanks = 0;
// mixture of blanks and correct letters.
var blanksAndSuccesses = [];
// holds all the wrong guesses.
var guessWrongArray = [];
// Variable at beginning of the game.
var guessesLeft = 10;
// console.log("Guesses Left: ", guessesLeft);

// TEST THIS in isolation for randomWord:
// This is the startGame function from original HW. Needs to be made into a method within the new Word constructor function or Letter constructor function.
// function startGame() {
//     // choose solution randomly from the parksList.
//     randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//     console.log("From word.js...Random Word: ", randomWord);
//     // break the word up into indv letters. Then count the letters in the word.
//     lettersInChosenWord = randomWord.split("");
//     console.log("Letters in Chosen Word (split): ", lettersInChosenWord);
//     numBlanks = lettersInChosenWord.length;
//     console.log("Random Word: ", randomWord);
//     // Now, reset the guess/success array after each round.
//     blanksAndSuccesses = [];
//     // And, reset the worng guesses after each round.
//     guessWrongArray = [];
//     // Fill up the blanks and successes list with the correct number of blanks based on the number of letters in the solution.
//     for (var i = 0; i < numBlanks; i++) {
//         blanksAndSuccesses.push("_");
//     }
//     console.log("# of Blanks: ", blanksAndSuccesses);

//     // Puts the guesses left back to 10
//     console.log("Guesses Left: ", guessesLeft);
//     // Prints the blanks at the beginning of each round.
//     console.log("Join blanks and successes: ", blanksAndSuccesses.join(" "));
//     // clears the wrong guesses from the previous round.
//     console.log("Clear the guesses: ", guessWrongArray.join(" "));
// }
// // call the function - this WORKS in isolation.
// startGame();

// // TEST THIS in isolation for the checkLetters function from the original HW assignment:
// function checkLetters(letter) {
//     // create boolean toggle based on whether a user letter is found in the word.
//     var letterInWord = false;
//     for (var i = 0; i < numBlanks; i++) {
//         // ==>
//         if (randomWord[i] === letter) {
//             letterInWord = true;
//         }
//     }
//     // if the letter exists in the word, then find out where it belongs.
//     if (letterInWord) {
//         // Loop through the word
//         for (var j = 0; j < numBlanks; j++) {
//             if (randomWord[j] === letter) {
//                 // put it in the correct spot.
//                 blanksAndSuccesses[j] = letter;
//             }
//         }
//         console.log("Correct Spot?: ", blanksAndSuccesses);
//     } else {
//         // add the letter to the list of wrong letters and subtract one of the guesses.
//         guessWrongArray.push(letter);
//         guessesLeft--;
//     }
// }

// // TEST THIS in isolation...this is the roundComplete function that runs after each guess is made.
// function roundComplete() {

//     // First, log an initial status update guesses are left.
//     console.log("Guesses Left: ", guessesLeft);

//     // update the the cli to reflect the new number of guesses and update the correct guesses.
//     console.log("word-blanks: ", blanksAndSuccesses.join(" "));
//     console.log("letters-used: ", guessWrongArray.join(" "));

//     // if all the letters match the solution.
//     if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
//         console.log("You won!")
//         startGame();
//     } else if (guessesLeft === 0) {
//         console.log("You lost!")
//         startGame();
//     }
// }
// roundComplete();
// ----------------------------------------------------------
// CONSTRUCTOR FUNCTION for creating the Word objects:
// ----------------------------------------------------------
var Word = function (randomWord) {
    // To display a random word:
    this.wordBank = ["acadia", "everglades", "yosemite", "yellowstone", "glacier", "badlands", "shenandoah"];
    console.log("From word.js...Word Bank: ", this.wordBank);

    this.randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    console.log("From word.js...Random Word: ", this.randomWord);

    // break the word up into indv letters. Then count the letters in the word.
    this.randomWordArray = this.randomWord.split("");
    console.log("Split Word: ", this.randomWordArray);

    this.numBlanks = this.randomWordArray.length;
    console.log("Blanks: ", this.randomWordArray);
    
    // Now, reset the guess/success array after each round.
    this.reset = function() {
        var blanksAndSuccesses = [];
        var guessWrongArray = [];
        for (var i = 0; i < this.numBlanks; i++) {
            blanksAndSuccesses.push("_");
        }
    }
    console.log("# of Blanks: ", blanksAndSuccesses);

}

// Now pass the word into an array that includes the new Letter objects. (From Kristi...)
Word.prototype.createLetterArray = function () {
    var letterObjArray = [];
    for (var i = 0; i < this.randomWord.length; i++) {
        letterObjArray.push(new Letter(this.randomWord[i]));
    }
    return letterObjArray;
    console.log("new letter object: ", this.createLetterArray);
}







// Exports the Word constructor that will be used in main.js
module.exports = Word;