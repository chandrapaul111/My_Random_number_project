let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High.Try again"
        gameResult.style.backgroundColor = " #1e217c";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low.Try Agian"
        gameResult.style.backgroundColor = " #1e217c";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulation.You Got it Right"
        gameResult.style.backgroundColor = " green";
    } else {
        gameResult.textContent = "Please Provide A Valid Input"
        gameResult.style.backgroundColor = " red";

    }
}