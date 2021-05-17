/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = Array(m + 1)
    .fill([])
    .map((_) => Array(n + 1).fill(0));

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  console.log(dp);
  console.log(`${m + n} | ${2 * dp[m][n]} | ${m + n - 2 * dp[m][n]}`);

  return m + n - 2 * dp[m][n];
};

console.log(minDistance('sea', 'eat'));
console.log(minDistance('leetcode', 'etco'));
