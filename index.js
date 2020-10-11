const prompt = require('readline-sync');

const maxGuesses = 3;
const endMessage = "\nToo bad.\nGuess you're not into survival.\nDeath is coming.";

let answer = prompt.keyInYN(`You've woken up in a strange room.\nYou have ${maxGuesses} chances to escape.\nSo... Wanna play a game?`);
switch(answer){
  case true: 
    let answer = prompt.keyInYN((`\nGood.\nYou just found a cassette tape.\nDo you want to play it?\n`)); 
    
       switch(answer){
           case true:
              let answer = prompt.keyInYN((`\nThe tape says you must do something terrible in order to survive.\nDo you do it?`));

              switch(answer){
                case true:
                let answer = console.log(`\nYou survived!`);
            
                break;
              
                case false:
                let answer3 = console.log(`\n${endMessage}`);
                 }

          
           break;

        case false:
        let answer2 = console.log(`${endMessage}`);
        }    
            break;
   case false:{
   console.log(`${endMessage}`);
   }}