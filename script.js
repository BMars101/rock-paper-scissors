const btnContainer = document.querySelector('.btn-container');
const playerContainer = document.querySelector('.player-container');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const playerScore = document.querySelector('.player-score-container');
const computerScore = document.querySelector('.computer-score-container');
const playScoreText = document.querySelector('.player-score');
const compScoreText = document.querySelector('.computer-score');
const resetBtn = document.querySelector('.reset-btn');
let compChoice;
let playerPick;
let playScore = 0;
let compScore = 0;

//Assign 3 buttons to each option for player to choose
let options = ['Rock', 'Paper', 'Scissors'];
let buttonOpt;
options.forEach(option => {
    buttonOpt= document.createElement('button');
    buttonOpt.addEventListener('click', playGame)
    buttonOpt.textContent = option;
    buttonOpt.classList.add(option);
    btnContainer.appendChild(buttonOpt);
})

function computerTurn(){
    let randNum = Math.floor(Math.random()*3) +1;
    if(randNum === 1){
        compChoice = 'Rock';
    }else if(randNum === 2){
        compChoice = 'Paper';
    }else if(randNum === 3){
        compChoice = 'Scissors';
    }else {
        return 'Uh oh, what happened?'
    }
    computerChoice.textContent = compChoice;   
}

function isWinner(){
    if(playScore === 5){
         playScoreText.classList.add('winner');
         playScoreText.textContent = 'Player Wins!';
         compScoreText.textContent = '';
         resetBtn.style.display = 'block';
         btnContainer.style.display = "none";
     }else if (compScore === 5){
         compScoreText.classList.add('winner');
         compScoreText.textContent = 'Computer Wins!';
         playScoreText.textContent = '';
         resetBtn.style.display = 'block';
         btnContainer.style.display = "none";
     }
 }

function playGame(e){  
        computerTurn();
        playerPick = e.target.innerHTML;
        playerChoice.textContent = playerPick;
        getResult();        
    console.log(e.target.textContent, playerPick, compChoice); 
    console.log(playScore, compScore);
}

function getResult(){
        switch(playerPick + compChoice){
            case 'RockScissors':
            case 'PaperRock':
            case 'ScissorsPaper':              
                playScore++;
                playScoreText.textContent = playScore;
                compScoreText.textContent = compScore;
                isWinner();
                break;
            case 'ScissorsRock':
            case 'RockPaper':
            case 'PaperScissors':
                compScore++;
                compScoreText.textContent = compScore;
                playScoreText.textContent = playScore;
                isWinner();
                break;
            case 'PaperPaper':
            case 'RockRock':
            case 'ScissorsScissors':
                playScoreText.textContent = 'Tie!';
                compScoreText.textContent = 'Tie!';
                break;
            default:
                console.log('default');
            }
        
        }
       

resetBtn.addEventListener('click', function(){
    btnContainer.style.display = "grid";
    resetBtn.style.display = "none";
    playScore = 0;
    compScore = 0;
    compScoreText.textContent = '';
    playScoreText.textContent = '';
    computerChoice.textContent = '';
    playerChoice.textContent = '';
    compScoreText.classList.remove('winner');
    playScoreText.classList.remove('winner');
});