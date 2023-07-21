/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

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

  {quote: 'I saw a documentary on how ships are kept together. Riveting!', 
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
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);