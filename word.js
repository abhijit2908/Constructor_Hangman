var guesswords = require('./guessWords');


var pickedWord = function(word){

	this.word = word.split("");

	this.wordDisplay = function(){

		
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



module.exports= pickedWord;