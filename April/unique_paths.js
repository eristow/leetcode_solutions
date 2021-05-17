// Recursion helper
const uniqueRecurse = (results, i, j, m, n) => {
  // If cached
  if (results[i][j] !== -1) {
    return results[i][j];
  }

  let val = -1;

  // If at goal, return 1. Else if at boundary, stop going that way.
  if (i === m - 1 && j === n - 1) {
    val = 1;
  } else if (i === m - 1) {
    val = uniqueRecurse(results, i, j + 1, m, n);
  } else if (j === n - 1) {
    val = uniqueRecurse(results, i + 1, j, m, n);
  } else {
    val =
      uniqueRecurse(results, i + 1, j, m, n) +
      uniqueRecurse(results, i, j + 1, m, n);
  }

  // Add new value to results
  results[i][j] = val;

  return val;
};

// My recursion approach
const uniquePathsRecursion = (m, n) => {
  const results = new Array(m).fill([]).map((x) => Array(n).fill(-1));

  const numPaths = uniqueRecurse(results, 0, 0, m, n);

  return numPaths;
};

// My DP approach
const uniquePathsDP = (m, n) => {
  const results = new Array(m).fill([]).map((x) => new Array(n));

  // Fill 1st row, col with 1
  for (let i = 0; i < m; i++) {
    results[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    results[0][j] = 1;
  }

  // Fill rest of results array
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      results[i][j] = results[i - 1][j] + results[i][j - 1];
    }
  }

  return results[m - 1][n - 1];
};

console.log(uniquePathsRecursion(3, 7));

console.log(uniquePathsDP(3, 7));

// DP approach by Tech Dose on YT
const uniquePathsTechDoseDP = (m, n) => {
  const results = [...Array(m)].map((x) => Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        results[i][j] = 1;
      } else {
        results[i][j] = results[i - 1][j] + results[i][j - 1];
      }
    }
  }

  return results[m - 1][n - 1];
};

console.log(uniquePathsTechDoseDP(3, 7));
