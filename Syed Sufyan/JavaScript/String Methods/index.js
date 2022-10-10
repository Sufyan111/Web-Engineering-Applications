let sentence = "String methods help you to work with strings."

//".length" is used to determine the length of a string. It also includes spaces and special characters.
console.log(`length of string is ${sentence.length}`) 

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

console.log(`slice method -> ${sentence.slice(0, sentence.length-5)}`)
console.log(`substring method -> ${sentence.substring(0, 8)}`)
console.log(`substr method -> ${sentence.substr(5, 8)}`)

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
// CASE SENSITIVE

// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

console.log(`replace method -> ${sentence.replace("String", "NUMBER")}`)

// JavaScript String concat()
// concat() joins two or more strings:

console.log(`concat method -> ${sentence.concat(" Adds a new string to the end of the string")}`)

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string:

let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2)

// JavaScript String padStart()
// The padStart() method pads a string with another string:

paddedSentence = sentence.padStart(70,"HI ")

console.log(`padstart method -> ${paddedSentence}`)