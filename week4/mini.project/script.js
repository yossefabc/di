function  playTheGame(){
   
    if(confirm("would you like to play the game")==false){
        alert("no problem,goodbay");
    } else  {
        let userNumber=prompt("enter a number between 0-10");
    if(isNaN(userNumber) ){
      alert("sorry not a number, goodbye.");
    }if(( userNumber < 0|| userNumber > 10) ){
      alert("Sorry its not a good number, Goodbye");
    }else{
       let computerNumber=Math.floor(Math.random() * 11);
        console.log(computerNumber);
      
    }
}
}

playTheGame();

// Second Part

  function compareNumbers(userNumber,computerNumber){
    let tries=0;
    
    while(tries<3 && computerNumber!=userNumber){
     
        if(userNumber===computerNumber){
         alert("winner")
        break;
    }else if(userNumber>computerNumber){
       alert("your number is bigger then the computer's,guess again");
     userNumber=prompet("use new number");
       
    }else if(userNumber<computerNumber){
        alert("your number is smaller then the computer's,guess again");
      userNumber=prompt("use new number");
        
    }else{
        alert("out of chances")
    }
        
  
}
  
  
    }

    compareNumbers(6,5)