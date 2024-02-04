// Code your orbitCircumference function here:
function orbitCircumference(radius){
  return Math.round(2*Math.PI*radius)
}
console.log(orbitCircumference(2.000));

// Code your missionDuration function here:
function missionDuration(orbits,radius=2.000,speed=28.000){
  let time=(orbits*orbitCircumference(radius))/speed;
  return Math.round(time*100)/100;
}
console.log(missionDuration(5,2.000,28.000));
// Copy/paste your selectRandomEntry function here:
let selectRandomEntry=function(ids)
{
  let index = Math.floor(Math.random() * ids.length)
  return ids[index]
};


// Code your oxygenExpended function here:
function oxygenExpended(astronaut,orbRad,speed)
{
   let duration=missionDuration(3,orbRad,speed);
  let oxUsed=Math.round(astronaut.o2Used(duration)*1000)/1000;
  return `${astronaut.name} will perform the spacewalk, which will last ${duration} hours and require ${oxUsed} kg of oxygen.`;
}
console.log(oxygenExpended(414,2.000,28.000));
console.log(`${astronaut.name} will perform the spacewalk, which will last ${duration} hours and require ${oxUsed} kg of oxygen.`);
// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 console.log(selectRandomEntry(crew));
 