//Counter program

let count = 0;

document.getElementById("increase").onclick = function () {
    count++;
    document.getElementById("counter").textContent = count;
}

document.getElementById("decrease").onclick = function () {
    count--;
    document.getElementById("counter").textContent = count;
}

document.getElementById("reset").onclick = function () {
    count = 0;
    document.getElementById("counter").textContent = count;
}

document.getElementById("double").onclick = function () {
    count *= 2;
    document.getElementById("counter").textContent = count;
}