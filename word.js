var guesswords = require('./guessWords');

//var computerGuess= guesswords.words[Math.floor(Math.random() * guesswords.words.length)].toLowerCase();

var pickedWord = function(word){

	this.word = word.split("");

	this.wordDisplay = function(){

		//console.log(this.word);
		return this.word;
	}

	this.wordHide = function(){
		console.log(this.word.length)
		var hiddenWord = [];

		for (var i = 0; i < this.word.length; i++) {
			hiddenWord[i] = "_";

		}

		//console.log(hiddenWord);
		console.log(hiddenWord.join("   "));
		return hiddenWord;
	}
}


// var word1 = new pickedWord(computerGuess);
// word1.wordDisplay();
// word1.wordHide();
// console.log(word1.word)
// console.log(hiddenWord)
module.exports= pickedWord;