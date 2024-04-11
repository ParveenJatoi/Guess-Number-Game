#!/usr/bin/env node
import inquirer from "inquirer";
// generate a random number
// input from user to guess a number
// compare user input with generated number

const randomNum=Math.floor(Math.random()*10+1)
const answer= await inquirer.prompt([{
    name: "userGuessNum",
    type:"number",
    message:"please guess a number from (1 to 10):"


 }])
//  console.log(answer);
 
 
 if (answer.userGuessNum===randomNum) {
     console.log("Congratulations! you guessed right number");
    
    
   }else{
     console.log("Oh, you guessed a wrong number");
    
   }