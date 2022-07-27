const scoreComp = document.querySelector("#comp");
const scoreMe = document.querySelector("#me");
const messageBox = document.querySelector("#message");

let uS = 0, cS = 0;

const options = {
    0:"rock",
    1:"paper",
    2:"scissors"
}

const computerResponse = ()=>{
    const random = Math.floor(Math.random()*3);
    // return options[random];
    return random;
}

const tie =()=>{
    messageBox.innerHTML="It is a tie";
}

const userWins =(message)=>{
    messageBox.innerHTML=message;
    scoreMe.innerHTML=++uS;
}
const computerWins =(message)=>{
    messageBox.innerHTML=message;
    scoreComp.innerHTML=++cS;
}

const game = (userChoice)=>{
    const computerChoice = computerResponse();
    switch(userChoice){
        case 0:
            switch(computerChoice){
                case 0:
                    tie();
                    break;
                case 1:
                    computerWins("Paper covers rock. Computer wins");
                    break;
                case 2:
                    userWins("Rock beats scissors. You win");
                    break;
            }
            break;
        case 1:
            switch(computerChoice){
                case 0:
                    userWins("Paper covers rock. You win");
                    break;
                case 1:
                    tie();
                    break;
                case 2:
                    computerWins("Scissors cut paper. Computer wins");
                    break;
            }
            break;
        case 2:
            switch(computerChoice){
                case 0:
                    computerWins("Rock beats scissors. Computer wins");
                    break;
                case 1:
                    userWins("Scissors cut paper. You win");
                    break;
                case 2:
                    tie();
                    break;
            }
            break;
    }
    
}