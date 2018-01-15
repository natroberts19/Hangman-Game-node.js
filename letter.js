// Letter.js file is used to render the letter. (Determine how to display letters for the user.) Either as the letter or a "_" blank.

// Globals pulled from original assignment:
    // variable to break the solution up into indv letter to be stored in the array:
    var lettersInChosenWord = [];
    // number of blanks shown based on solution.
    var numBlanks = 0;
    // mixture of blanks and correct letters.
    var blanksAndSuccesses = [];
    // holds all the wrong guesses.
    var guessWrongArray = [];

// CONSTRUCTOR function for creating the Letter objects:
var Letter = function(letter) {
    // Set the variable for what the user enters.
    this.letter = letter;
    // Method based on whether a user letter is found in the word. (From Part III of original HW)
    this.letterInWord = function checkLetters(letter) {
        var letterInWord = false;
        for (var i = 0; i < numBlanks; i++) {
            if (randomWord[i] === letter) {
                letterInWord = true;
            }
        }
        // if the letter exists in the word, then find out where it belongs.
        if (letterInWord) {
            // Loop through the word
            for (var j = 0; j < numBlanks; j++) {
                if (randomWord[j] === letter) {
                    // put it in the correct spot.
                    blanksAndSuccesses[j] = letter;
                }
            }
            console.log("Correct Spot?: ", blanksAndSuccesses);
        } else {
            // add the letter to the list of wrong letters and subtract one of the guesses.
            guessWrongArray.push(letter);
            guessesLeft--;
        }
    }
    // Add Method for breaking the word up into indv letters. 
    this.lettersInChosenWord = randomWord.split("");
    console.log("Letters in Chosen Word (split): ", lettersInChosenWord);
    // Then counts the letters in the word.
    this.numBlanks = lettersInChosenWord.length;
    console.log("Blanks: ", numBlanks);
}

// Exports the Letter constructor. It will be required in the word.js file.
module.exports = Letter;