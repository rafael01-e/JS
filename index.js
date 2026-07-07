//Random Numbers --> Using dice as exemple
const max = 6
const min = 1
let diceNumber;

document.getElementById("roller").onclick = function () {
    diceNumber = Math.floor(Math.random() * max) + min;
    document.getElementById("result").textContent = diceNumber;
}
