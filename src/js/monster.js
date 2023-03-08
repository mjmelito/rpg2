export default class Monster {
  constructor(name, level, hp, damage) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.damage = damage;
  }

  damageCalculator() {
    this.damage = Math.floor(Math.random() * 11) * this.level;
    return this.damage;
  }
}