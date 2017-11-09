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
var wins = 0;
var losses = 0;
var computerGuess= guessWords.words[Math.floor(Math.random() * guessWords.words.length)].toLowerCase();
var letter = function(letter, word){

	this.letterguessed =letter;
	// this.guessesRemaining = guessesRemaining;
	this.wordSelected = word;
	//this.wins = wins;
	//this.losses = losses;

	// this.reset = function(){
	// 	this.guessesRemaining=guessesRemaining;
	// 	var nextWord = new pickedWord(guessWords.computerGuess);
	// 	nextWord.wordHide();
	// };

	this.checkLetter = function(){

		//console.log("In Checkletter " + this.wordSelected.length);
			//if(this.letterPresence)
		//{
			for (var i = 0; i < this.wordSelected.length; i++) {
				// console.log(this.letterguessed);
				// console.log(this.wordSelected);
				// console.log(typeof(this.wordSelected));
				// console.log(typeof(currentWord));
				if(this.wordSelected[i] === this.letterguessed ){
					//console.log(startGame.currentWord[i]);
					currentWord[i] = currentWord[i].replace("_",this.letterguessed);

				}

			}
			console.log(currentWord.join("   "));

			console.log("you guessed it right")


		};





	};


var word1 = new words(computerGuess);
word1.wordDisplay();
var currentWord = word1.wordHide();

function restart(){
	computerGuess= guessWords.words[Math.floor(Math.random() * guessWords.words.length)].toLowerCase();
	console.log("going in restart")
	inquirer.prompt([{
		type:"confirm",
		name: "reset",
		message: "Do you want to Play again?"
	}]).then(function(response){
		if(response.reset){
			//computerGuess= guessWords.words[Math.floor(Math.random() * guessWords.words.length)].toLowerCase();
			letterAlreadyGuessed=[];
			guessesRemaining = 10;
			var word1 = new words(computerGuess);
			word1.wordDisplay();
			var currentWord = word1.wordHide();
			game();
		}

	});

};


	function game(){

		if(guessesRemaining != 0 && (currentWord.join("") != computerGuess)){
			inquirer.prompt([  {
				name: "letter",
				message: "Please guess the letter?"
			}]).then(function(answers){
				var letterPresence = computerGuess.includes(answers.letter.toLowerCase())

				var game1 = new letter(answers.letter,computerGuess);
				if(letterPresence){

					game1.checkLetter();

				}
				if (!letterAlreadyGuessed.includes(answers.letter) && !letterPresence){
					letterAlreadyGuessed.push(answers.letter); 
					guessesRemaining--;
					console.log(currentWord.join("   "));
					console.log("you guessed it wrong");
					console.log(guessesRemaining);



				}


				game();
			});


		}

		if (currentWord.join("") === computerGuess && guessesRemaining != 0){
			wins++;
			console.log("wins:" +wins +'\n'+"Losses:" +losses);
			console.log("You win");
			restart();
		}
		if(guessesRemaining == 0 && (currentWord.join("") != computerGuess)){
			losses++;
			console.log("wins:" + wins +'\n'+"Losses:" + losses);
			console.log("You Lose");
			restart();

		}
	}
	game();

// }
// startGame();
//if(!letterPresence && !letterAlreadyGuessed)