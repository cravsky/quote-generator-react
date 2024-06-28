import { useState, useEffect } from 'react'
import './App.css'


const dummyQuote = {
  text: "This is a dummy quote",
  author: "Dummy Author"
}

function App() {
  const [quotes, setQuotes] = useState([dummyQuote])
  const [selectedQuote, setSelectedQuote] = useState(dummyQuote)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setQuotes(data)
        selectQuote(data)
        setIsLoading(false);
      })
      .catch(error => {
        alert(error)
        setIsLoading(false);
      })
  }, [])

  function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${selectedQuote.text} - ${selectedQuote.author}`;
    window.open(twitterUrl, '_blank');
  }

  function selectQuote(quotes) {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSelectedQuote(selectedQuote);
  }

  return (
    <>
      {/* <!-- Loader --> */}
      {isLoading && <div className="loader" id="loader"></div>}
      {/* <!-- Quote Container --> */}
      {!isLoading &&

        <div className="quote-container" id="quote-container">
          {/* Quote */}
          <div className="quote-text">
            <i className="fas fa-quote-left"></i>
            <span id="quote" className={selectedQuote.text.length > 120 ? 'long-quote' : undefined}> {selectedQuote.text}</span>
          </div>
          {/* Author */}
          <div className="quote-author">
            <span id="author">{selectedQuote.author ?? 'Unknown'}</span>
          </div>
          {/* Buttons */}
          <div className="button-container">
            <button className="twitter-button" id="twitter" title="Tweet this!"
              onClick={() => tweetQuote()}>
              <i className="fab fa-twitter"></i>
            </button>
            <button id="new-quote" onClick={() => selectQuote(quotes)}>New Quote</button>
          </div>
        </div>}
    </>
  )
}

export default App
