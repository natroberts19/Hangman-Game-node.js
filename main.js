// Main.js will contain the inquirer menu and start/restart logic to run the game.

// Require the word module exported from word.js
var Word = require("./word.js");

// --------------------------------------------------------
// Create new Word objects to test word.js
// --------------------------------------------------------
var myWord = new Word(this.randomWord);
myWord.displayWord();
myWord.displayAnswer();
myWord.checkLetter("s");
myWord.checkLetter("u");
myWord.checkLetter("m");
myWord.checkLetter("e");
myWord.checkLetter("r");
myWord.checkLetter("p");


// Create Inquirer menu to display the word and prompt the user for guesses.
// Dependency for inquirer npm
var inquirer = require("inquirer");

// The following function runs inquirer and asks the user questions as the game progresses.
// Answers are stored in the answers variable inside of the .then statement.
inquirer.prompt([
    {
        name: "letter",
        message: "Guess a letter."
    }
]).then(function(answers) {
    // test the responses
    console.log("Guess: ", answers.letter);
});

