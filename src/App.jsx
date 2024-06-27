import { useState, useEffect } from 'react'
import './App.css'


const dummyQuote = {
  text: "This is a dummy quote",
  author: "Dummy Author"
}

function App() {
  const [quotes, setQuotes] = useState([dummyQuote])
  const [selectedQuote, setSelectedQuote] = useState(dummyQuote)
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false)


  useEffect(() => {
    setIsSpinnerVisible(true);
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setQuotes(data)
        selectQuote(data)
      })
      .catch(error => {
        alert(error)
      })
    setIsSpinnerVisible(false);
  }, [])

  function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${selectedQuote.text} - ${selectedQuote.author}`;
    window.open(twitterUrl, '_blank');
  }

  function selectQuote(quotes) {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSelectedQuote(selectedQuote);

    // showSpinner();
    // authorText.textContent = quote.author ?? 'Unknown'; // does not make sense here
    // Check quote length to determine the styling
    // if (quote.text.length > 120) {
    //     quoteText.classList.add('long-quote');
    // } else {
    //     quoteText.classList.remove('long-quote');
    // }
    // hideSpinner()
  }

  return (
    <>
      <div className="quote-container" id="quote-container" hidden={isSpinnerVisible}>
        {/* Quote */}
        <div className="quote-text">
          <i className="fas fa-quote-left"></i>
          <span id="quote"> {selectedQuote.text}</span>
        </div>
        {/* Author */}
        <div className="quote-author">
          <span id="author">{quotes.author}</span>
        </div>
        {/* Buttons */}
        <div className="button-container">
          <button className="twitter-button" id="twitter" title="Tweet this!"
            onClick={() => tweetQuote()}>
            <i className="fab fa-twitter"></i>
          </button>
          <button id="new-quote" onClick={() => selectQuote(quotes)}>New Quote</button>
        </div>
      </div>
      {/* <!-- Loader --> */}
      <div className="loader" id="loader" hidden={!isSpinnerVisible}></div>
    </>
  )
}

export default App
