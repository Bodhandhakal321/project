let randomNumber = (parseInt(Math.random()*100+1))   
const submit = document.querySelector('#subt')               
const  userIn = document.querySelector('#guessField')               
const  guessLot = document.querySelector('.guesses')               
const  lastResult= document.querySelector('.lastResult')               
const  startOver= document.querySelector('.resultParas')         
const  lowhi= document.querySelector('.lowOrHi')      

const p =document.createElement('p')
let prevGuess =[]
 let numGuess =1 
 let playGame = true;


 if (playGame) {

  submit.addEventListener('click', function(e){
e.preventDefault()
const guess = parseInt(userIn.value)
console.log(guess)
validateGuess(guess)
  })
  
 }
 
 function validateGuess(guess){
// this function valid the input values

if (isNaN(guess)) {
  alert("please enter a valid number")
  
}
else if(guess<1){
  alert("please enter a number more than 1")
}
else if(guess>100){
  alert("please enter a number less than 100")
}
else{
  prevGuess.push(guess);
  if (numGuess===6) {
    displayGuess(guess)
    displayMessage(`game is over...  your  random number was ${randomNumber}`)
    endGame(guess)
    
  }
  else{
    displayGuess(guess)
    checkGuess(guess)
  }
}



 }
 function checkGuess(guess){
  // this function check the input values  wheather it is right or wrong

  if (guess===randomNumber) {
    displayMessage(`you won your guess is correct  !!!!!! ${randomNumber}`)
    endGame()
    
  }
  else if(guess<randomNumber){
    displayMessage(`your number is TOOOO low`)
  }
  else if(guess>randomNumber){
    displayMessage(`your number is TOOOO high`)
  }
  else{

  }

 }
 function displayGuess(guess){
// this function display the gues  values
userIn.value =''
guessLot.innerHTML += `${guess}  `
numGuess++;
lastResult.innerHTML =`${6-numGuess}`


 }
  function displayMessage(message){
     // this function display the message

     lowhi.innerHTML =`<h2>${message}<h2>`



  }

  function endGame(){
    userIn.value =''
    userIn.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newgame'>Start new game<h2>`
      startOver.appendChild(p);
      playGame =false

      newGame()
      
}
   function  newGame(){
    const newgamebutn = document.querySelector('#newgame')
    newgamebutn.addEventListener('click',function(){

      randomNumber = (parseInt(Math.random()*100+1)) 
      let prevGuess =[]
 let numGuess =1 
 guessLot.innerHTML =''
 lastResult.innerHTML =`${6-numGuess}`
 userIn.removeAttribute('disabled')
startOver.removeChild(p)
      playGame =true
    })


   }