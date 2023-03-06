import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Player from './js/player.js';
// // import Monster from './js/monster.js';



let player = new Player("Bob", 1, "Knight", 10, 0, []);

let playerName = document.getElementById('playerName');
let playerLevel = document.getElementById('level');
let playerExp = document.getElementById('exp');
let healthStat = document.getElementById('hp');
let playerClass = document.getElementById('type');

let attackBtnBool = false;

playerName.innerText = "Name: " + player.name;
playerLevel.innerText = "Level: " + player.level;
playerExp.innerText = "Experience: " + player.exp + "/100";
healthStat.innerText = "HP:" + player.hp;
playerClass.innerText = "Class: " + player.type;

document.addEventListener("DOMContentLoaded", function() {
  const attackBtn = document.getElementById('attackBtn');
  attackBtn.addEventListener('click', attackBtnUI);
});

const attackBtnUI = (event) => {
  event.preventDefault();
  if (attackBtnBool === true) {
    document.querySelector('#attackDisplay').setAttribute('class', 'hidden');
    attackBtnBool = false;
  } else {
    document.querySelector('#attackDisplay').removeAttribute('class');
    attackBtnBool = true;
  }
};

