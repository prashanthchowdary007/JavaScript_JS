/* 
Variables in JavaScript :

In javascript most of the time we work with data, the "Variable" -> is a "named storage"
which means we store the data in our own naming converstion
*/

/* there are three keywords to declare the variables

let -> we can reassign the data after declaring the data to variable
const -> we can't change the data or (not Modifiable) once data is assiged to variable with const keyword
var-> (out-dated)-> it is just like a let keyword but in old day when the javascript is developed the var keyword is use to declare the variables
*/



//________________________________________| keyword { let } |________________________________________________

//printing the Hello World program
let name = "Hello, World!";
console.log(name) 
//output :  "Hello, World!"

//console.log is a commend that gives the output in the console tab we can use alert() insted of console.log() 

//printing the dummy IP address 
let myIpaddress = "121.0.0.87"
alert(myIpaddress) // it popup a box in the window of the webbrowser saying the our dummy IP better go with console.log for printing the data while codeing

// intialize the variable and then give a value to it 
let message;
message = "hi, bob it is good to see you!"; 
// the ending ";" not importent it even the java script work we miss -> ";" it is use to represent that the line is complete 
console.log(message)
// output 



// Q1. Question declare the variable for college name and print the college name useing console.log


//________________________________________| keyword { const } |________________________________________________

/*

constent -> const 
const mean constent the value once declered. programmer can't modify the data after initlization done

*/

const dataOfBirth = "01/01/2000"
console.log(dataOfBirth)
//output 01/01/2000

const colorCode = "f002b8"
colorCode = "b0034F"
console.log(colorCode) // it trows a -> TypeError: Assignment to constant variable.


//________________________________________| keyword { var } |________________________________________________

//variable -> var
//var is just same as let keyword
var comment = "Hello, World!";
console.log(comment) 









