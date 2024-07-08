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

// console.log(getHumanChoice())

let humanScore = 0
let ComputerScore = 0
