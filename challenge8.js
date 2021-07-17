// Coding challenge 8

// Arrays

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
const tips = [];
const totals = [];

// Function

const calcTip = function (bill) {

    return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

}

// Loop

for (let i = 0; i < bills.length; i++) {

    const tip = calcTip(bills[i]);

    tips.push(tip)
    totals.push(tip + bills[i])

}

console.log(bills, tips, totals)


// Bonus

const arr = []


// Function

const calcAverage = function (arr) {

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        arr.push()
    }

    return sum / arr.length;
}

console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));

