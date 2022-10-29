const computerInput = ['rock','paper','scissors'];
let quit = 'quit';
let on = true;
let userScore = 0;
let computerScore = 0;



playGame()





function getComputerguess(){
    let computerGuess = Math.floor(Math.random() * 3); 
    return computerGuess;
 }

function askUserForInput(){
    let userInput = prompt("Please enter rock," + 
                       " paper, scissors, or quit to" + 
                       " stop playing");
    userInput = userInput.toLowerCase();
    if(userInput == 'rock' || userInput == 'paper' || 
       userInput == 'scissors' || userInput == 'quit'){
        return userInput;
    }
    else {
        askUserForInput();
    }
    
 }n

function numberOfGames(){
    game = prompt("How many games do you want to play? ");
    game = parseInt(game)
    if(game <= 7 && game > 0){
        return game;
    }
    else {
        numberOfGames();
    }
}

function winner(counter, game)
{
    if (counter === game)
    {
        if (userScore > computerScore)
        {
            alert("You won!!")
            playAgain()
        }
        else if(userScore == computerScore){
            alert("!Draw!");
            playAgain()
        }
        else{
            alert("Youse Lose!!! HAHAHAHA");
            playAgain()
        }
    }
    else
    {
        return on;
    }
}

function playGame()
{   
    
    let counter = 0;
    let g = numberOfGames();
    g = parseInt(game);
    while(on == true)
    {
        userInput = askUserForInput()
        computerGuess = computerInput[getComputerguess()];
        alert(computerGuess);

        if (userInput == computerGuess){
            alert("Tie!");
            counter++
        }
        else if (userInput == "rock" && computerGuess == "paper") {
            alert("Computer wins!");
            computerScore += 1;
            counter++
        }
        else if (userInput == "paper" && computerGuess == 'scissors'){
            alert("Computer wins!");
            computerScore += 1;
            counter++
        }
        else if (userInput == 'scissors' && computerGuess == 'rock'){
            alert("Computer wins!");
            computerScore += 1;
            counter++
        }
        else if(userInput == 'quit'){
            alert("You forfeited the match")
            on = false;
            return on;
        }
        else {
            alert("You win")
            userScore +=1;
            counter++
        }
        alert("The score is User: " + userScore + " Computer: " + computerScore);
        winner(counter, g);
    }

}

function playAgain(){
    play = prompt("Do you want to play another game?");
    play = play.toLowerCase();
    if (play == 'yes'){
        userScore = 0;
        computerScore = 0;
        playGame();
    }
    else if (play == 'no')
    {
            on = false;
            return;
    }
    else{
        playAgain()
    }
}
