"use strict"

function main() {
// add class "big"
document.querySelector("#grow-me").classList.add("big");

// remove class "big"
document.querySelector("#shrink-me").classList.remove("big");

// log li text content
let liArray = document.querySelectorAll("li");
liArray.forEach(function(li) {
    console.log(li.innerText)
}) 

// set href and update text
document.querySelector(".link").setAttribute("href", "https://www.example.com")
document.querySelector(".link").innerText = "somewhere";

// set "display" for hide-me to "none"
document.querySelector("#hide-me").style.display = "none";

// "display" for show-me to "block"
document.querySelector("#show-me").style.display = "block";

// Get the text that user enters into "name" input box and use it in the welcome message
let userName = document.querySelector("#name")
document.querySelector("h1").innerText = "Welcome " + userName.value;

}