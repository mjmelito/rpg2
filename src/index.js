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
}

let slashFunction = () => {
  player.diceRoll();
  if (player.roll > 3) {
    let humanDamage = player.damageCalculator() * 1.4;
    player.damage = humanDamage;
    monster.hp = monster.hp - humanDamage;
  } else {
    console.log("YOU MISSED");
  }
}

let pummelFunction = () => {
  player.diceRoll();
  if (player.roll >= 5) {
    let humanDamage = player.damageCalculator() * 1.7;
    player.damage = humanDamage;
    monster.hp = monster.hp - humanDamage;
  } else {
    console.log("YOU MISSED");
  }
}

let combatFunction = () => {
  let monsterDamage = monster.damageCalculator();
  if (attackStyle === "stab") {
    stabFunction();
  } else if (attackStyle === "slash") {
    slashFunction();
  } else if (attackStyle === "pummel") {
    pummelFunction();
  } else if (attackStyle === "shield") {
    monsterDamage = 0;
    console.log("BLOCKED");
  }

  player.hp = player.hp - monsterDamage;
  console.log("player hits monster for " + player.damage + "." + " monster HP: " + monster.hp);
  console.log("monster hits player for " + monster.damage + "." + " player HP: " + player.hp);

  winFunction();
}

let winFunction = () => {
  if (player.hp <= 0) {
    console.log("You Lose.")
  } else if (monster.hp <= 0) {
    console.log("You Win.")
  } else {
    console.log("The Battle Rages On.")
  }
}

let playerName = document.getElementById('playerName');
let playerLevel = document.getElementById('level');
let playerExp = document.getElementById('exp');
let healthStat = document.getElementById('hp');
let playerClass = document.getElementById('type');
let attackStyle = "";
// let stabBool = false;



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
  stabBtn.addEventListener('click', () => {
    attackStyle = "stab";
  });
  stabBtn.addEventListener('click', combatFunction);
});

document.addEventListener("DOMContentLoaded", function() {
  const slashBtn = document.getElementById('slash');
  slashBtn.addEventListener('click', () => {
    attackStyle = "slash";
  });
  slashBtn.addEventListener('click', combatFunction);
  
});

document.addEventListener("DOMContentLoaded", function() {
  const pummelBtn = document.getElementById('pummel');
  pummelBtn.addEventListener('click', () => {
    attackStyle = "pummel";
  });
  pummelBtn.addEventListener('click', combatFunction);
  
});

document.addEventListener("DOMContentLoaded", function() {
  const shieldBtn = document.getElementById('shield');
  shieldBtn.addEventListener('click', () => {
    attackStyle = "shield";
  });
  shieldBtn.addEventListener('click', combatFunction);
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

