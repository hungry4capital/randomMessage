//Create messages that randomly display whenever the program is run. Create messages in an array. Create variable that randomly picks a number the length of the array and log the message found at that index.

//Topic of the messages will be motivational quotes taken from https://www.goodreads.com/quotes/tag/life

//Create array of motivational quotes
const quotes = ["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", "You only live once, but if you do it right, once is enough.", "In three words I can sum up everything I've learned about life: it goes on.", "To live is the rarest thing in the world. Most people exist, that is all.", "Insanity is doing the same thing, over and over again, but expecting different results.", "It is better to be hated for what you are than to be loved for what you are not.", "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.", "It does not do to dwell on dreams and forget to live.", "Good friends, good books, and a sleepy conscience: this is the ideal life.", "Life is what happens to us while we are making other plans."];

const randomMessage = arr => {
    const randomIndex1 = Math.floor(Math.random() * arr.length);
    const randomIndex2 = Math.floor(Math.random() * arr.length);
    let msg1 = arr[randomIndex1];
    let msg2 = arr[randomIndex2];
    return `${msg1} ${msg2}`
}

console.log(randomMessage(quotes))