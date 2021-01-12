const Dijisktra = require("./dijikstra");

const getMaxSeeds = (gameBoard) => {
  const graph = getGraphFromMatrix(gameBoard);
  const [n, m] = [gameBoard.length, gameBoard[0].length];

  const dijikstra = new Dijisktra(graph);

  const start = "0";
  const finish = (n * m - 1).toString();

  const path = dijikstra.findShortestPath(start, finish);

  let result = 0;
  for (let i = 0; i < path.length; i++) {
    result += gameBoard[Math.floor(path[i] / n)][path[i] % n];
  }

  return result;
};

//Transforms a matrix to a graph
const getGraphFromMatrix = (gameBoard) => {
  const n = gameBoard.length; //total rows
  const m = gameBoard[0].length; // total columns

  const graph = {};

  for (let i = 0; i < n * m; i++) {
    graph[i.toString()] = {};

    if ((i % m) + 1 < m)
      graph[i.toString()][(i + 1).toString()] = -gameBoard[Math.floor(i / n)][
        (i % m) + 1
      ];
      
    if (Math.floor(i / n) + 1 < n)
      graph[i.toString()][(i + m).toString()] = -gameBoard[
        Math.floor(i / n) + 1
      ][i % m];
  }

  return graph;
};

module.exports = getMaxSeeds;
