import Player from '../src/js/player.js';

describe('Player', () => {
  let player = player;

  beforeEach(() => {
    player = new Player("Bob", 1, 'knight', 10, 0, []);
  })

  test('should correctly create a player object with name, level, hp, exp, and items attributes', () => {
    expect(player.name).toEqual('Bob');
    expect(player.level).toEqual(1);
    expect(player.type).toEqual('knight');
    expect(player.hp).toEqual(10);
    expect(player.exp).toEqual(0);
    expect(player.items).toEqual([]);
  });
})