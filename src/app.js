/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//VARS -----------------------------------------------------------------------

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const suits = ["♠️", "♣️", "♦️", "♥️"];
const SuitsColor = ["black", "red"];

const card = document.querySelector("#numberCard");
const suitUp = document.querySelector("#suitUp");
const numberCenter = document.querySelector("#numberCenter");
const suitDown = document.querySelector("#suitDown");

//FUNCTIONS ------------------------------------------------------------------------

const GetRandomNumber = numbers[Math.floor(Math.random() * numbers.length)]; //función nº random aleatorio
const GetRandomSuit = suits[Math.floor(Math.random() * suits.length)];

function printToDocument() {
  numberCenter.textContent = GetRandomNumber;
  suitUp.textContent = GetRandomSuit;
  suitDown.textContent = GetRandomSuit;

  if (GetRandomSuit === "♥️" || GetRandomSuit === "♦️") {
    suitUp.style.color = "red";
    suitDown.style.color = "red";
  }
}

//EVENTS -------------------------------------------------------------------------

window.onload = function() {
  printToDocument();
};
