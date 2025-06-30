const characters = ["A", "B", "C", "D", "E",
  "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T",
  "U", "V", "W", "X", "Y", "Z",
  "a", "b", "c", "d", "e", "f",
  "g", "h", "i", "j", "k", "l", "m", "n",
  "o", "p", "q", "r", "s", "t", "u", "v"
  , "w", "x", "y", "z", "0", "1", "2", "3",
  "4", "5", "6", "7", "8", "9", "~",
  "`", "!", "@", "#", "$", "%", "^", "&",
  "*", "(", ")", "_", "-", "+", "=",
  "{", "[", "}", "]", ",", "|", ":",
  ";", "<", ">", ".", "?", "/"]






function generatePass() {
  let btn3 = document.getElementById("btn-3");
  let btn4 = document.getElementById("btn-4");

  let generatedPassword1 = ""
  let generatedPassword2 = ""

  for (let i = 0; i < 15; i++) {
    let randomChar = characters[Math.floor(Math.random() * characters.length)]
    generatedPassword1 += randomChar;
  }
  for (let i = 0; i < 15; i++) {
    let randomChar = characters[Math.floor(Math.random() * characters.length)]
    generatedPassword2 += randomChar;
  }



  btn3.textContent = generatedPassword1;
  btn4.textContent = generatedPassword2;
}

function clearPass() {
  let btn3 = document.getElementById("btn-3");
  let btn4 = document.getElementById("btn-4");
  btn3.textContent = "";
  btn4.textContent = "";
}


document.getElementById('copyableText1').addEventListener('click', function() {
        const textToCopy = this.textContent; // Get the text content of the clicked element
        console.log(textToCopy)

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                console.log('Text copied to clipboard successfully!');
                // Optional: Provide visual feedback to the user (e.g., a temporary "Copied!" message)
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
});

