/**
 * @param {number[][]} matrix
 */
var NumMatrixRow = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return;
  }

  this.matrix = matrix;
  this.m = this.matrix.length;
  this.n = this.matrix[0].length;
  this.cache = Array(this.m)
    .fill([])
    .map((_) => Array(this.n + 1).fill(0));

  // Construct row cache
  for (let i = 0; i < this.m; i++) {
    for (let j = 0; j < this.n; j++) {
      this.cache[i][j + 1] = this.cache[i][j] + matrix[i][j];
    }
  }
  // console.log(`cache: ${this.cache}`);
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrixRow.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;

  // Calcualte sum from row cache
  for (let i = row1; i <= row2; i++) {
    sum += this.cache[i][col2 + 1] - this.cache[i][col1];
  }

  // console.log(`sum: ${sum}`);
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const NumMatrix = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return;
  }

  this.matrix = matrix;
  this.m = this.matrix.length;
  this.n = this.matrix[0].length;
  this.cache = Array(this.m + 1)
    .fill([])
    .map((_) => Array(this.n + 1).fill(0));

  // Construct cache
  for (let i = 1; i <= this.m; i++) {
    for (let j = 1; j <= this.n; j++) {
      this.cache[i][j] =
        this.cache[i - 1][j] +
        this.cache[i][j - 1] -
        this.cache[i - 1][j - 1] +
        this.matrix[i - 1][j - 1];
    }
  }

  console.log(this.cache);
};

NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  // Adjust coords to work with cache
  const adjRow1 = row1 + 1;
  const adjCol1 = col1 + 1;
  const adjRow2 = row2 + 1;
  const adjCol2 = col2 + 1;

  return (
    this.cache[adjRow2][adjCol2] -
    this.cache[adjRow1 - 1][adjCol2] -
    this.cache[adjRow2][adjCol1 - 1] +
    this.cache[adjRow1 - 1][adjCol1 - 1]
  );
};

const matrix1 = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
];
// Answers: 8, 11, 12
const sumRegion1_1 = [2, 1, 4, 3];
const sumRegion1_2 = [1, 1, 2, 2];
const sumRegion1_3 = [1, 2, 2, 4];
const numMatrix1 = new NumMatrix(matrix1);

console.log(numMatrix1.sumRegion(2, 1, 4, 3));
console.log(numMatrix1.sumRegion(1, 1, 2, 2));
console.log(numMatrix1.sumRegion(1, 2, 2, 4));
