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

//let inputValue = parseInt(inputEl.value);
let listArrOne = ""
let listArrTwo = ""

const getRandomArr = JSON.parse(localStorage.getItem("randomArr"))
const getRandomArrTwo = JSON.parse(localStorage.getItem("randomArrTwo"))


if (getRandomArr && getRandomArrTwo) {
  listArrOne = getRandomArr
  listArrTwo = getRandomArrTwo
  generateRandomArr()
}

function generateRandomArr() {

  for (let i = 0; i < parseInt(inputEl.value); i++) {
    let randomIndexOne = Math.floor(Math.random() * randomArr.length);
    let randomIndexTwo = Math.floor(Math.random() * randomArr.length);
    listArrOne += randomArr[randomIndexOne];
    listArrTwo += randomArr[randomIndexTwo];

  }
  displayOneEl.textContent = listArrOne
  displayTwoEl.textContent = listArrTwo

  localStorage.setItem("randomArr", JSON.stringify(listArrOne))
  localStorage.setItem("randomArrTwo", JSON.stringify(listArrTwo))

  inputEl.value = ""

}




generateBtn.addEventListener("click", function () {


  if (inputEl.value === 0 || inputEl.value === "" || isNaN(inputEl.value)) {
    inputEl.style.border = "1px solid red";
    errorMessage.textContent = "⚠️ Please Enter password Length!";

  } else {
    inputEl.style.border = "";
    errorMessage.textContent = "";
    displayOneEl.textContent = "";
    displayTwoEl.textContent = "";
  }

  generateRandomArr()


});




