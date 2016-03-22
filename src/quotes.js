import store from 'store'

const quotes = [
    // Page 1
    "Start by discarding. Then organize your space, thoroughly, completely, in one go.",

    // Page 2
    "A dramatic reorganization of the home causes correspondingly dramatic changes in lifestyle and perspective. It is life transforming.",

    // Page 4
    "When you put your house in order, you put your affairs and your past in order, too.",

    // Page 5
    "&hellip;they are surrounded only by the things they love",

    // Page 41
    "We should be choosing what we want to keep, not what we want to get rid of.",

    // Page 53
    "The urge to point out someone else's failure to tidy is usually a sign that you are neglecting to take care of your own space."
]

// When called, will figure out which quote we should used,
// Based on user's previously seen quotes, and the date
function quote() {
    let quoteIndex;

    //If store is not enabled, just get a random quote
    if (store.enabled) {
        //Set defaults
        // if (!store.has('lastUpdated'))
            store.set('lastUpdated', new Date());
        // if (!store.has('lastQuoteIndex'))
            store.set('lastQuoteIndex', 0);
        // if (!store.has('mostRecentQuotes'))
            store.set('mostRecentQuotes', [0, 1, 2]);

        const now = new Date();

        // Get values from localStorage
        const lastUpdated = store.get('lastUpdated');
        const lastQuoteIndex = store.get('lastQuoteIndex');
        const mostRecentQuotes = store.get('mostRecentQuotes');


        // If it's the same day, use previous quote
        const lastUpdatedDate = new Date(lastUpdated)

        if (false && lastUpdatedDate.getFullYear() === now.getFullYear() &&
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
    if (!quoteIndex) {
        quoteIndex = randomQuoteIndex();
    }

    return "";
    return quotes[quoteIndex];
}

function randomQuoteIndex(mostRecentQuotes) {
    let quoteIndex;

    if (mostRecentQuotes) {
        let index = Math.floor(Math.random() * (quotes.length - mostRecentQuotes.length));
        for (let i = 0; i < quotes.length; i++) {
            if (!mostRecentQuotes.contains(i))
                index--;

            if (index == -1) {
                //We've found it!
                quoteIndex = i;
                break;
            }
        }

        mostRecentQuotes.splice(0, 1);
        mostRecentQuotes.push(quoteIndex);
    } else {
        quoteIndex = Math.floor(Math.random() * quotes.length);
    }

    return quoteIndex;
}

export default quote;
