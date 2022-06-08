var readlineSync = require('readline-sync');
var chalk = require('chalk');

let score = 0;
let userName = "";
const highScores = [
  {
    name: "Me",
    score: 3,
  },
  {
    name: "Haresh",
    score: 2,
  },
  {
    name: "Abinash",
    score: 1,
  }
]
function play(){
  const qa  = [
    {question : "what's my name? ", answer : 'Muthukumar'},
    {question : "Who is my cricketing Icon? ", answer : 'MsDhoni'},
    {question : "My age? ", answer : '22'},
    {question : "My HomeTown? ", answer : 'Madurai'},
    {question : "Hill station or Beaches? ", answer : 'Hill station'},
  ]
  for(let question of qa)
    {
      let ans = readlineSync.question(question.question)
      check(ans,question.answer)
    }
  console.log(`Your score is ${score}`)
}
function check(userInput, answer){
  if(userInput.toLowerCase() === answer.toLowerCase()) {
    score ++
  
     console.log(chalk.bgGreenBright.black("That's correct answer"))
  }
  else{
    
     console.log (chalk.bgRedBright.black("That's wrong answer"))
  }
}
function start(){
  userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
}
function showScores(){
  console.log('------------------')
 
  for(let score of highScores){
    console.log(`${score.name} scored ${score.score}`)
  }
}
start()
play()
showScores()