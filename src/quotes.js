import store from 'store'
import quotes from './quotes.json'

// When called, will figure out which quote we should used,
// Based on user's previously seen quotes, and the date
function quote() {
    let quoteIndex;

    //If store is not enabled, just get a random quote
    if (store.enabled) {
        //Set defaults
        if (!store.has('lastUpdated'))
            store.set('lastUpdated', new Date());
        if (!store.has('lastQuoteIndex'))
            store.set('lastQuoteIndex', 0);
        if (!store.has('mostRecentQuotes'))
            store.set('mostRecentQuotes', []);

        const now = new Date();

        // Get values from localStorage
        const lastUpdated = store.get('lastUpdated');
        const lastQuoteIndex = store.get('lastQuoteIndex');
        const mostRecentQuotes = store.get('mostRecentQuotes');


        // If it's the same day, use previous quote
        const lastUpdatedDate = new Date(lastUpdated)

        if (lastUpdatedDate.getFullYear() === now.getFullYear() &&
            lastUpdatedDate.getMonth() === now.getMonth() &&
            lastUpdatedDate.getDate() === now.getDate()) {
            quoteIndex = lastQuoteIndex;
        } else {
            quoteIndex = randomQuoteIndex(mostRecentQuotes);
            store.set('lastQuoteIndex', quoteIndex);
            store.set('lastUpdated', new Date());
            store.set('mostRecentQuotes', mostRecentQuotes);
        }
    }

    //If we didn't get the quote index for some reason, just return a random quote.
    if (quoteIndex === undefined) {
        quoteIndex = randomQuoteIndex();
    }


    const keys = Object.keys(quotes);
    return quotes[keys[quoteIndex]];
}

function randomQuoteIndex(mostRecentQuotes) {
    let quoteIndex;

    if (mostRecentQuotes !== undefined) {
        let index = Math.floor(Math.random() * (quotes.length - mostRecentQuotes.length));
        for (let i = 0; i < quotes.length; i++) {
            if (mostRecentQuotes.indexOf(i) == -1)
                index--;

            if (index == -1) {
                //We've found it!
                quoteIndex = i;
                break;
            }
        }

        // Add this entry to most recent quotes
        mostRecentQuotes.push(quoteIndex);

        // Only ever want recent quotes to have length 1/2 of total quotes
        // This is so that it seems a little more random
        if (mostRecentQuotes.length >= (quotes.length * 0.75))
            mostRecentQuotes.splice(0, 1);
    } else {
        quoteIndex = Math.floor(Math.random() * quotes.length);
    }

    return quoteIndex;
}

export default quote;
