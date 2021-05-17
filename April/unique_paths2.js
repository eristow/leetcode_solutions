const uniquePathsWithObstacles = (obstacleGrid) => {
  // Case where start has obstacle
  if (obstacleGrid[0][0]) {
    return 0;
  }

  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const results = new Array(m).fill([]).map((x) => new Array(n).fill(0));

  // Init start with 1 unique path
  results[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // If at start, skip
      if (i === 0 && j === 0) {
        continue;
      }
      // If obstacle found, 0 unique paths
      if (obstacleGrid[i][j] === 1) {
        results[i][j] = 0;
      }
      // If first row, set equal to previous cell in row
      else if (i === 0) {
        results[i][j] = results[i][j - 1];
      }
      // If first col, set equal to previous cell in col
      else if (j === 0) {
        results[i][j] = results[i - 1][j];
      }
      // Default case. Sum of prev cells up and left
      else {
        results[i][j] = results[i - 1][j] + results[i][j - 1];
      }
    }
  }

  return results[m - 1][n - 1];
};

const case1 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];
const case2 = [
  [0, 1],
  [0, 0],
];
const case3 = [
  [0, 0],
  [1, 1],
  [0, 0],
];

console.log(uniquePathsWithObstacles(case3));
