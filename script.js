const quotes = [
    "ill save my pookie ",
    "mango pistachio or vanilla ALWAYS🤚🏻",
    "guys i love watching nol in the rookie",
    "Sonya always says: 'No one needs math, just vibes.'"
];

document.getElementById('sonyaButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('sonyaQuote').innerText = quotes[randomIndex];
});
