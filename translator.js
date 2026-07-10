const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
};
const reverseMorse = {};

for (let key in morseCode) {
  reverseMorse[morseCode[key]] = key;
}

function englishToMorse(input) {
  const characters = input.toUpperCase().split("");
  const morse = characters.map((char) => {
    if (char === " ") return "/";
    return morseCode[char];
  });
  return morse.join(" ");
}

function morseToEnglish(input) {
  const characters = input.split(" ");
  const english = characters.map((char) => {
    if (char === "/") return " ";
    return reverseMorse[char];
  });
  return english.join("");
}

export { morseCode, englishToMorse, morseToEnglish };
