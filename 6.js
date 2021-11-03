//Finding a remainder

var remainder;
remainder = 11 % 3;
console.log(remainder)

// Compound assignment with augmented addition

var a = 3;
var b = 17;
var c= 12;

a +=12
b +=9
c +=7;

console.log(a,b,c)

// Compound assignment with augmented subtraction

var az = 11;
var bz = 9;
var cz= 3;

az -=6
bz -=15
cz -=1;
console.log(az,bz,cz)

//Compound Assignment with Augmented Multiplication

var aq = 5;
var bq = 12;
var cq= 4.6;

aq *= 5;
bq *= 3
cq *= 10

console.log(a,b,c)

//Compound Assignment with Augmented Division

var a = 48;
var b = 108;
var c= 33;

a /= 12;
b /= 4;
c /= 11;

console.log(a,b,c)

// Declare String Variables

var firstName = "Alan";
var lastName = "Turing";

var myfirstName = "Jan";
var mylastName = "Nowak";

//Escaping Literal Quotes in Strings

var myStr = "I am a a \"double qouted\" string inside \"double qoutes\"";

console.log(myStr)

//Quoting strings with single quotes

var myStr2 = '<a href="http:www.example.com" target="_blank">Link</a>';

console.log(myStr2)

//Escape Sequences in Strings

/*****
CODE OUTPUT
\' single quote
\" double quote"
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
 *****/

var myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr3)

//Concatenating Strings with Plus Operator

var ourStr ="I come first. " + "I come second.";

var myStr4 = "This is the start. " + "This the end."
console.log(myStr4)

//Concatenating Strings with Plus Equals Operator

var ourStr = "I come first. ";
ourStr += " I come second.";

var myStr5 = "This is the first sentence.";
myStr5 += " This is the second sentence."
console.log(myStr5)

//Constructing Strings with Variables

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "Beau";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr)


//Appending Variables to Strings

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr)

var someAdjective = "worthwhile";
var myStr6 = "Learning to code is ";
myStr6 += someAdjective;
console.log(myStr6)

//Find Length of String

var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength)

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength)


console.log()