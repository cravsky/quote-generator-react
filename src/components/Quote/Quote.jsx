export default function Quote({ quote }) {
    return (
        <article>
            {/* Quote Text */}
            <div className="quote-text">
                <i className="fas fa-quote-left"></i>
                <span className={quote.text.length > 120 ? 'long-quote' : undefined}> {quote.text}</span>
            </div>
            {/* Author */}
            <div className="quote-author">
                <span>{quote.author ?? 'Unknown'}</span>
            </div>
        </article>)
}