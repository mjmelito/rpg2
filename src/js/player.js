export default class Player {
  constructor(name, level, type, hp, exp, items, damage, roll) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.hp = hp;
    this.exp = exp;
    this.items = items;
    this.damage = damage;
    this.roll = roll;
  }

  damageCalculator() {
    this.damage = Math.floor(Math.random() * 11) * this.level;
    return this.damage;
  }

  diceRoll() {
    this.roll= Math.floor(Math.random() * 10 + 1);
  }
}
