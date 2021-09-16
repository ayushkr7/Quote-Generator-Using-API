var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const text = document.getElementById('text'), qauthor = document.getElementById('quote-author'), qbtn = document.getElementById('new-quote');

var currentQuote,currentAuthor;
function randomQuotes(){
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
  text.textContent = data.content;
  qauthor.textContent = data.author;
  currentQuote = data.content;
  currentAuthor = data.author;
  document.getElementById("tweet-quote").href = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor);
  });
}

randomQuotes();

function randColor(){
  let r = Math.floor(Math.random() * 12);
  
  document.body.style.background = colors[r];
  document.getElementById("text").style.color = colors[r];
  document.getElementById("author").style.color = colors[r];
  document.getElementById("new-quote").style.background = colors[r]; document.getElementById("twitter").style.background = colors[r];
}

randColor();

