function getComputerChoice(){
    value = Math.random()
    if (value < .33){
        return "Rock"
    }
    if (value < .67){
        return "Paper"
    }
    return "Scissors"
}

// for(i = 0; i < 10; i++){
//     console.log(getComputerChoice())
// }

function getHumanChoice(){
    let rawInput = prompt("Enter Rock, Paper, or Scissors")
    lowerInput = rawInput.toLowerCase()
    return lowerInput.at(0).toUpperCase() + lowerInput.slice(1)
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice) {
        console.log(humanChoice + " vs. " + computerChoice + " It's a draw")
        return
    }
    switch(humanChoice) {
        case "Rock":
            if(computerChoice == "Scissors"){
                printHumanWin(humanChoice, computerChoice)
                humanScore += 1
            } else{ 
                printHumanLose(humanChoice, computerChoice)
                computerScore += 1
            }
            break;

        case "Paper":
            if(computerChoice == "Rock"){
                printHumanWin(humanChoice, computerChoice)
                humanScore +=1
            } else {
                printHumanLose(humanChoice, computerChoice)
                computerScore +=1
            }
            break;
        case "Scissors":
            if(computerChoice == "Paper"){
                printHumanWin(humanChoice, computerChoice)
                humanScore += 1
            } else {
                printHumanLose(humanChoice, computerChoice)
                computerScore += 1
            }
            break;
    }

}

function printHumanWin(humanChoice, computerChoice){
    console.log(humanChoice + " beats " + computerChoice + " You Win!")
}

function printHumanLose(humanChoice, computerChoice){
    console.log(humanChoice + " loses to " + computerChoice + " You Lose...")
}
// console.log(getHumanChoice())

function playGame(){
    for(i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice())
    }

    if(humanScore > computerScore){
        console.log("Congrats human. You are victorious with a score of " + humanScore + " to " + computerScore)
    }
    else if(computerScore > humanScore){
        console.log("Humans have been proven obsolete. Defeat was inevitable. You have lost with a score of " + humanScore + " to " + computerScore)
    } else {
        console.log("A draw has been reached with scores of " + humanScore + " to " + computerScore)
    }
}

let humanScore = 0
let computerScore = 0
playGame()