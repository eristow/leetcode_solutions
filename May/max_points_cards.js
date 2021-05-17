/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

const maxScore = (cardPoints, k) => {
  console.log();
  const lSum = Array(k + 1).fill(0);
  const rSum = Array(k + 1).fill(0);
  let lPtr = 0;
  let rPtr = cardPoints.length - 1;

  // fill lSum, rSum
  for (let i = 1; i <= k; i++) {
    lSum[i] = lSum[i - 1] + cardPoints[lPtr];
    lPtr++;

    rSum[i] = rSum[i - 1] + cardPoints[rPtr];
    rPtr--;
  }

  const scores = Array(k + 1).fill(0);

  // fill scores
  lPtr = 0;
  rPtr = k;
  for (let i = 0; i <= k; i++) {
    scores[i] = lSum[lPtr] + rSum[rPtr];
    lPtr++;
    rPtr--;
  }

  console.log(`lSum: ${lSum} | rSum: ${rSum} | scores: ${scores}`);

  return scores.reduce((a, b) => Math.max(a, b));
};

const maxScoreRecurse = function (cardPoints, k, score = 0) {
  if (k === 0) {
    return score;
  }

  const lScore = cardPoints[0];
  const rScore = cardPoints[cardPoints.length - 1];
  console.log(`lScore: ${lScore} | rScore: ${rScore}`);

  if (lScore > rScore) {
    const newCards = cardPoints.slice(1, cardPoints.length);
    console.log(`take left: ${newCards}`);
    score = maxScore(newCards, k - 1, score + lScore);
  } else if (rScore > lScore) {
    const newCards = cardPoints.slice(0, cardPoints.length - 1);
    console.log(`take right: ${newCards}`);
    score = maxScore(newCards, k - 1, score + rScore);
  } else {
    console.log('equals');
    let useRightCard = true;
    let lPtr = 1;
    let rPtr = cardPoints.length - 2;
    for (let i = k; i > 0; i--) {
      if (rPtr < 0 || lPtr >= cardPoints.length) {
        break;
      }

      if (cardPoints[rPtr] > cardPoints[lPtr]) {
        break;
      } else if (cardPoints[lPtr] > cardPoints[rPtr]) {
        useRightCard = false;
        break;
      }
    }
    console.log(`useRightCard: ${useRightCard}`);
    if (!useRightCard) {
      const newCards = cardPoints.slice(1, cardPoints.length);
      score = maxScore(newCards, k - 1, score + lScore);
    } else {
      const newCards = cardPoints.slice(0, cardPoints.length - 1);
      score = maxScore(newCards, k - 1, score + rScore);
    }
  }

  return score;
};

const arr1 = [1, 2, 3, 4, 5, 6, 1];
const k1 = 3;
const arr2 = [2, 2, 2];
const k2 = 2;
const arr3 = [9, 7, 7, 9, 7, 7, 9];
const k3 = 7;
const arr4 = [1, 1000, 1];
const k4 = 1;
const arr5 = [1, 79, 80, 1, 1, 1, 200, 1];
const k5 = 3;
const arr6 = [11, 49, 100, 20, 86, 29, 72];
const k6 = 4;

console.log(maxScore(arr1, k1));
console.log(maxScore(arr2, k2));
console.log(maxScore(arr3, k3));
console.log(maxScore(arr4, k4));
console.log(maxScore(arr5, k5));
console.log(maxScore(arr6, k6));
