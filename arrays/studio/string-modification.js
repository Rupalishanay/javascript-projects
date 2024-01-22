const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newstr=str.slice(3) + str.substring(0,3);
console.log(newstr);

//Use a template literal to print the original and modified string in a descriptive phrase.

const num = input.question("Enter a number: ");

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
if(num<=str.length){
    let newstr=str.slice(num) + str.slice(0,num);
    console.log('turned ${str} into > ${newstr}');

}
else{
console.log("didn't work");
}

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

