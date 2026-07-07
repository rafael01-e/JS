// Checked Property

const myCheckbox = document.getElementById("myCheckbox") //Subscribe
const visaBtn = document.getElementById("visaBtn") //Visa
const mastercardBtn = document.getElementById("mastercardBtn") //Mastercard
const paypalBtn = document.getElementById("paypalBtn") //Paypal

let result = document.getElementById("result"); //Result

document.getElementById("mySubmit").onclick = function () {
    if (myCheckbox.checked) {
        subresult.textContent = "You are subscribed";
    }
    else {
        subresult.textContent = "You are NOT subscribed";
    }
    if (visaBtn.checked) {
        payresult.textContent = "You selected Visa";
    }
    else if (mastercardBtn.checked) {
        payresult.textContent = "You selected Mastercard";
    }
    else if (paypalBtn.checked) {
        payresult.textContent = "You selected Paypal";
    }
    else {
        payresult.textContent = "You did not select a payment method";
    }
}