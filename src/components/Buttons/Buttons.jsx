export default function Buttons({ selectQuote, tweetQuote, quotes }) {

    return (<div className="button-container">
        <button className="twitter-button" title="Tweet this!"
            onClick={() => tweetQuote()}>
            <i className="fab fa-twitter"></i>
        </button>
        <button onClick={() => selectQuote(quotes)}>New Quote</button>
    </div>)
}