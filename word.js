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
    // A method to reset the guess/success array after each round. (I don't think I need this but keeping for now. I may need this in the Inquirer menu.)
    this.reset = function () {
        var guessWrongArray = [];
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
            console.log("From word.js..Answer: ", this.myDisplayAnswer);
        }
        }

    // This method will now fill in spaces based on letters guessed. (uses the getCharacter prototype from letter.js).
    this.checkLetter = function (guessedLetter) {
        for (var i = 0; i < this.letterObjArray.length; i++) {
            if (myLetter.getCharacter() === guessedLetter) {
                myLetter.guessed = true;
            }
        }
        this.displayWord();
        console.log("From word.js..Check Letter: ", guessedLetter);
        }

}

// Exports the Word constructor that will be used in main.js
module.exports = Word;