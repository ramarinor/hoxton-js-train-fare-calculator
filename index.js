const pricePerKilometer = 0.21;
let costumerAge = Number(prompt("How old are you?"));
let distanceToTravel;

let startingStation = Number(
	prompt(`From which station are you travelling? Type:
1 for Prishtina
2 for Prizren
3 for Mitrovica
4 for Peja`)
);

let destinationStation = Number(
	prompt(`What is the destination station you want to travel to? Type:
1 for Prishtina
2 for Prizren
3 for Mitrovica
4 for Peja`)
);

const prToPz = 87;
const prtoMi = 43;
const prToPe = 100;
const pzToMi = 105;
const pzToPe = 75;
const miToPe = 70;

if ((startingStation === 1 && destinationStation === 2) || (startingStation === 2 && destinationStation === 1)) {
	distanceToTravel = prToPz;
} else if ((startingStation === 1 && destinationStation === 3) || (startingStation === 3 && destinationStation === 1)) {
	distanceToTravel = prtoMi;
} else if ((startingStation === 1 && destinationStation === 4) || (startingStation === 4 && destinationStation === 1)) {
	distanceToTravel = prToPe;
} else if ((startingStation === 2 && destinationStation === 3) || (startingStation === 3 && destinationStation === 2)) {
	distanceToTravel = pzToMi;
} else if ((startingStation === 2 && destinationStation === 4) || (startingStation === 2 && destinationStation === 4)) {
	distanceToTravel = pzToPe;
} else if ((startingStation === 3 && destinationStation === 4) || (startingStation === 4 && destinationStation === 3)) {
	distanceToTravel = miToPe;
}

let ticketPrice = distanceToTravel * pricePerKilometer;
if (costumerAge <= 18) {
	ticketPrice = ticketPrice * 0.8;
}
if (costumerAge >= 65) {
	ticketPrice = ticketPrice * 0.6;
}
alert(`Your ticket price is £${ticketPrice.toFixed(2)}`);
