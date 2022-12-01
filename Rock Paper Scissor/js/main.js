// let userscorevalue = 1;
// let computerScoreValue = 1;

// const userScore = document.querySelector("#userScoreVal");
// const compScore = document.querySelector("#compScoreVal");

// const buttons = document.querySelectorAll(".choice");
// const randomIds = ["r", "p", "s"];

// console.log(buttons);

// // const game = () => {
// //   buttons.forEach((btn) => {
// //     btn.addEventListener("click", (e) => {
// //       // Random rock paper scissor for the computer and the player
// //       let clickedBtn = e.target.className;
// //     });
// //   });
// // };
// //    showIcon.className = clickedBtn;
// //    let randomNum = Math.floor(Math.random() * randomClasses.length);
// //   )  computerShowIcon.className = randomClasses[randomNum];
// // //
// // userScore.innerText=userscorevalue;
// //     userscorevalue++;


// buttons.addEventListener("click", abc);



// const game = () => {
//   buttons.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       userScore.innerText = userscorevalue;
//       userscorevalue++;
//     });
//   });
// };

// // Random rock paper scissor for the com

// buttons.addEventListener("click", game);
// let score=1;
// let compScore=100;

// const buttons = document.querySelectorAll(".choice");
// console.log(buttons);
// const userScoreVal= document.querySelector("#userScoreVal")
// const compScoreVal= document.querySelector("#compScoreVal")

// const increment= ()=>{
//     userScoreVal.innerHTML=score++;
//     compScoreVal.innerHTML=compScore--;
//     // console.log(userScoreVal);
// }

// buttons.forEach((elem)=> elem.addEventListener("click", increment));

let compScore = 0;
let userScore = 0;

// getting all the DOM elements
const userScoreVal = document.getElementById("userScoreVal");
const compScoreVal = document.getElementById("compScoreVal");
const resultUserStat = document.getElementById("result-user-stat");
const resultCompStat = document.getElementById("result-comp-stat");
const resultFinalStat = document.getElementById("result-final-stat");

// rock paper scissor dom elements
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

// all choices Array
const choice = document.querySelectorAll(".choice");

let userChoice = null;
let compChoice = null;

const computerChoice = () => {
  const compRandom = Math.floor(Math.random()*2)+1;
  console.log(compRandom);
  let compMsg;

  if (compRandom === 1) {
    compMsg = "Computer: Rock";
    resultCompStat.innerHTML = compMsg;
    return (compChoice = "r");
  } else if (compRandom === 2) {
    compMsg = "Computer: Paper";
    resultCompStat.innerHTML = compMsg;
    return (compChoice = "p");
  } else if (compRandom === 3) {
    compMsg = "Computer: Scissor";
    resultCompStat.innerHTML = compMsg;
    return (compChoice = "s");
  }
};

const computerWon = () => {
  compScoreVal.innerText = Number(compScoreVal.innerText) + 1;
console.log(compScoreVal.innerText );

  return "Computer Won";
};
const userWon = () => {
  userScoreVal.innerText = Number(userScoreVal.innerText) + 1;
  console.log(userScoreVal.innerText );
  return "User Won";
};


const findAnswer = (userChoice, computerChoice) => {
  if (
    (userChoice === "r" && computerChoice === "r") ||
    (userChoice === "p" && computerChoice === "p") ||
    (userChoice === "s" && computerChoice === "s")
  ) {
    return "Match Draw";
  }
  if (userChoice === "r" && computerChoice === "p") {
    return computerWon();
  } else if (userChoice === "r" && computerChoice === "s") {
    return userWon();
  } else if (userChoice === "p" && computerChoice === "s") {
    return computerWon();
  } else if (userChoice === "p" && computerChoice === "r") {
    return userWon();
  } else if (userChoice === "s" && computerChoice === "r") {
    return computerWon();
  } else if (userChoice === "s" && computerChoice === "p") {
    return userWon();
  }
};

choice.forEach((choiceElement) => {
  choiceElement.addEventListener("click", () => {
    
    // getting computer choice
    computerChoice();
    //  console.log("Computer choice : " + compChoice);

    // getting user choice
    let userMsg;
    userChoice = choiceElement.getAttribute("id");
    if (userChoice == "r") {
      userMsg = "User: Rock";
    } else if (userChoice == "p") {
      userMsg = "User: Paper";
    } else if (userChoice == "s") {
      userMsg = "User: Scissor";
    }
    resultUserStat.innerHTML = userMsg;


    // getting results
    const result = findAnswer(userChoice, compChoice);
    resultFinalStat.innerHTML = "Winner: " + result;
  });
});

// let compScore=0;
// let userScore=0;

// const userScoreVal = document.getElementById("userScoreVal");
// const compScoreVal= document.getElementById("compScoreVal");
// const resultUserStat= document.getElementById("result-user-stat");
// const resultCompStat= document.getElementById("result-comp-stat");
// const resultFinalStat= document.getElementById("result-final-stat");

// const rock= document.getElementById("r");
// const paper= document.getElementById("p");
// const scissor= document.getElementById("s");

// const choice= document.querySelectorAll(".choice")

// let compChoice;
// let userChoice;



// const computerChoice=()=>{
//     const compRandom= Math.floor(Math.random()*3)+1

// let compMsg;

// if (compRandom===1){
//     compMsg= "Computer:Rock";
//     resultCompStat.innerhtml=compMsg;
//     return (compChoice="r")
// }

// else if (compRandom===2){
//     compMsg= "Computer:Paper";
//     resultCompStat.innerhtml=compMsg;
//     return (compChoice="p")
// }

// else if (compRandom===3){
//     compMsg= "Computer:Scissor";
//     resultCompStat.innerhtml=compMsg;
//     return (compChoice="s")
// }
// };

// const computerWon=()=>{
//     compScoreVal.innertext= Number(compScoreVal.innertext) + 1;
//     return "Computer Won";
// }

// const userWon=()=>{
//     userScoreVal.innertext= Number(userScoreVal.innertext) + 1;
//     return "User Won";
// }



// const findAnswer = (userChoice, computerChoice) =>{
//     if(
//         (userChoice=="r" && computerChoice==="r")||
//         (userChoice=="p" && computerChoice==="p")||
//         (userChoice=="s" && computerChoice==="s")
//     ){
//         return "Match Draw";
//     }

//     if (userChoice ==="r" && computerChoice ==="p"){
//         return computerWon();
//     } else if  (userChoice ==="r" && computerChoice ==="s"){
//         return userWon();
//     } else if(userChoice ==="p" && computerChoice ==="r"){
//         return userWon();
//     } else if(userChoice ==="p" && computerChoice ==="s"){
//         return computerWon();
//     } else if(userChoice ==="s" && computerChoice ==="r"){
//         return computerWon();
//     } else if(userChoice ==="s" && computerChoice ==="p"){
//         return userWon();
//     }
// };



// choice.forEach((elem) => {
//     elem.addEventListener("click", ()=>{
//         computerChoice()



//         let usermsg;
//         userChoice = elem.getAttribute("id");
//         if(userChoice == "r"){
//             usermsg="User:Rock"
//         }
//         else if(userChoice == "p"){
//             usermsg="User:Paper"
//         }
//         else if(userChoice == "s"){
//             usermsg="User:Scissor"
//         }
//         resultUserStat.innerHTML= usermsg;
    

//     const result= findAnswer(userChoice, compChoice);
//     resultFinalStat.innerHTML= "Winer:" + result;
// });
// });









