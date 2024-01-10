// Declare and assign the variables below
let NameofShuttle = 'determination';
let ShuttleSpeedmph = 17500;
let DistancetoMarskm = 225000000;
let DistancetoMoonkm = 384400;
let milesperkilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof NameofShuttle);
console.log(typeof ShuttleSpeedmph);
console.log(typeof DistancetoMarskm);
console.log(typeof DistancetoMoonkm);
console.log(typeof milesperkilometer);

// Calculate a space mission below
let kilometersToMars = 225000000;
let milesToMars = kilometersToMars * milesperkilometer;
let hoursToMars = milesToMars / ShuttleSpeedmph;
let daysToMars = hoursToMars / 24;
console.log(daysToMars);
// Print the results of the space mission calculations below
console.log(NameofShuttle + " will take " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below
let kilometersToMoon = 384400;
let milesToMoon = kilometersToMoon * milesperkilometer;
let hoursToMoon = milesToMoon / ShuttleSpeedmph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(NameofShuttle + " will take " + daysToMoon + " days to reach the Moon.");