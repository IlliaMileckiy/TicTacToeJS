const playground = document.querySelector(".playground");
const cArr = document.querySelectorAll(".playground div");
const btnX = document.querySelector(".btn-x");
const btnO = document.querySelector(".btn-o");
const btnRestart = document.querySelector(".btn-restart");

let checker = [];

btnX.addEventListener("click", () => spawn(true));
btnO.addEventListener("click", () => spawn(false));
btnRestart.addEventListener("click", () => window.location.reload());

let arr = [
    'a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'k', 'l'
];

function spawn(choose) {
    for(let c of cArr) {
        c.addEventListener("click", () => {
            if(!c.firstElementChild) {
                if(choose) {
                    arr[+c.className] = 1;
                    const modelX = document.createElement("img");
                    modelX.src = "./img/X.png";
                    modelX.className = "model-x";
                    c.append(modelX);
                    choose = false;
                } else {
                    arr[+c.className] = 2;
                    const modelO = document.createElement("img");
                    modelO.src = "./img/O.png";
                    modelO.className = "model-o";
                    c.append(modelO);
                    choose = true;
                }
            }

        })
        
    }
}


playground.addEventListener("click", () => {
    if(arr[0] === arr[1] && arr[0] === arr[2]) {
        checker.push(true, arr[0]);
    } else if(arr[0] === arr[3] && arr[0] === arr[6]) {
        checker.push(true, arr[0]);
    } else if(arr[0] === arr[4] && arr[0] === arr[8]) {
        checker.push(true, arr[0]);
    } else if(arr[1] === arr[4] && arr[1] === arr[7]) {
        checker.push(true, arr[1]);
    } else if(arr[2] === arr[5] && arr[2] === arr[8]) {
        checker.push(true, arr[2]);
    } else if(arr[2] === arr[4] && arr[2] === arr[6]) {
        checker.push(true, arr[2]);
    } else if(arr[3] === arr[4] && arr[3] === arr[5]) {
        checker.push(true, arr[3]);
    } else if(arr[6] === arr[7] && arr[6] === arr[8]) {
        checker.push(true, arr[6]);
    }

    if(checker[0]) {
        const gameOver = document.createElement("div");
        gameOver.className = "game-over";
        if(checker[1] == "1") {
            gameOver.textContent = "X winner";
        } else if(checker[1] == "2") {
            gameOver.textContent = "() winner";
        }
        playground.append(gameOver);
        playground.style.pointerEvents = "none";
    } 
});