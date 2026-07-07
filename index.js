// If statements
let age;

document.getElementById("mySubmit").onclick = function () {
    age = document.getElementById("ageText").value;
    age = Number(age);
    if (age >= 18) {
        document.getElementById("result").textContent = "You are old enough to get a license";
    }
    else if (age < 18 && age > 0) {
        document.getElementById("result").textContent = "You are too young to get a license";
    }
    else {
        document.getElementById("result").textContent = "Enter a valid age";
    }
}