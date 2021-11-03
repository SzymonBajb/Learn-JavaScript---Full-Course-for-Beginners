//Bracket Notation to Find First Character in String

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName [0];
console.log(firstLetterOfFirstName)

var firstLetterOfLastName = "";
var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName)

//String Immutability - Niezmienność ciągu 

var myStr = "Jello World";

//myStr[0] = "H"; - Nie zadziała

myStr = "Hello World"; // działa
console.log(myStr)

//Bracket Notation to Find Nth Character in String

var firstName = "Ada";

secondLetterOfFirstName = firstName [1];
console.log(secondLetterOfFirstName)

var lastName = "Lovelace";

thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName)

//Bracket Notation to Find Last Character in String

var firstName = "Ada";

lastLetterOfFirstName = firstName [firstName.length - 1];
console.log(lastLetterOfFirstName)

var lastName = "Lovelace";

lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName)

//Word Blanks
//Noun rzeczownik, Adjective przymiotnik, Verb czasownik, Adverb przysłówek
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){

    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store" + " " + myAdverb;

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));



console.log()