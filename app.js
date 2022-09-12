const text = document.querySelector(".title--text");
const searchText = document.querySelector("#searchbar");

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

const repl = (str) => {
    str = "https://www.google.com/search?q=" + str
        // .replace(" ", "+")
        .replace("#", "%23")
        .replace("\"", "%22")
        .replace("<", "%3C")
        .replace(">", "%3E")
        .replace("%", "%25")
        .replace("?", "%3F")
        .replace(":", "%3A")
        .replace(";", "%3B")
        .replace("@", "%40")
        .replace("&", "%26")
        .replace("=", "%3D")
        .replace("+", "%2B")
        .replace("$", "%24")
        .replace(",", "%2C")
        .replace("|", "%7C");
    return str;
}

changeText();