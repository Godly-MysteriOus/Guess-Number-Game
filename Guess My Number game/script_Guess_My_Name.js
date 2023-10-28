'use strict';

var NumberToPredict = Math.trunc(Math.random()*20)+1;
var score = Number(document.querySelector('.score').textContent)

document.querySelector('.check').addEventListener('click',function(){
    var inputNumber = Number(document.querySelector('.EnterNumber').value);
    if(score>1){
        if(inputNumber > NumberToPredict){
            document.querySelector('.ResultHolder').textContent = "📈Too high";
            score-=1;
            document.querySelector('.score').textContent = score;
        }
        else if(inputNumber < NumberToPredict){
            document.querySelector('.ResultHolder').textContent = "📉Too low";
            score-=1;
            document.querySelector('.score').textContent = score;
        }
        else if(inputNumber === NumberToPredict){
            document.querySelector('.ResultHolder').textContent = "🎉Congrats🎊";
            document.querySelector('.onlyCorrectNumberDisplay').textContent = NumberToPredict;
            document.querySelector('body').style.backgroundColor = 'rgb(23, 187, 51)';
            document.querySelector('.onlyCorrectNumberDisplay').style.width = '12rem';
            document.querySelector('.onlyCorrectNumberDisplay').style.height = '5rem';
            document.querySelector('.inputBlock').style.display = 'none';
            var HighScore = Number(document.querySelector('.highscore').textContent);
            if(score>HighScore){
                document.querySelector('.highscore').textContent = score;
            }
        }
    }
    else{
        score-=1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.ResultHolder').textContent = "😭You lost";
        document.querySelector('.inputBlock').style.display = 'none';
        document.querySelector('body').style.backgroundColor = 'red';
    }
})

document.querySelector('.againButton').addEventListener('click',function(){
    document.querySelector('.inputBlock').style.display = 'grid';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.onlyCorrectNumberDisplay').style.width = '8rem';
    document.querySelector('.onlyCorrectNumberDisplay').style.height = '4rem';
    document.querySelector('.onlyCorrectNumberDisplay').textContent = '?';
    document.querySelector('.ResultHolder').textContent = 'Start Guessing!';
    NumberToPredict = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.score').textContent = score;
})