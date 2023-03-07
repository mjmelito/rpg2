import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Player from './js/player.js';
import Monster from './js/monster.js';

let player = new Player("Bob", 2, "Knight", 10, 0, [], 0);
let monster = new Monster("Bear", 1, 100);

let damageCalculator = () => {
  player.diceRoll();
  let damage = player.level * player.roll;
  console.log(damage + " " + player.level + " " + player.roll);
  return damage;
};

let combatFunction = () => {
  let humanDamage = damageCalculator();
  console.log(humanDamage);
  monster.hp = monster.hp - humanDamage;
  console.log(monster.hp);
}

let playerName = document.getElementById('playerName');
let playerLevel = document.getElementById('level');
let playerExp = document.getElementById('exp');
let healthStat = document.getElementById('hp');
let playerClass = document.getElementById('type');

playerName.innerText = "Name: " + player.name;
playerLevel.innerText = "Level: " + player.level;
playerExp.innerText = "Experience: " + player.exp + "/100";
healthStat.innerText = "HP:" + player.hp;
playerClass.innerText = "Class: " + player.type;

document.addEventListener("DOMContentLoaded", function() {
  const attackBtn = document.getElementById('attackBtn');
  attackBtn.addEventListener('click', attackBtnUI);
});

document.addEventListener("DOMContentLoaded", function() {
  const stabBtn = document.getElementById('stab');
  stabBtn.addEventListener('click', combatFunction);
});

let attackBtnBool = false;
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

