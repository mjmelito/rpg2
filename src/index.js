import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Player from './js/player.js';
import Monster from './js/monster.js';

let player = new Player("Bob", 2, "Knight", 100, 0, [], 0, 0);
let monster = new Monster("Bear", 1, 100, 0);

let stabFunction = () => {
  let humanDamage = player.damageCalculator();
  monster.hp = monster.hp - humanDamage;
  console.log(monster.hp);
  let monsterDamage = monster.damageCalculator();
  player.hp = player.hp - monsterDamage;
  console.log(player.hp);
}

let slashFunction = () => {
  player.diceRoll();
  if (player.roll > 2) {
    let humanDamage = player.damageCalculator();
    monster.hp = monster.hp - humanDamage;
    console.log(monster.hp);
    let monsterDamage = monster.damageCalculator();
    player.hp = player.hp - monsterDamage;
    console.log(player.hp);
  } else {
    console.log("YOU MISSED");
  }
}

let pummelFunction = () => {
  let humanDamage = player.damageCalculator();
  monster.hp = monster.hp - humanDamage;
  console.log(monster.hp);
  let monsterDamage = monster.damageCalculator();
  player.hp = player.hp - monsterDamage;
  console.log(player.hp);
}

let shieldFunction = () => {
  let humanDamage = player.damageCalculator();
  monster.hp = monster.hp - humanDamage;
  console.log(monster.hp);
  let monsterDamage = monster.damageCalculator();
  player.hp = player.hp - monsterDamage;
  console.log(player.hp);
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
  stabBtn.addEventListener('click', stabFunction);
});

document.addEventListener("DOMContentLoaded", function() {
  const slashBtn = document.getElementById('slash');
  slashBtn.addEventListener('click', slashFunction);
});

document.addEventListener("DOMContentLoaded", function() {
  const pummelBtn = document.getElementById('pummel');
  pummelBtn.addEventListener('click', pummelFunction);
});

document.addEventListener("DOMContentLoaded", function() {
  const shieldBtn = document.getElementById('shield');
  shieldBtn.addEventListener('click', shieldFunction);
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

