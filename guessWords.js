var words=['Elk','Leopard','Panther','RattleSnake','Koala','Bear','Elephant','Zebra','Giraffe','Tiger','Lion','Alligator','cougar','Turtle','Monkey','Rhinoceros','Panda','Cheetah','Seal','Ostrich'];

var computerGuess= words[Math.floor(Math.random() * words.length)].toLowerCase();



module.exports={
	computerGuess:computerGuess
}