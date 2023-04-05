const description = "This is a description";
const name = "Pamela";
const venue = document.getElementById("venue");
// const pElements = document.getElementsByTagName("p");
const linkone = document.getElementById("linkone");

venue.innerHTML = name;
venue.setAttribute("class", "styledh1");
venue.style.fontSize = "100px";
console.log("Testing....");

linkone.href = "https://www.google.com";

const pOne = document.querySelector("p.test-class");
pOne.style.color = "red";
const pTestClass = document.querySelectorAll("p.test-class");

// pTestClass[0].style.color = "red";
pTestClass[1].style.color = "red";
pTestClass[2].style.color = "red";
// const newElement = document.createElement(
//   <h1>this was created with javascript</h1>
// );

// console.log((venue += newElement));

24;
true;
false;

let ages = { James: 34, Peter: 49, Samuel: 32 };
console.log(ages);

let states = {
  Abia: "umuahia",
  Adamawa: "Yola",
  AkwaIbom: "uyo",
};

let prices = {
  beans: 50,
  pawpaw: 200,
  garri: 40,
};

let people = {
  Maskie: ["playing football", "hitting the gym", "reading"],
  Promise: "lover boy",
  Success: 35,
};

let numbers = [
  { name: "Bisi", age: 32, occupation: "singing" },
  32,
  41,
  "string",
];

let schools = {
  gloryland: "5 years",
  uniben: "5 years",
  mit: "3 years",
};

let x = 4;
let y = 32;

console.log(y + x); //addition
console.log(y - x); //subtraction
console.log(y * x); //multiplication
console.log(y / x); //division
console.log(y ** x); //exponential
console.log(x++);
console.log(x);
y--;
console.log(y);

x += 4;

//conditional statements.
let hour = 35;
// if (hour == 10) {
//   console.log("There are only 24 hours in a day");
// } else {
//   console.log("You are mad!");
// }

if (10 < hour < 12) {
  console.log("There are 1 0 hours in a day");
} else if (12 < hour < 24) {
  console.log("there are 30 hours in a day");
} else if (24 < hour < 32) {
  console.log(" getout");
} else {
  console.log("You are mad");
}

console.log(hour);

let introH1 = document.getElementById("intro");
introH1.onmouseenter = function changeH1() {
  introH1.style.color = "blue";
  introH1.style.transform = "scale(1.05)";
};

introH1.onmouseleave = function changeH1() {
  introH1.style.color = "red";
  introH1.style.transform = "scale(1)";
};

let btn = document.getElementById("btn");
btn.onmouseenter = function () {
  btn.style.transform = "scale(1.1)";
};

btn.onmouseleave = function () {
  btn.style.transform = "scale(1)";
};

let inputField = document.getElementById("inputfield");
let submit = document.getElementById("submit");
let userInput = "";

inputField.onchange = function () {
  userInput = inputField.value;
};

submit.onclick = function () {
  alert(userInput);
};
