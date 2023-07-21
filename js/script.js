/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * 8 quotes from comedians stored in 'quotes' variable
 */

let quotes = [
  {quote: 'My girlfriend is absolutely beautiful. Body like a Greek statue...completely pale, no arms.', 
   source: 'Phil Wang',
   citation: 'Fest Magazine',
   year: 2019},
  

  {quote: 'I bought myself some glasses. My observational comedy improved.', 
   source: 'Sara Pascoe'},

  {quote: 'The first time I met my wife, I knew she was a keeper. She was wearing massive gloves.', 
   source: 'Alun Cochrane',
   citation: 'Fringe Festival',
   year: 2015},

  {quote: "As a kid I was made to walk the plank. We couldn't afford a dog.", 
   source:'Gary Delaney'},
   

  {quote: "I saw a documentary on how ships are kept together. Riveting!", 
   source:'Stewart Francis',
   citation: 'Twitter',
   year: 2006 },

  {quote: "My therapist says I have a preoccupation with vengeance. We'll see about that.",
   source:'Stewart Francis'},

  {quote: "I was in my car driving back from work. A police officer pulled me over and knocked on my window. I said, 'One minute I'm on the phone.'", 
   source: 'Alan Carr',
   citation: 'Rolling Stone Magazine',
   year: 2020},

  {quote: "Here's a picture of me with REM. That's me in the corner.", 
   source: 'Milton Jones'}
   
]




/***
 * `getRandomQuote` function
 * returns a random number between 0-7 (amount of quotes available)
 * uses random number to assign a random quote to randomObj variable
***/


function getRandomQuote() {

  let randomNumber = Math.floor(Math.random() * 7);

  let randomObj = quotes[randomNumber];
  
  return randomObj;
}


/***
 * `printQuote` function
 * assigns getRandomQuote function to variable.
 * creates HTML string using template literal to insert random quote and source.
 * if statements to test if citation and year are available, if so they are added to quoteHTML string.
 * final <p> tag added to end of statement
 * quoteHTML is added to the innerHTML
***/


function printQuote() {
  
  const randomQuote = getRandomQuote();

  let quoteHTML = `<p class="quote">${randomQuote.quote}</p><p class ="source">${randomQuote.source}`;

  if (randomQuote.citation){

    quoteHTML += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year){

    quoteHTML += `<span class="year">${randomQuote.year}</span>`;

  }

  quoteHTML += '</p>';

  document.getElementById('quote-box').innerHTML = quoteHTML; 
}


/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);