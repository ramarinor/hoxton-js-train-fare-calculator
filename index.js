const pricePerKilometer = 0.21;
let costumerAge = Number(prompt("How old are you?"));
let distanceToTravel = Number(prompt("How many kilometers are you going to travel?"));
let priceForTicket = distanceToTravel * pricePerKilometer;
if (costumerAge <= 18) {
	priceForTicket = priceForTicket * 0.8;
}
if (costumerAge >= 65) {
	priceForTicket = priceForTicket * 0.6;
}
alert(`Your ticket price is £${priceForTicket.toFixed(2)}`);
