let answer = 7;
let userGuess = prompt("Guess a number between 1 and 10.");

if (userGuess == answer) {
    alert("You guessed it right, congratulations!");
} else if (userGuess < answer) {
    alert("Your guess was too low.");
} else {
    alert("Your guess was too high.");
}
