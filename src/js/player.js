export default class Player {
  constructor(name, level, type, hp, exp, items, damage) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.hp = hp;
    this.exp = exp;
    this.items = items;
    this.damage = damage;
  }

  damageCalculator() {
    this.damage = Math.floor(Math.random() * 10 + 1) * this.level;
    return this.damage;
  }

}
