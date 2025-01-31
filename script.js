const quotes = [
    "Sonya once said: 'Coffee before anything, even editing.'",
    "Sonya's wisdom: 'Cameron Monaghan is the only right answer.'",
    "Sonya on editing: 'If it doesn’t have soul, it’s not worth editing.'",
    "Sonya always says: 'No one needs math, just vibes.'"
];

document.getElementById('sonyaButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('sonyaQuote').innerText = quotes[randomIndex];
});
