var guesswords = require('./guessWords');
var hiddenWord = [];

var pickedWord = function(word){

	this.word = word.split("");

	this.wordDisplay = function(){

		console.log(this.word);
	}

	this.wordHide = function(){
		

		for (var i = 0; i < this.word.length; i++) {
			hiddenWord[i] = "_";

		}

		console.log(hiddenWord);
		console.log(hiddenWord.join("   "));
	}
}


// var word1 = new pickedWord(guesswords.computerGuess);
// word1.wordDisplay();
// word1.wordHide();
// console.log(word1.word)
// console.log(hiddenWord)
module.exports= pickedWord,{

hiddenWord:hiddenWord
}