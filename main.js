// Main.js will contain the inquirer menu and start/restart logic to run the game.

// Require the word module exported from word.js
var Word = require("./word.js");

// ----------------------------------------
// Create new Word objects to test word.js
// ----------------------------------------
var myWord = new Word(this.randomWord);
myWord.displayWord();
myWord.displayAnswer();
myWord.checkLetter("s");
myWord.checkLetter("u");
myWord.checkLetter("m");
myWord.checkLetter("e");
myWord.checkLetter("r");
myWord.checkLetter("p");

// -------------------------------------------------------------------------
// Create Inquirer menu to display the word and prompt the user for guesses.
// -------------------------------------------------------------------------

// Dependency for inquirer npm
var inquirer = require("inquirer");

// The following function runs inquirer and asks the user questions as the game progresses.
// Guesses are stored in the guess variable inside of the .then statement.
// function startGame() {

//     inquirer.prompt([{
//             type: "input",
//             name: "userGuess",
//             message: "Try to guess the word! Choose a letter to start the game.",
//         }

//     ]).then(function (guess) {
    // I want to be able to take in the user guess and begin the matching process. I should be able to reference the Letter constructor here since it has the conditionals already built into it.
    // NEED CODE HERE.

    // I want to also display the blanks for the random word that is chosen. I should be able to reference the Word constructor here since it has the display methods already built into it.
    // NEED CODE HERE.

    // This is some of the code that I will need to finalize a round, determine win or loss and then start a new game.
        // --State of variable at beginning of the game.
        // var guessesLeft = 10;
        // --Variable to break the solution up into indv letter to be stored in the array:
        // var lettersInChosenWord = [];
        // --Number of blanks shown based on solution.
        // var numBlanks = 0;
        // --Mixture of blanks and correct letters.
        // var blanksAndSuccesses = [];
        // --Holds all the wrong guesses.
        // var guessWrongArray = [];
        // --Log an initial status update in the console telling us how many guesses are left.
        // console.log("You Have" + guessesLeft + " guesses left.");
        // --Update the page to reflect the new number of guesses and update the correct guesses.
        // console.log("word-blanks: ", blanksAndSuccesses.join(" "));
        // console.log("letters-used: ", guessWrongArray.join(" "));

        // --If all the letters match the solution, show the won message else lost message.
//         if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
//             console.log("You Won!");
//             startGame();
//         } else if (guessesLeft === 0) {
//             console.log("You Lost!");
//             // Restart the game.
//             startGame();
//         }
//     });
// }

// Starts the game!
// startGame();