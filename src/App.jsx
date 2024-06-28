import { useState, useEffect } from 'react'

import Quote from './components/Quote/Quote'
import Buttons from './components/Buttons/Buttons'
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

  function selectQuote(quotes) {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSelectedQuote(selectedQuote);
  }

  function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${selectedQuote.text} - ${selectedQuote.author}`;
    window.open(twitterUrl, '_blank');
  }

  return (
    <>
      {/* <!-- Loader --> */}
      {isLoading && <div className="loader"></div>}
      {!isLoading &&
        <div className="quote-container">
          <Quote quote={selectedQuote}></Quote>
          <Buttons selectQuote={selectQuote} tweetQuote={tweetQuote} quotes={quotes}></Buttons>
        </div>}

    </>
  )
}

export default App
