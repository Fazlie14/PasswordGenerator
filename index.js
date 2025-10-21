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
  "P",
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
];

let displayOneEl = document.getElementById("displayOne-El");
let displayTwoEl = document.getElementById("displayTwo-El");

let generateBtn = document.getElementById("generate-Btn");
let inputEl = document.getElementById("input-El");
let errorMessage = document.getElementById("error-El");

//let inputValue = parseInt(inputEl.value);

let listArrOneStorage = "";
let listArrTwoStorage = "";

const getRandomArr = JSON.parse(localStorage.getItem("randomArr"));
const getRandomArrTwo = JSON.parse(localStorage.getItem("randomArrTwo"));

if (getRandomArr) {
  listArrOneStorage = getRandomArr;
  listArrTwoStorage = getRandomArrTwo;
  displayOneEl.textContent = listArrOneStorage;
  displayTwoEl.textContent = listArrTwoStorage;
}

function generateRandomArr() {
  let listArrOne = "";
  let listArrTwo = "";
  const passwordLength = parseInt(inputEl.value);
  for (let i = 0; i < passwordLength; i++) {
    const randomIndexOne = Math.floor(Math.random() * randomArr.length);
    const randomIndexTwo = Math.floor(Math.random() * randomArr.length);
    listArrOne += randomArr[randomIndexOne];
    listArrTwo += randomArr[randomIndexTwo];
  }
  console.log(listArrOne);
  displayOneEl.textContent = listArrOne;
  displayTwoEl.textContent = listArrTwo;

  localStorage.setItem("randomArr", JSON.stringify(listArrOne));
  localStorage.setItem("randomArrTwo", JSON.stringify(listArrTwo));

  inputEl.value = "";
}

generateBtn.addEventListener("click", function () {
  if (inputEl.value === 0 || inputEl.value === "" || isNaN(inputEl.value)) {
    inputEl.style.border = "1px solid red";
    errorMessage.textContent = "⚠️ Please Enter password Length";
  } else if (inputEl.value < 7) {
    inputEl.style.border = "1px solid red";
    errorMessage.textContent = "⚠️ Please Enter password Length 7 up!";
  } else {
    
    inputEl.style.border = "";
    errorMessage.textContent = "";
    displayOneEl.textContent = "";
    displayTwoEl.textContent = "";
    generateRandomArr();
    
  }
});

// ...existing code...

// Add these functions after the existing code
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Optional: Show feedback that text was copied
        
        errorMessage.textContent = "✓ Password copied!";
        setTimeout(() => {
            errorMessage.textContent = "";
        }, 1500);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Add click event listeners to both display elements
displayOneEl.addEventListener("click", function() {
  
    if (this.textContent) {
        copyToClipboard(this.textContent);
    }
});

displayTwoEl.addEventListener("click", function() {
    if (this.textContent) {
        copyToClipboard(this.textContent);
    }
});
