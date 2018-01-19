// Word.js file is used to:
// Check the random word from the word bank against the letters guessed.

// Require the Letter constructor function that was exported from letter.js.
var Letter = require("./letter");

// --------------------------------------------------------------
// TEST the functions from letter.js
// --------------------------------------------------------------
// Create an instance of the Letter object(constructor) and pass hardcode values to test the functions from letter.js.
var myLetter = new Letter();
// console.log("myLetter: ", myLetter.getCharacter());
// console.log("displayCharacter: ", myLetter.getDisplayCharacter());

// Now change the guessed value of myLetter to "true" and run displayCharacter again. (Do this here, not in letter.js!)
// myLetter.guessed = true;
// console.log("displayCharacter true: ", myLetter.getDisplayCharacter());

// ----------------------------------------------------------
// CONSTRUCTOR FUNCTION for creating the Word objects:
// ----------------------------------------------------------
var Word = function (randomWord) {
    // To display the word bank:
    this.wordBank = ["acadia", "everglades", "yosemite", "yellowstone", "glacier", "badlands", "shenandoah"];
    console.log("From word.js..Word Bank: ", this.wordBank);
    // To display a random word from the word bank. (Hard coding "super" for now):
    this.randomWord = "super"
    // this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    console.log("From word.js..Random Word: ", this.randomWord);
    // To break the word up into indv letters. 
    this.randomWordArray = this.randomWord.split("");
    console.log("From word.js..Split Word: ", this.randomWordArray);
    // Then count the letters in the word.
    this.numBlanks = this.randomWordArray.length;
    console.log("From word.js..Blanks: ", this.randomWordArray);
    // Create an array to hold the blanks and successes: (I don't think I need this but keeping for now.)
    this.blanksAndSuccesses = [];
    // Create a starter variable for number of guesses.
    this.guessesLeft = 10;
    // Create an array to store wrong guesses.
    this.guessWrongArray = [];
    // A method to reset the guess/success array after each round. (I don't think I need this but keeping for now. I may need this in the Inquirer menu.)
    this.reset = function () {
        this.guessWrongArray = [];
        for (var i = 0; i < this.numBlanks; i++) {
            this.blanksAndSuccesses.push("_");
        }
    }
    console.log("From reset method: ", this.blanksAndSuccesses);

    // This method creates an array for new Letter objects. Then pushes the random word into an array that includes the new Letter objects. The new array will include the objects in the format of {letter: "", blank: "_", guessed: true/false} (Help from Kristi here...)
    this.createLetterArray = function () {
        var letterObjArray = [];
        for (var i = 0; i < this.randomWord.length; i++) {
            letterObjArray.push(new Letter(this.randomWord[i]));
        }
        return letterObjArray;
    }
    this.letterObjArray = this.createLetterArray();
    console.log("From word.js..New Letter Object: ", this.letterObjArray);

    // This method displays the current status of the word and adds to it the letters and blanks (uses the getDisplayCharacter prototype from letter.js).
    this.displayWord = function () {
        var myDisplayWord = "";
        for (var i = 0; i < this.letterObjArray.length; i++) {
            myDisplayWord += myLetter.getDisplayCharacter();
            console.log("From word.js..Current Status of Word: ", myDisplayWord);
        }
    }

    // This method displays the answer once all the spaces have been filled. (uses the getCharacter prototype from letter.js).
    this.displayAnswer = function () {
        var myDisplayAnswer = "";
        for (var i = 0; i < this.letterObjArray.length; i++) {
            myDisplayAnswer += myLetter.getCharacter();
            console.log("From word.js..Answer: ", myDisplayAnswer);
        }
    }

    // This method will now fill in spaces based on letters guessed. (Using legacy code here from my Wk 3 game.)
    this.checkLetter = function (guessedLetter) {
        // Create boolean toggle based on whether a user letter is found in the word.
        var letterInWord = false;
        for (var i = 0; i < this.numBlanks; i++) {
            if (this.randomWord[i] === guessedLetter) {
                letterInWord = true;
            }
        }
        // If the letter exists in the word, then find out where it belongs.
        if (letterInWord) {
            // Loop through the word...
            for (var j = 0; j < this.numBlanks; j++) {
                if (this.randomWord[j] === guessedLetter) {
                    // ...and, put it in the correct spot.
                    this.blanksAndSuccesses[j] = guessedLetter;
                }
            }
            console.log("Correct Spot?: ", this.blanksAndSuccesses);
        } else {
            // Add the letter to the list of wrong letters and subtract one of the guesses.
            this.guessWrongArray.push(guessedLetter);
            console.log("Wrong Guess Array: ", this.guessWrongArray);
            this.guessesLeft--;
            console.log("Guesses Left: ", this.guessesLeft);
        }
        console.log("From word.js..Check Letter: ", guessedLetter);
    }
    // This method will hold the code that needs to be run after each guess is made. (Using legacy code here from my Wk 3 game.)
    this.roundComplete = function() {
        // First, log an initial status update in the console telling us how many wins, losses, and guesses are left.
        console.log("Guesses Left: ", this.guessesLeft);
        // update the page to reflect the new number of guesses and update the correct guesses.
        console.log("word-blanks: ", this.blanksAndSuccesses.join(" "));
        console.log("letters-used: ", this.guessWrongArray.join(" "));
        // Check if all the letters match the solution.
        if (this.randomWordArray.toString() === this.blanksAndSuccesses.toString()) {
            console.log("You Won");
            // startGame();
        } else if (this.guessesLeft === 0) {
            console.log("You Lost!");
            // restart the game.
            // startGame();
        }
    }
    this.roundComplete();
    

}

// Exports the Word constructor that will be used in main.js
module.exports = Word;