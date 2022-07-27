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

const userWins =()=>{
    messageBox.innerHTML="You win";
    scoreMe.innerHTML=++uS;
}
const computerWins =()=>{
    messageBox.innerHTML="You lost";
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
                    computerWins();
                    break;
                case 2:
                    userWins();
                    break;
            }
            break;
        case 1:
            switch(computerChoice){
                case 0:
                    userWins();
                    break;
                case 1:
                    tie();
                    break;
                case 2:
                    computerWins();
                    break;
            }
            break;
        case 2:
            switch(computerChoice){
                case 0:
                    computerWins();
                    break;
                case 1:
                    userWins();
                    break;
                case 2:
                    tie();
                    break;
            }
            break;
    }
    
}