// Function for start Button
const startGame = document.querySelector('.start-game');
const startContainer = document.querySelector('.start-container');

startGame.addEventListener('click', () => {
	startContainer.style.display = 'none';
})


// Function for computerchoice
function onChoice(e) {
	let myChoice = e;
	let computerChoice = Math.random();
	if (computerChoice < 0.38) {
		computerChoice = 'rock'
	} else if(computerChoice <= 0.67){
		computerChoice = 'scissor'
	} else{
		computerChoice = 'paper'
	}
	//showResult for condtions
	onShowResult(myChoice, computerChoice);
}


function onShowResult(choice1, choice2) {
	let mes = "";
	const battleArea = document.querySelector('.battle-area');
	const message = document.querySelector('.message');
	const mainContainer = document.querySelector('.main-container');
	//const againBtn = document.querySelector('.again');
	
	battleArea.classList.add('active')
	mainContainer.style.display = 'none';
	battleArea.style.zIndex = 10;
	isWin = null;
	s = 0;
	
	if (choice1 === choice2) {
		 mes = 'Game Tie';
		 isWin = true
	} else {
		//If you PICK PAPER
		if (choice1 === 'paper') {
			if (choice2 === 'rock') {
				mes = 'The Winner is Paper'
				isWin = true
			} else{
				mes = 'The Winner is Scissors'
				isWin = false
			}
		}
		
		// If you PICK SCISSORS
		if (choice1 === 'scissor') {
			if (choice2 === 'paper') {
				mes = 'The Winner is Scissors'
				isWin = true
			} else{
				mes = 'The Winner is Rock'
				isWin = false
			}
		}
		
		// If you PICK ROCK
		if (choice1 === 'rock') {
			if (choice2 === 'scissor') {
				mes = 'The Winner is Rock'
				isWin = true
			} else{
				mes = 'The Winner is Paper'
				isWin = false
			}
		}
	}
	message.innerHTML = mes;
	//againBtn.innerHTML = isWin ? 'PLAY AGAIN' : 'TRY AGAIN';
	if(isWin) s = s + 1;
	localStorage.setItem('myScore', s);
	
	displayData(choice1, choice2);	
}

function displayData(choice1, choice2){
	const battleGround = document.querySelector('.battle-ground');
  const score = document.querySelector('.score');
	const newImg = document.createElement('img');
  battleGround.innerHTML = `<img src=${choice1}.png ><h1>VS</h1><img src=${choice2}.png>`;
  let scoreData = localStorage.getItem('myScore');
  console.log(scoreData)
}

const playAgain = document.querySelector('.again-button');

playAgain.addEventListener('click', (e) => {
  window.location.reload();
})