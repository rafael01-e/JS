//Switch Statement

const btn = document.getElementById("myButton");
const result = document.getElementById("result");
const weekdayInput = document.getElementById("myText");

btn.onclick = function () {
    const weekday = weekdayInput.value;
    switch (Number(weekday)) {
        case 1:
            result.textContent = "It's Monday";

            break;
        case 2:
            result.textContent = "It's Tuesday";
            break;
        case 3:
            result.textContent = "It's Wednesday";
            break;
        case 4:
            result.textContent = "It's Thursday";
            break;
        case 5:
            result.textContent = "It's Friday";
            break;
        case 6:
            result.textContent = "It's Saturday";
            break;
        case 7:
            result.textContent = "It's Sunday";
            break;
        default:
            result.textContent = "Please enter a valid day";
            break;
    }
}