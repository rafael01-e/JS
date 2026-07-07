let age;
document.getElementById("mySubmit").onclick = function () {
    age = document.getElementById("myText").value;
    age = Number(age)
    document.getElementById("myH1").textContent = `You are ${age + 4} years old`;
    console.log(age);
}