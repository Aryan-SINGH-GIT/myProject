let userScore = 0;
let botScore = 0;

function randomSelect() {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "scissor";
    } else {
        return "paper";
    }
}

function game(userIn) {
    let random = randomSelect();
    
 
    document.getElementById("scissor").style.backgroundColor = "";
    document.getElementById("rock").style.backgroundColor = "";
    document.getElementById("paper").style.backgroundColor = "";

    document.getElementById("userChoice").innerText = `You chose: ${userIn}`;
    document.getElementById("computerChoice").innerText = `Computer chose: ${random}`;

    document.getElementById(userIn).style.backgroundColor = "green";


    document.getElementById(random).style.backgroundColor = "red";

    if ((userIn === "rock" && random === "scissor") || 
        (userIn === "scissor" && random === "paper") || 
        (userIn === "paper" && random === "rock")) {
        userScore++;
        document.getElementById("YourSc").innerText = userScore;
    } else if ((userIn === "scissor" && random === "rock") || 
               (userIn === "paper" && random === "scissor") || 
               (userIn === "rock" && random === "paper")) {
        botScore++;
        document.getElementById("CompSc").innerText = botScore;
    }else{
        
        document.getElementById("result").innerText = "it's a TIE "; 
    }
    
    msg();
}

function msg() {
    let message = "";
    if (userScore === 3) {
        message = "CONGOOO!,Big W";
        newGame();
    } else if (botScore === 3) {
        message = "Noob player, L";
        newGame();
    }
    document.getElementById("result").textContent = message;
}

function newGame() {
    botScore = 0;
    document.getElementById("CompSc").innerText = botScore;
    userScore = 0;
    document.getElementById("YourSc").innerText = userScore;
    document.getElementById("result").textContent = "";
    document.getElementById("userChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("scissor").style.backgroundColor = "";
    document.getElementById("rock").style.backgroundColor = "";
    document.getElementById("paper").style.backgroundColor = "";
}

document.getElementById("scissor").addEventListener("click", () => game("scissor"));
document.getElementById("rock").addEventListener("click", () => game("rock"));
document.getElementById("paper").addEventListener("click", () => game("paper"));
