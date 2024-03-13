// document.querySelector(".row").innerHTML

const choise = prompt("1 for add, 2 for sub");
if (choise == 1 || choise == 2) { }
else { window.location.reload() }

function generateRandomNumber() {
    return Math.floor(Math.random() * 95) + 5;
}

const generateColumn = () => {

    let sum = 0, num1, num2;

    num1 = generateRandomNumber();
    num2 = generateRandomNumber();
    if (choise == 2 && num1 < num2) {
        // Swap num1 and num2 if choice is subtraction and num1 < num2
        [num1, num2] = [num2, num1];
    }

    sum = choise == 1 ? num1 + num2 : num1 - num2;
    return `
    <div class="column">
            <div class="num1">${num1}</div>
            <div class="num2">${num2}</div>
            <hr>
            <div class="totalSum">${sum}</div>
            <hr>
        </div>
    `
}

const row = document.querySelector(".row");

for (let i = 1; i <= 50; i++) {
    row.innerHTML += generateColumn();
}