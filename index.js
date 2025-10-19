let randomArr = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P,",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
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
  "<",
  ">",
  "?",
  "/",
  "",
];

let displayOneEl = document.getElementById("displayOne-El");
let displayTwoEl = document.getElementById("displayTwo-El");

let generateBtn = document.getElementById("generate-Btn");
let inputEl = document.getElementById("input-El")
let errorMessage = document.getElementById("error-El");



generateBtn.addEventListener("click", function () {
  
 
  let inputValue = parseInt(inputEl.value);

  if(inputEl.value === 0 || inputEl.value === "" || isNaN(inputValue)){
    inputEl.style.border = "1px solid red";
    errorMessage.textContent = "⚠️ Please Enter password Length!";
    
  }else{
    inputEl.style.border = "";
    errorMessage.textContent = "";
    displayOneEl.textContent = "";
    displayTwoEl.textContent = "";
  }

  
  
  
  for (let i = 0; i < inputValue; i++) {
    let randomIndexOne = Math.floor(Math.random() * randomArr.length);
    let randomIndexTwo = Math.floor(Math.random() * randomArr.length);
    displayOneEl.textContent += randomArr[randomIndexOne];
    displayTwoEl.textContent += randomArr[randomIndexTwo];
  }
  
  
 
  inputEl.value = ""

  

});



