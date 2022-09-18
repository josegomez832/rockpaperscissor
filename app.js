var user = document.querySelectorAll('button.button');
var computer = ['Paper','Scissors','Rock'];

var wins = 0;

document.getElementById('wins').innerHTML = wins;
function gameLogic(wins, player, cpu){

}
for(let i = 0; i < user.length; i++){
   (function () {

    user[i].addEventListener('click', function(){ 
      var selection = this.getAttribute('data-name');
      var selectionSVG = this.innerHTML; 
      document.getElementById('selected').innerHTML = `<div class="userSelection ${selection.toLowerCase()}">${selectionSVG}</div>`;
     setTimeout(() => {
      var computerSelection = computer[Math.floor(Math.random()*computer.length)];
         
      document.getElementById('Computerselected').innerHTML = `<div class="userSelection ${computerSelection.toLowerCase()}"><div class="icon ${computerSelection.toLowerCase()}"></div></div>`;

        //game logic
      if(selection == 'Paper' && computerSelection == 'Scissors' || selection == "Scissors" && computerSelection == 'Rock' || selection == 'Rock' && computerSelection == 'Paper'){
        wins--;
        document.getElementById('message').innerHTML = 'You Lose';
        document.querySelector('#Computerselected .userSelection').classList.add('win');
        document.getElementById('wins').innerHTML = wins;
     }
     else if(selection == 'Paper' && computerSelection == 'Paper' || selection == "Scissors" && computerSelection == 'Scissors' || selection == 'Rock' && computerSelection == 'Rock'){
       document.getElementById('message').innerHTML = 'Draw';
     }
     else{
       wins++;
       document.getElementById('message').innerHTML = 'You Win';
       document.querySelector('#selected .userSelection').classList.add('win');
       document.getElementById('wins').innerHTML = wins;
     }
     //end game logic
        
      }, 1000);
      
        
     //
      setTimeout(() => {
        //show play again button/column
        document.querySelector('.step-wrapper').children[0].classList.remove('col-6');
        document.querySelector('.step-wrapper').children[1].classList.remove('col-6');
        document.querySelector('.step-wrapper').children[2].classList.remove('col-12');
      }, 1700);
      setTimeout(() => {
        document.querySelector('.results').classList.add('middle');
        document.querySelector('.results').style.display = 'block';
      }, 1900);
      
      //hides step-1 and shows step-2 on click
       document.querySelector('.step-1').style.display = "none";
       document.querySelector('.step-2').style.display = "block";
    
    }, false);//end click

   }());//end self-invoking function
  
}//end for loop

//play again button
var playAgain = document.getElementById('play_again');
playAgain.addEventListener('click', function(){
  document.querySelector('.selections .userSelection').classList.remove('win');
  document.getElementById('message').innerHTML = '';
  document.getElementById('Computerselected').innerHTML = '';
  document.querySelector('.step-1').style.display = "block";
  document.querySelector('.step-2').style.display = "none";
  document.querySelector('.results').style.display = 'none';

  document.querySelector('.step-wrapper').children[0].classList.add('col-6');
  document.querySelector('.step-wrapper').children[1].classList.add('col-6');
  document.querySelector('.step-wrapper').children[2].classList.add('col-12');
  document.querySelector('.results').classList.remove('middle');
})
//open modal
const modal = document.querySelector('.rules');
modal.addEventListener('click', function(){
 document.querySelector('.modal').classList.remove('close');
 document.querySelector('.overlay').classList.remove('hide');
 document.querySelector('.overlay').classList.add('show'); 
})
//close modal
const closeModal = document.querySelector('.close-button');
closeModal.addEventListener('click', function(){
  document.querySelector('.modal').classList.add('close');
 document.querySelector('.overlay').classList.add('hide');
})