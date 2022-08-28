const text = document.querySelector(".title--text");
const phrases = Array(
    "Welcome back King",
    "Good to see you",
    "You got this",
    "Another day another slay",
    "It's not worth it to be mad",
    "You must create your success",
    "It can only get better from here",
    "You're incredibly tall and hot",
    "You're a good programmer",
    "Worry is a misuse of imagination",
    "Think about Meera",
    "Whatever kills you makes you stronger",
    "If Rownox did it, you can"
);

let changeText = () => {
    text.innerHTML = phrases[Math.floor(Math.random()*phrases.length)];
};

changeText();