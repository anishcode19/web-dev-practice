const texts = ["Anish", "Ankush", "Ankit", "Rohit"]
let index = 0;
let count = 0;
let letter = "";
let currentText = "";

(function type() {
  if (index === texts.length) {
    index = 0;
  }
  currentText = texts[index];
  letter = currentText.slice(0, count++);

  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    index++;
    count = 0;
  }
  setTimeout(type, 400);
})()