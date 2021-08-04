// min and max for various functions
const min = 1
const max = 100000

// returns an integer between min and max, inclusive
function randomRange(minimum, maximum) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// counts up and then down for cosmetic effect.
// gives you a lucky number.
function lottery() {
    let counter = 0;
    let increment = 1234;
    let maxed = false

    // your actual number
    let luckyNumber = randomRange(min, max)

    // assigning the interval to a variable so it can be cleared later.
    const interval = setInterval(function() {
        document.getElementById("yourNumber").innerHTML = counter;
        
        // if the counter hasn't hit max for the first time, count up.
        if (counter < max && !maxed) {
            counter += increment;
        }
        // once hitting max for the first time, go toward the lucky number.
        else if (counter > luckyNumber) {
            maxed = true;
            counter -= increment;
        // if you pass the lucky number, just set counter to the lucky number.
        } else if (counter < luckyNumber) {
            counter = luckyNumber
        // a winning number
        } else if (luckyNumber <= 1000){
            clearInterval(interval);
            alert("Now that's lucky.")
        // a losing number
        } else {
            clearInterval(interval);
            alert("Too bad! You've lost!")
        }
    }, 1);
}
