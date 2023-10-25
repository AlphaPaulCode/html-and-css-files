let score = {
    wins: 0,
    losses: 0,
    Ties: 0
    };

    JSON.parse(localStorage.getItem('score')); 


    let isAutoPlaying = false;
    let intervalId;
    function autoPlay(){
      if(!isAutoPlaying){
      intervalId = setInterval(function() {
            let playerMove = pickCompuerMove();
            playGame(playerMove);
           }, 1000);
           isAutoPlaying = true; 
      } else{
         clearInterval(intervalId);
         isAutoPlaying = false; 
      }
    }
     

       function playGame(playerMove){
       let computermove = pickCompuerMove(); 
    
    result = '';

    if(playerMove === 'Scissors'){
       if (computermove === 'Rock'){
       result = 'You Lose';
    }
    else if (computermove === 'Paper'){
       result = 'You Win';
    }
    else if (computermove === 'Scissors'){ 
       result = 'Tie';
    }
    }

    else if(playerMove === 'Paper'){
       if(computermove === 'rock'){
          result = 'You Win';
       }
       else if(computermove === 'Paper'){
          result = 'Tie';
       }
       else if (computermove === 'Scissors'){
          result = 'You Lose';
       }
    }

    else if(playerMove === 'rock'){
       if (computermove === 'rock'){
          result = 'Tie';
       } else if (computermove === 'Paper'){
             result = 'You Lose';
       } else if (computermove === 'Scissors'){
          result = 'You Win';
       }
    }

    if(result === 'You Win'){
    score.wins +=1;
    } else if(result === 'You Lose'){
       score.losses +=1;
    } else if (result === 'Tie'){
       score.Ties += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateResult();

    updateScoreElement();

    document.querySelector('.jsMoves').innerHTML = 
    `You Picked ${playerMove} - Computer Picked ${computermove}`;

   //  alert(`You Picked ${playerMove}. Computer Picked ${computermove}. ${result}
   //  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.Ties}`)

       } 
       
       function updateResult(){
           document.querySelector('.jsResult').innerHTML =
           `${result}`
       }
       
       function updateScoreElement(){
    document.querySelector('.jsScore').innerHTML = ` Wins:
     ${score.wins}, Losses: ${score.losses}, Ties: 
     ${score.Ties}`;
       } 

    function pickCompuerMove(){
    let randomnumber = Math.random();
             
    let computermove = '';

       if(randomnumber >= 0 && randomnumber < 1/3){
       computermove = 'rock';
       }
       else if(randomnumber >= 1/3 && randomnumber < 2/3){
       computermove = 'Paper';
       }
       else if(randomnumber >= 2/3 && randomnumber < 1){
       computermove = 'Scissors';
       }  
       
       return computermove; 
    }