//l etter constructor
// input for letter
//method to replace letter 
//inquirer prompt function 
//disply word 
//take input 
//.then compare if yes use rplace letter method and check if word is equl to original word.
//else push it to letter already guessed and reduce number of guesses and check if 







var words = require('./word.js');
var guessWords = require('./guessWords.js');
var inquirer = require("inquirer");
var letterAlreadyGuessed = [];
var guessesRemaining = 10;

var letter = function(letter, word,wins,losses){

	this.letterguessed =letter;
	this.guessesRemaining = guessesRemaining;
	this.wordSelected = word;
	this.wins = wins;
	this.losses = losses;

	this.reset = function(){
		this.guessesRemaining=guessesRemaining;
		var nextWord = new pickedWord(guessWords.computerGuess);
		nextWord.wordHide();
	}
	this.checkLetter = function(){
			//if(this.letterPresence)
		//{
			for (var i = 0; i < this.wordSelected.length; i++) {
				console.log(this.letterguessed);
				if(this.wordSelected[i] === this.letterguessed ){
					currentWord[i] = currentWord[i].replace("_",this.letterguessed);
				}
				console.log(currentWord)
			}
			
			console.log("you guessed it right")
		//}

		// else if(!this.letterPresence && !letterAlreadyGuessed){
		// 		this.letterAlreadyGuessed.push(this.letterguessed); 
		// 		this.guessesRemaining--;
		// 		console.log("you guessed it wrong");
			
			}
		
	

	this.checkWins = function(){
		if(this.guessesRemaining != 0 && currentWord == this.wordSelected){
			this.wins++;
			console.log("wins:" + this.win +'\n'+"Losses:" + this.losses);
			console.log("You win");
			this.reset();
		}

	}
	this.checkLosses = function(){
		if(this.guessesRemaining == 0 && currentWord != this.wordSelected){
			this.losses++;
			console.log("wins:" + this.win +'\n'+"Losses:" + this.losses);
			console.log("You Lose");
			this.reset();
		}

	}

}

var word1 = new words(guessWords.computerGuess);
word1.wordDisplay();
var currentWord = word1.wordHide();
//console.log(word1.word)
//console.log(word1.hiddenWord)

//console.log("word is " + word1.word.join(""));
//console.log("Computer Picked " + guessWords.computerGuess);

function game(){
	if(guessesRemaining != 0 && (currentWord != guessWords.computerGuess)){
		inquirer.prompt([  {
			name: "letter",
			message: "Please guess the letter?"
		}]).then(function(answers){
			var letterPresence = guessWords.computerGuess.includes(answers.letter)
			console.log(letterPresence);
			if(letterPresence){
				var game1 = new letter(answers.letter,guessWords.computerGuess);
					game1.checkLetter();
					game1.checkWins();
					game1.checkLosses();
				}

			else if(!letterPresence && !letterAlreadyGuessed){
						letterAlreadyGuessed.push(answers.letter); 
						guessesRemaining--;
		console.log("you guessed it wrong");

			}
			game();
		});

	}
}
game();