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

for(i = 0; i < 10; i++){
    console.log(getComputerChoice())
}