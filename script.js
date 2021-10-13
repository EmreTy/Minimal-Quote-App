const get = document.querySelector("#getIt");
const text = document.querySelector("#text");
const autor = document.querySelector("#autor");

function getQuote() {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then(function (antwort) {
      return antwort.json();
    })
    .then(function (daten) {
      const quoteText = daten.data[0].quoteText;
      const quoteAutor = daten.data[0].quoteAuthor;
      text.innerText = quoteText;
      autor.innerText = quoteAutor;
      console.log(quoteText, quoteAutor);
    });
}

get.addEventListener("click", getQuote);
