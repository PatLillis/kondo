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

    // Try to get the previously seen quote
    if (store.enabled) {
        const lastUpdated = store.get('lastUpdated');
        const now = new Date();

        // If it's the same day, use previous quote
        if (lastUpdated && false &&
            lastUpdated.getFullYear() === now.getFullYear() &&
            lastUpdated.getMonth() === now.getMonth() &&
            lastUpdated.getDate() === now.getDate()) {
            quoteIndex = store.get('lastQuoteIndex');
        }
    }

    // If we don't have a quote (either because store.js isn't enabled, or because it's a new day),
    // Generate a new one.
    if (quoteIndex === undefined) {
        quoteIndex = Math.floor(Math.random() * quotes.length);

        // Try to store the new quote back into store
        if (store.enabled) {
        	store.set('lastQuoteIndex', quoteIndex);
        	store.set('lastUpdated', new Date());
        }
    }
}

export default {
    quotes,
    quote
};
