
CHEATSHEET - DONT TRY TO RUN THIS AT HOME LOL

///-COMMENTS IN JAVASCRIPT-//////////////////////////////////////////
//These are single line comments//
/*And THESE
are multi
line comments
in Javascript, the same as CSS*/
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

     Some Tips
//   1. Always end your commands with a semicolen 
//   2. Variables may be numbers or "strings". A string is a set of characters wrapped in " " that prints AS IS. 
//   3. You can access the console of your browser by looking in the developer tools. For Chrome, the keyboard shortcut is CMD+ALT+J. You may run your js in the console to check it out too.
//   4. Javascript can execute all kinds of MATH. Handy when you forgot your calculator...and when doing calculations in a program.
//   5. The computer reads the code from top to bottom, so you must make sure to have all of your stuff in order of execution - in other words, don't try and execute a command on a variable before you define it. It will just come up as undefined. 
//   6. Just like CSS - there are 3 ways to insert Javascript into your page (fancy word is DOM) - 
//         a. By linking to a .js file in the header.
//         b. By typing the actual script INSIDE of script tags IN the header.
//         c. Inline, by typing it directly into your html tag. 
//   7. COUNT FROM ZZZEEERRROOOO 0 0 ZERO - important, and strange. 

   BASIC DATA TYPES
// STRING = "Hello World" - characters wrapped in quotes
// NUMBER = 1, 5, 7.25, 1000 - these are all floats
// BOOLEAN = true, false - pretty self explanitory
// UNDEFINED = no value, or a variable with no value declared.

// If you have a piece of DATA, and have NO IDEA what the hell it is - you may type this either into the console, or via a console.log in your .js 
typeof(data)
//so lets say I find a something that looks weird, like - 7true.5false - really, wtf is that? I would type this
//in the console - 
typeof(7true.5false) 
//or in my .js
console.log(typeof(7true.5false)) //These will tell me if this data is a string, number, boolean or undefined. 


Creating a Variable//
//////////////////////
var me = "chris"; //string variable
var eight = 8; //numeric variable



DEBUGGING//////because even in computer-land, bugs are gross so we want to be ALERTED in the browser window or console log. 
//You can run your js in the console as well. 

via Printing in the console//
console.log("Hello World"); //This will print a string of characers defined in " ".
console.log("Hello," + " " + "World!"); //This will print everything between each " ", including blank spaces.
console.log(2 + 2); //This will add the numbers between the (). You can multiply using *, and divide using /.
console.log(2 + 2 + " " + "Equals FOUR dummy!") //You can do math and print strings at the same time. This would print <4 Equals FOUR dummy!> in the console log. 


via ALERTS to the browser window -  WARNING - these can get annoying.
alert("Hello World"); //ALL of these alert commands execute the same as the above, except they pop up as alerts in your browser.
alert("Hello," + " " + "World!"); 
alert(2 + 2);
alert(2 + 2 + " " + "Equals FOUR dummy!");


ARRAYS - THESE HOLD MULTIPLE VALUES OF A VARIABLE, AND ARE CONTAINED IN THE BOX []
var brothers = "Joey", "Rocco", "Robert"
//They can also contain different types of data
var brothers = "Joey", "Rocco", "Robert", 1, 2, true]
//They can also have arrays WITHIN arrays, such as 
var brothers = "Joey", "Rocco", "Robert", [1, 2, 3]]

//*the above variable values make up the "index" of your array. To access one of your values, you must specify the index number in a box, like this:
brothers[0] - This will call "Joey"
brothers[2] - This will call "Robert"

//*If you want to check to make sure you are using the right index number, you can create a new "checker" variable, that will check to make
//sure you are - like this - I STILL NEED CLARITY ON THIS, I DON'T UNDERSTAND WHY WE DON'T GET THE INDEX NUMBER AS A RESULT. WHAT IS THE 
//POINT OF ASKING FOR AN INDEX NUMBER, THIS JUST SEEMS TO CONFIRM THE VALUE TO BE IN THE VARIABLE ARRAY. ANYWHO -
/////////
var wheresrocco = brothers.indexOf("rocco");
console.log(brothers[wheresrocco]);
//output from console is "rocco".


//MULTI DIMENSIONAL ARRAYS *******************this is when you have a few variables which contain arrays, and you group THEM into a variable with an array!
//like this
var brothers = ["Joey", "Rocco", "Robert"];
var sisters = ["Mary", "Toni", "Dolores"];
var cousins = ["Franky", "Sal", "Michelle"];
var aunts = ["Diane", "Margie", "Kay"];

var family = [brothers, sisters, cousins, aunts]; //you do not need to wrap these different arrayed variables in quotes, because they're not strings, they're data.


//to call upon an index number of this multi dimensional array - you use 2 b[]xes - the first identifies WHICH ARRAY, the second indentifies WHICH VALUE WITHIN THT ARRAY.
//like this
family[2][3]
//try it!
console.log(family[2][1]);
//this will output "Sal" because 2 represents cousins, and 1 represents cousin Sal.


/*=== Means two pieces of data are equal in every way, even the same type.
== Means they're equal, but maybe not the same type.
< Means less than
> Means Greater than
>= Means Greater than or equal to
<= Means Less than or equal to 
!= Means NOT equal data 
!== Means TOTALLY not equal, not even type.*/


IF, ELSE AND THEN....AND ELSE IF.....

//So, you can set all kinds of conditions and directions - like this example here- 

var number = 8  //play with this by putting different numbers in the variable. The secret number is 4. 

if(number===4) {
alert("Congrats! You're a total psychic!");
} else if(number>10){
alert("Please pick a number between 1 and 10");
} else if(number<4) {
alert("Sorry, You're not a psychic");
} else if(number>4) {
alert("Sorry, You're not a psychic");
}


FUNCTIONS - you can set a function to use later on. You must name the function, and you MAY or MAY not give it an (argument)...
an argument is like a variably thingy that you can fill in later. 

function  subtract6 (a_number) {
	return a_number - 6
}

subtract6(12)
//your answer will be 6



function greet (name) {
	return alert("Greetings, " + name);
}

greet("Christina");

CHECK OUT THIS FUNCTION, WHICH INCLUDES IF, ELSE IF AND GREATER THAN, EQUALS AND LESS THAN!
/*//////////////
DOOR PRIZE THINGY
////////////////*/

function enteradoor(number_here){
	if(number_here>4){
		console.log("wrong number");
	} else if (number_here<4) {
		console.log("wrong number");
	}else if(number_here===4) {
		return console.log("You picked the right door! yAaY!!")
	}
} 

enteradoor(4);










