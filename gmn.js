'use strict';

let randomnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value); //value is for input data

    //no input
    if (!guess) {
        document.querySelector('.message').textContent = "입력값 없음";
    }

    //correct
    else if (guess === randomnumber) {
        document.querySelector('.message').textContent = "정답!";
        document.querySelector('.rnumber').textContent = randomnumber;
        document.querySelector('body').style.backgroundColor = '#40E948';
        if (hscore < score) {
            hscore = score;
            document.querySelector('.hscore').textContent = hscore;
        }
    }

    //wrong
    else if (guess !== randomnumber) {
        if (score > 1) {
            if (guess < randomnumber) {
                document.querySelector('.message').textContent = "낮아요~";
                score--;
                document.querySelector('.score').textContent = score;
            }
            if (guess > randomnumber) {
                document.querySelector('.message').textContent = "높아요~";
                score--;
                document.querySelector('.score').textContent = score;
            }
        }
        else {
            document.querySelector('.message').textContent = "게임 오버";
            document.querySelector('.score').textContent = 0;
        }
    }

    //game over
    else
        document.querySelector('.message').textContent = "게임 오버";

})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    randomnumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "입력해주세요";
    document.querySelector('.rnumber').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#2C2C2D';
})