let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWinn) => {
    if(userWinn){
        userScore++;
        console.log("You Won");
        msg.innerText = "You Won!";
        userScorePara.innerText = userScore;
    }else{
        compScore++;
        console.log("Computer Won");
        msg.innerText= "You Loose";
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) =>{
    console.log("user choice :", userChoice);
    // Generating computer choice
    const comp_choice = compChoice();
    console.log("Computer choice : ", comp_choice);

    if(userChoice == comp_choice){
        // Draw
        drawGame();
    }else{
        let userWinn = true;
        if(userChoice == "rock"){
            userWinn = comp_choice === "paper" ? true : false;
        } else if (userChoice == "paper"){
            userWinn = comp_choice === "rock" ? true : false;
        } else {
            userWinn = comp_choice === "paper" ? true : false; 
        }
        showWinner(userWinn);
    }
}

const drawGame = () =>{
    console.log("Game Draw");
    msg.innerText= "Game Drawn";
}

const compChoice = () =>{
    // Rock , Paper, Sesissors 
    const options = ["rock","paper","sesissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log("Choice was clicked", userChoice);  
        playGame(userChoice);
    })
})