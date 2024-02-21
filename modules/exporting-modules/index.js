// Import the modules exported from practiceExports.js below:
const practice = require('./practiceExports.js');

console.log(typeof practice);
console.log(practice);

//Boosting Confidence//
//print “Hello, World” to the screen.//
console.log("Hello,World!");
//Define, initialize, change, and use variables//

function addition(a,b){
    answer=a+b;
    return answer;
}
let answer=0;
console.log(addition(2,3));
//Convert the string '1234' into a number.//

let str='1234';
let number=Number(str);
console.log(number);
//Construct a for loop to repeat a task 100 times.//
//Construct if/else if/else statements to decide which of three tasks to perform.//
for(let i =0;i<=100;i++){
    if(i%2===0)
    {
        console.log("even number");
    }
    else if(i%2!==0)
    {
        console.log("odd numbers");
    }
    else{
        console.log("not even as well as odd");
    }
}
//Build, modify, and access an array.//

let arr=['Player1','Player2','Player3','Player4'];
console.log(arr);
arr.push('Player6');
console.log(arr);
let thirdPlayer=arr[2];
console.log(thirdPlayer);

//Design and call a function.//
function addition(a, b) {
    return a + b;
}
 console.log(addition(5, 7));









