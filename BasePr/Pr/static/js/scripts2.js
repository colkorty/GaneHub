const buttonNext = document.getElementById('1');
const mainText = document.getElementById('2');
const underText = document.getElementById('3');
let currentStage = 0;
const element = document.getElementById("logo");
let position = 0;
let tutorialCompleted = false
let text = document.getElementById('points');
let poinsPerClick = document.getElementById('pointsNOW')
let buffOne = document.getElementById('1000');
let buffSecond = document.getElementById('2000');
let buffThird = document.getElementById('3000');
let buffFour = document.getElementById('4000');
let buffFive = document.getElementById('5000');
let buffSix = document.getElementById('6000');


let mainButton = document.getElementById('logo')


let mainPoints = 0;
let currentPointPlus = 1;
buttonNext.addEventListener('click', function(next){

    
    currentStage += 1;
    if(currentStage === 1){
        mainText.textContent = "КЛИКАЙ";
        underText.textContent = "Нажимай на наш логотип и получай валюту"
    }
    if(currentStage === 2){
        mainText.textContent = "ПОКУПАЙ";
        underText.textContent = "Покупай различные баффы для кликов"
    }
    if(currentStage === 3){
        tutorialCompleted = true;
        mainText.textContent = "";
        underText.textContent = ""
        buttonNext.style.display = "none";
        document.querySelector('body').style.backdropFilter = 'none';
        
        const intervalId = setInterval(function() {
        
            if (position < 400) {
              element.style.left = 50  
              element.style.top = position + "px";
              position += 2;
              element.style.scale = 1.5; 
            }
             else {
              clearInterval(intervalId); // Остановить интервал, когда анимация закончена
            }
          },5)
          
    }
    

})

buffOne.addEventListener('click', function(buffOner){

  if(mainPoints >= 10){
    currentPointPlus += 1;
    mainPoints -= 10;
    text.textContent = "Очки: "+ mainPoints;
    poinsPerClick.textContent = "Очков за клик: " + currentPointPlus;
  }
    


});

buffSecond.addEventListener('click', function(buffOner){

  if(mainPoints >= 100){
    currentPointPlus += 10;
    mainPoints -= 100;
    text.textContent = "Очки: "+ mainPoints;
    poinsPerClick.textContent = "Очков за клик: " + currentPointPlus;
  }
    


});


buffThird.addEventListener('click', function(buffOner){

  if(mainPoints >= 1000){
    currentPointPlus += 100;
    mainPoints -= 1000;
    text.textContent = "Очки: "+ mainPoints;
    poinsPerClick.textContent = "Очков за клик: " + currentPointPlus;
  }
    


});


buffFour.addEventListener('click', function(buffOner){

  if(mainPoints >= 2000){
    currentPointPlus += 200;
    mainPoints -= 2000;
    text.textContent = "Очки: "+ mainPoints;
    poinsPerClick.textContent = "Очков за клик: " + currentPointPlus;
  }
    


});


buffFive.addEventListener('click', function(buffOner){

  if(mainPoints >= 20000){
    currentPointPlus += 2000;
    mainPoints -= 200000;
    text.textContent = "Очки: "+ mainPoints;
    poinsPerClick.textContent = "Очков за клик: " + currentPointPlus;
  }
    


});


buffSix.addEventListener('click', function(buffOner){

  if(mainPoints >= 10000000){
    currentPointPlus += 1000000;
    mainPoints -= 10000000;
    text.textContent = "Очки: "+ mainPoints;
    poinsPerClick.textContent = "Очков за клик: " + currentPointPlus;
  }
    


});



mainButton.addEventListener('click', function(clickMain){
  if(tutorialCompleted === true){
    mainPoints += currentPointPlus;
    text.textContent = "Очки: "+ mainPoints;
    poinsPerClick.textContent = "Очков за клик: " + currentPointPlus;
  }
  

});