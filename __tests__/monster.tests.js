import Monster from '../src/js/monster.js';

describe('Monster', () => {
  let monster;

  beforeEach(() => {
    monster = new Monster("Monster", 1, 5);
  })

  test('should correctly create a monster object with name, level, and hp attributes', () => {
    expect(monster.name).toEqual('Monster');
    expect(monster.level).toEqual(1);
    expect(monster.hp).toEqual(5);
  });

  test('should return damage equal to dice roll times monster.level', () => {
    monster.damage = 5 * monster.level;
    expect(monster.damage).toEqual(5);
  });
})