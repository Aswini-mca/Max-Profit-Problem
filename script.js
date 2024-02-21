// Theatre 5 units of time earnings $1500 
// Pub 4 units of time earnings $1000 
// Commercial Park 10 units of time earnings $3000 

let result = [0, 0, 0];
let unitsOfTime = [ 4, 5, 10];

// Function to get max index of profit array
function getMaxProfitIndex(profit) {
    return profit.indexOf(Math.max(...profit));
}

// Function to calculate the Max profit for the given units of time
function calculateMaxProfit(n) {
    let earnings = 0;
    let profit = [0, 0, 0];
    if (n < 4) {
        return 0;
    } else {
        let temp = n - 4;
        profit[0] = temp * 1000;
        if (n >= 5) {
            temp = n - 5;
            profit[1] = temp * 1500;
            if (n >= 10) {
                temp = n - 10;
                profit[2] = temp * 3000;
            }
        }
    }
    let maxIndex = getMaxProfitIndex(profit);
    // console.log('Profit Array:',profit)
    earnings += profit[maxIndex];
    result[maxIndex]++;
    // console.log('Profit:',earnings)
    // console.log('Result Array:',result)
    return earnings + calculateMaxProfit(n - unitsOfTime[maxIndex]);
}

//function to display the probability
function displayProbability() {

    return "1." + "T: " + result[1] + " P: " + result[0] + " C: " + result[2];
}

function displayOutput(n) {
    console.log("Time Unit :", n)
    console.log("Earnings : $" + calculateMaxProfit(n));
    console.log("Solution: \n" + displayProbability());
    console.log("\n")
}

console.log("Test Case 1");
displayOutput(7);
console.log("Test Case 2");
displayOutput(8);
console.log("Test Case 3");
displayOutput(13);

// let n = prompt("Enter n value:")
// displayOutput(n)
