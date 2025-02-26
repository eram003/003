let numberDisplay = document.getElementById('number-display');
let min = 1.048596;
let max = 1.130205;

setInterval(() => {
    let randomNum = (Math.random() * (max - min) + min).toFixed(6);
    numberDisplay.textContent = randomNum;
}, 1000);

// Logo click functionality
const logo = document.getElementById('logo');
let links = [
    "https://www.youtube.com/watch?v=-MFXQLnir9U",
    "https://www.youtube.com/watch?v=qWwxKvcJsWg",
    "https://youtu.be/2Q9MqL83FeE"
];
let currentLink = 0;

logo.addEventListener('click', () => {
    window.open(links[currentLink], '_blank');
    currentLink = (currentLink + 1) % links.length;
});
