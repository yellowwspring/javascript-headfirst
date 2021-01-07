// location of ship
let location1 = 3;
let location2 = 4;
let location3 = 5;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

// start game
while(isSunk == false) {
    guess = prompt("Ready, I shoot! (enter a number 0-6):");
    // prompt == input (in python) but you can see window with message and input window
    //returns     null     if the user hasn't entered anything
    if (guess < 0 || guess > 6) {
        //  || - operator OR - or <0  or > 6
        alert("Please enter a valid cell number!")
        // returns if user entered invalid number  ...<0 or >6...
    } else{
        guesses = guesses + 1;
        // works if users entered valid number
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Hit :c ")
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert("Miss!!!!");
        }
    }
}
let stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3/guesses);
alert(stats);
// hit (second version)
//if (guess == location1) {
//    hits = hits + 1;
//} else if (guess == location2) {
//    hits = hits + 1;
//} else if (guess == location3) {
//    hits = hits + 1;
//    // if guess != location1/2/3  hits
//}