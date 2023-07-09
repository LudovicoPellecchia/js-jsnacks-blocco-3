const numbers = [];

let sum = 0;

while (sum < 50) {
    const number = parseInt(prompt("Inserisci un numero:"));


    numbers.push(number);

    sum += number;
}

console.log("Numeri inseriti:", numbers);