let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green",];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is started");
        started = true;

        levelUp();
    }
});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    //random btn choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        console.log("Smae Value");
    } else {
        h2.innerHTML = `Game Over ! Your score was <b>${level}</b> <br> Press any key to restart`;

        let body = document.querySelector("body");


        body.classList.add("explosion");
        setTimeout(() => {
            body.classList.remove("explosion");
        }, 800);


        body.classList.add("shake");
        setTimeout(() => {
            body.classList.remove("shake");
        }, 1000);


        h2.classList.add("glitch");
        setTimeout(() => {
            h2.classList.remove("glitch");
        }, 2000);


        h2.classList.add("neon");


        body.classList.add("dim");
        setTimeout(() => {
            body.classList.remove("dim");
        }, 1500);


        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let altBtns = document.querySelectorAll(".btn");
for (let btn of altBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}