let systemGuess = Math.round(Math.random() * 100 + 1);

console.log(systemGuess);

const guesses = document.querySelector(".guesses")
const lastresult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const submitButton = document.getElementsByClassName("guessSubmit")[0];

let prevGuessess = [];

let myGuess;
let currentCount = 0;
const inputField = document.querySelector(".guessField");

submitButton.addEventListener("click", () => {
//   getting input reference
    myGuess = parseInt(inputField.value);

    if(isNaN(myGuess)) {
        alert("Enter a Valid Number");
        return;
    }
    //   converting input field to number 
    prevGuessess.push("myGuess")

    currentCount++;
    // previous guesses on screen updation 
    guesses.textContent = "previous Guesses : " + prevGuessess.join(",");

    displayCorrectOrNot();

    displayHighOrLow();

    // clearing inputField
    inputField.value = "";
});

function gameOver() {}

function displayCorrectOrNot() {
    if(myGuess === systemGuess) {
        lastresult.style.backgroundColor = "green";
        lastresult.innerHTML = "Congratulation! You got it right!";
        addButton();
    }else {
        lastresult.style.backgroundColor = "red";
        if(currentCount === 5) {
            lastresult.innerHTML = "!!!GAME OVER!!!";
            inputField.setAttribute("disabled", true);
            submitButton.setAttribute("disabled", true);
            addButton();
        }else {
            lastresult.innerHTML = "Sorry, You are not right";
        }
    }
}

function displayHighOrLow () {
    if(myGuess > systemGuess) {
        lowOrHi.textContent = "Last guess was too high!";
    } else if (myGuess < systemGuess) {
         lowOrHi.textContent = "Last guess was too low!";
    }
}

function addButton () {
    const restartButton = document.createElement("button");
    restartButton.innerText = "Start a New Game";
    restartButton.addEventListener("click", function () {
        systemGuess = Math.round(Math.random() * 100 + 1);
        prevGuesses = [];
        guesses.innerText = "";
        lowOrHi.innerText = "";
        lastresult.innerText = "";
        lastresult.removeAttribute("style");
        inputField.removeAttribute("disabled");
        submitButton.removeAttribute("disabled");
        restartButton.remove();
    });
    const body = document.querySelector("body");
    body.appendChild(restartButton);
}


