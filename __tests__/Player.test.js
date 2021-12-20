// require statements
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');


// test function for health, strength, agility
test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
      );
});

// NOTES on .test files and running test
// When you run npm run test, it will run all files within the __tests__ directory and any other .test files throughout the project.
//  If you only want to run a particular group of related tests (known as a test suite), you can modify the npm run command as shown here:
// npm run test {name of .test file}
