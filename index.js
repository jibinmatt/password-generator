/* 

Array to hold all possible chars
Button to generate 4 random password options
Display password options
Stretch Goal: Ability to set the password length and a one-click
copy password to the clipboard
(hint: use <input type="text"> to display the password options)

const arrayS = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","!","@","#","$","%","^","&","*","(",")","+","-",".","~","|","<",">","=","-","_","/",":",";","?","[","]","{","}","~"];

*/

const passwordChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
  "/",
  ":",
  ";",
  "?",
  "[",
  "]",
  "{",
  "}",
  "~",
];

let passwordOne = document.getElementById("password-one-el");
let passwordTwo = document.getElementById("password-two-el");
let passwordThree = document.getElementById("password-three-el");
let passwordFour = document.getElementById("password-four-el");
let userInput = document.getElementById("user-el");

let output1,
  output2,
  output3,
  output4 = "";

function generate() {
  if (userInput.value.length === 0 || userInput.value == 0) {
    userInput.value = 8;
  } else if (userInput.value > 20) {
    alert("Please input values between 1-20");
    userInput.value = null;
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
    passwordThree.textContent = "";
    passwordFour.textContent = "";
    window.onload();
  }

  output1 = output2 = output3 = output4 = "";
  passwordOne.textContent = "";
  passwordTwo.textContent = "";
  passwordThree.textContent = "";
  passwordFour.textContent = "";

  for (let i = 0; i < userInput.value; i++) {
    let passwordOneRandom = Math.floor(Math.random() * passwordChars.length);
    output1 += passwordChars[passwordOneRandom];
  }
  for (let i = 0; i < userInput.value; i++) {
    let passwordTwoRandom = Math.floor(Math.random() * passwordChars.length);
    output2 += passwordChars[passwordTwoRandom];
  }
  for (let i = 0; i < userInput.value; i++) {
    let passwordThreeRandom = Math.floor(Math.random() * passwordChars.length);
    output3 += passwordChars[passwordThreeRandom];
  }
  for (let i = 0; i < userInput.value; i++) {
    let passwordFourRandom = Math.floor(Math.random() * passwordChars.length);
    output4 += passwordChars[passwordFourRandom];
  }

  passwordOne.textContent = output1;
  passwordTwo.textContent = output2;
  passwordThree.textContent = output3;
  passwordFour.textContent = output4;
}
