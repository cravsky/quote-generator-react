import classes from './Buttons.module.css';

export default function Buttons({ selectQuote, tweetQuote, quotes }) {

    return (<div className={classes['button-container']}>
        <button className={classes['twitter-button']} title="Tweet this!"
            onClick={() => tweetQuote()}>
            <i className='fab fa-twitter'></i>
        </button>
        <button onClick={() => selectQuote(quotes)}>New Quote</button>
    </div>)
}