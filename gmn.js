'use strict';

let randomnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hscore = 0;

const dMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value); //value is for input data

    //no input
    if (!guess) {
        dMessage('입력값 없음');
        // document.querySelector('.message').textContent = "입력값 없음";
    }
    //correct
    else if (guess === randomnumber) {
        dMessage('정답!');
        // document.querySelector('.message').textContent = "정답!";
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
            dMessage(guess > randomnumber ? '이거 보다 낮아요~' : '이거 보다 높아요~');
            // document.querySelector('.message').textContent = guess > randomnumber ? '이거 보다 낮아요~' : '이거 보다 높아요~';
            score--;
            document.querySelector('.score').textContent = score;
            // if (guess < randomnumber) {
            //     document.querySelector('.message').textContent = "이거 보다 높아요~";
            //     score--;
            //     document.querySelector('.score').textContent = score;
            // }
            // if (guess > randomnumber) {
            //     document.querySelector('.message').textContent = "이거 보다 낮아요~";
            //     score--;
            //     document.querySelector('.score').textContent = score;
            // }
        }
        else {
            dMessage('게임 오버');
            // document.querySelector('.message').textContent = "게임 오버";
            document.querySelector('.score').textContent = 0;
        }
    }
    //game over
    else {
        dMessage('게임 오버');
        // document.querySelector('.message').textContent = "게임 오버";
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    randomnumber = Math.trunc(Math.random() * 20) + 1;
    dMessage('입력해주세요')
    // document.querySelector('.message').textContent = "입력해주세요";
    document.querySelector('.rnumber').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#2C2C2D';
})