var quotes = document.querySelectorAll('p');
var myDiv = [].slice.call(quotes);
// document.querySelectorAll('.columns > div');
// document.querySelectorAll('.columns > div').length

// the following will not work because it is not an array so cant use shift property   document.querySelectorAll('.columns > div').shift();
// the slice call is a hack that will convert this into an array
var divArr = [].slice.call(document.querySelectorAll('.columns div'));
// Array.isArray(divArr); a way to check to see if an array
//breaks the paragraphs
myDiv.forEach(function(currItem) {
 console.log(currItem);
 })
// extracting the text from the p tags
myDiv.forEach(function(currItem) {
console.log(currItem.textContent);
})
//we want to squish all the paragraphs into one giant string, so we can split the spaces


//before we start our loop, create a variable...it is an empty string, looking for the longest string in an array

var bigText = "";
myDiv.forEach(function(currItem) {
bigText += currItem.textContent
console.log(currItem.textContent);
})
// concatenating that string from all of the other strings in the document...says text is an empty string



// bigText
//all of the text in HTML -- one long string

// bigText.length
// all of the text including white space -- all characters in string


// convert string into an array and now you can split it
var wordArray = bigText.split(" ");

// wordArray  -- this is your word count
// Array[1036]
wordArray.length
1036
bigText.split(" ");
Array[1036]

bigText.split(" ").length;
1036

var wordMath = wordArray.length;

// wordArray.length/230

var total = Math.round(wordMath/230);
return total + " minutes";


document.querySelector('h3').innerHTML += readTime();

// first step: take content from DOM -- querySelector and grab whatever we think is reasonable to grab all content on page

// next step convert to array

// then you want to iterate over array to grab text content and insert them into a string  -- bigText









// var myDiv = [].slice.call();
