const getMaxSeeds = require("./getMaxSeeds");
const assert = require("assert");

describe("testing getMaxSeeds function", () => {
  it("test 1", () => {
    const gameBoard = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 0, 9],
    ];
    const expectedResult = 25;

    assert.strictEqual(getMaxSeeds(gameBoard), expectedResult);
  });

  it("test 2", () => {
    const gameBoard = [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ];
    const expectedResult = 3;

    assert.strictEqual(getMaxSeeds(gameBoard), expectedResult);
  });

  it("test 3", () => {
    const gameBoard = [
        [0, 0, 3, 0],
        [0, 1, 0, 8],
        [11, 9, 1, 0],
        [20, 0, 0, 1],
      ];;
    const expectedResult = 32;

    assert.strictEqual(getMaxSeeds(gameBoard), expectedResult);
  });
});
