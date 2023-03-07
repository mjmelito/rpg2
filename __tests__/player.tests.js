import Player from '../src/js/player.js';

describe('Player', () => {

  test('should correctly create a player object with name, level, hp, exp, and items attributes', () => {
    let player = new Player("Bob", 1, 'knight', 10, 0, [], 0);
    expect(player.name).toEqual('Bob');
    expect(player.level).toEqual(1);
    expect(player.type).toEqual('knight');
    expect(player.hp).toEqual(10);
    expect(player.exp).toEqual(0);
    expect(player.items).toEqual([]);
  });

  test('should return damage equal to dice roll times player level', () => {
    let player = new Player("Bob", 1, 'knight', 10, 0, [], 0);
    player.damage = 5 * player.level;
    expect(player.damage).toEqual(5);
  });
})