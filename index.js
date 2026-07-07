let x = 100.00;
let firstname = "Rafael";

document.getElementById("myH1").textContent = `Hello, ${firstname}! Your balance is: $${x}`;
document.getElementById("myP").textContent = `Type of balance is: ${typeof x}`;

let online = true;
console.log(typeof online);
console.log(`${firstname} is online: ${online}`);

let name = "Rafael Marcellini Oliviano"
let birthdate = `21/03/2007`
let father = `Francesco Marcellini Oliviano`
let mother = `Silvia Maria Marcellini Oliviano`

document.getElementById("p1").textContent = `Name: ${name}`;
document.getElementById("p2").textContent = `Birthdate: ${birthdate}`;
document.getElementById("p3").textContent = `Father: ${father}`;
document.getElementById("p4").textContent = `Mother: ${mother}`;
