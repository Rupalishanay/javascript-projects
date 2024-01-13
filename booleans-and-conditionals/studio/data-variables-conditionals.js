// Initialize Variables below
let Date="Monday 2019-03-18";
let time="10:05:34 AM";
let astronautCount=7;
let astronautStatus='ready';
let averageAstronautMassKg=80.7;
let crewMassKg=astronautCount*averageAstronautMassKg;
console.log(crewMassKg);
let fuelMassKg=760000;
let shuttleMassKg=74842.31;
let totalMassKg=crewMassKg+fuelMassKg+shuttleMassKg;
console.log(totalMassKg);
let maximumMassLimit=850000;
let fuelTempCelsius=-225;
let minimumFuelTemp=-300;
let maximumFuelTemp=-150;
let fuelLevel='100%';
let weatherStatus=true;
let preparedForLiftOff=true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if(astronautCount<=7)
{

}
// add logic below to verify all astronauts are ready
if(astronautStatus='ready'){

}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if(totalMassKg<=85000){

}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius<-300&&fuelTempCelsius>-150){

}
// add logic below to verify the fuel level is at 100%
if(fuelLevel='100%'){

}
// add logic below to verify the weather status is clear
if(weatherStatus=true){
    console.log("weather status is clear");
}
// Verify shuttle launch can proceed based on above conditions
console.log("All systems are a go! Initiating space shuttle launch sequence");
console.log("__________________________________________________________________________________________________________")

console.log(Date);
console.log(time);
console.log("astronautCount :7" );
console.log("crew Mass: 564.9kg");
console.log("Fuel Mass: 760000kg");
console.log("Shuttle Mass: 74842.31kg");
console.log("Total Mass: 835407.21kg");
console.log("Fuel Temperature: -225celcius");
console.log("Weather Status: clear");
console.log("__________________________________________________________________________________________________________")
console.log("Have a safe trip astrounauts");