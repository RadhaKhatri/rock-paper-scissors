let userS = 0;
let copS = 0;

const choices = document.querySelectorAll(".choice");
const msgP = document.querySelector("#msg");

const userpara = document.querySelector("#user");
const computerpara = document.querySelector("#computer");


const genCompChoice = () =>{
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame = ()=>{
    console.log("game was draw");
    msgP.innerText = "Game was Draw. Play again";
    msgP.style.backgroundColor="black";

}

const playGame =(choiceID) =>{
    console.log("user choice =",choiceID);
    const compChoice = genCompChoice();
    console.log("Computer choice =",compChoice);

    if(choiceID == compChoice)
    {
        drawGame();
    }else{
        let userWin = true;
        if(choiceID == "rock"){
            //scissors,paper
            userWin = compChoice =="paper"? false : true;
        }else if(userWin == "paper"){
            //rock,scissors
            userWin = compChoice == "scissors"? false : true;
        }else if(userWin =="scissors"){
            //rock,paper
            userWin = compChoicec== "rock"? false : true;
        }
        showWinner(userWin,choiceID,compChoice);
    }
}
const showWinner= (userWin,choiceID,compChoice)=>{
    if(userWin==true){
        userS++;
        userpara.innerText = userS;
        msgP.innerText = 'You win! Yours '+choiceID+ " beats "+compChoice;
        msgP.style.backgroundColor="green";
    }else{
        copS++;
        computerpara.innerText = copS;
        msgP.innerText = "You lost "+compChoice+" beats your "+choiceID;
        msgP.style.backgroundColor="red";
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceID= choice.getAttribute("id");
         playGame(choiceID);
    })
})