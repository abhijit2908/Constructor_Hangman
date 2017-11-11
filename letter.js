

var words = require('./word.js');
var guessWords = require('./guessWords.js');
var inquirer = require("inquirer");
var letterAlreadyGuessed = [];
var guessesRemaining = 10;
var wins = 0;
var losses = 0;
var computerGuess= guessWords.words[Math.floor(Math.random() * guessWords.words.length)].toLowerCase();


var letter = function(letter, word){

	this.letterguessed =letter.toLowerCase();

	this.wordSelected = word;
	

	this.checkLetter = function(){

		
			for (var i = 0; i < this.wordSelected.length; i++) {
				
				if(this.wordSelected[i] === this.letterguessed ){
					
					currentWord[i] = currentWord[i].replace("_",this.letterguessed);

				}

			}
			console.log(currentWord.join("   "));

			console.log("you guessed it right")


		};





	};




function restart(){
	computerGuess = guessWords.words[Math.floor(Math.random() * guessWords.words.length)].toLowerCase();
	console.log("going in restart")
	inquirer.prompt([{
		type:"confirm",
		name: "reset",
		message: "Do you want to Play again?"
	}]).then(function(response){
		if(response.reset){
			letterAlreadyGuessed=[];
			guessesRemaining = 10;
			word1 = new words(computerGuess);
			word1.wordDisplay();
			currentWord = word1.wordHide();
			game();
		}

	});

};

var word1 = new words(computerGuess);
word1.wordDisplay();
var currentWord = word1.wordHide();


	function game(){

		if(guessesRemaining != 0 && (currentWord.join("") != computerGuess)){
			inquirer.prompt([{
				type:"input",
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

