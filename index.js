const game = ()=>{
    let pscore = 0;
    let cscore = 0;

    //start the game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        //computer options
        const computerOptions = ['Rock' , 'Paper' , 'Scissors'];
        options.forEach(option=>{
            option.addEventListener('click',function(){
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];
                //call compare hands
                // debugger;
                compareHands(this.textContent , computerChoice);
                //update images
                playerHand.src = `${this.textContent}.png`;
                computerHand.src = `${computerChoice}.png`;
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pscore;
        computerScore.textContent = cscore;
    }

    //compare hands
    const compareHands = (playerChoice , computerChoice)=>{
        const winner = document.querySelector('.winner');
        if(playerChoice===computerChoice){
            winner.textContent = "It is a tie";
            return;
        }
        else if(playerChoice==="Rock"){
            if(computerChoice==="Scissors"){
                winner.textContent="Player wins";
                pscore++;
                updateScore();
                return;
            }else{
                winner.textContent="Computer wins";
                cscore++;
                updateScore();
                return;
            }
        }
        else if(playerChoice==="Paper"){
            if(computerChoice==="Scissors"){
                winner.textContent="computer wins";
                cscore++;
                updateScore();
                return;
            }else{
                winner.textContent="Player wins";
                pscore++;
                updateScore();
                return;
            }
        }
        else if(playerChoice==="Scissors"){
            if(computerChoice==="Rock"){
                winner.textContent="Computer wins";
                cscore++;
                updateScore();
                return;
            }else{
                winner.textContent="Player wins";
                pscore++;
                updateScore();
                return;
            }
        }
    };

    //call all the inner function
    startGame();
    playMatch();
};

//start the game function
game();