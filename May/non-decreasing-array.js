const checkPossibility = (nums) => {
  if (nums.length === 1) {
    return true;
  }

  let countRuleBroken = 0;
  const numsCopy = [...nums];

  for (let i = 1; i < numsCopy.length; i++) {
    if (numsCopy[i] < numsCopy[i - 1]) {
      console.log(`in if: ${numsCopy[i]} < ${numsCopy[i - 1]}`);
      if (i === 1 || numsCopy[i] >= numsCopy[i - 2]) {
        console.log('first if');
        numsCopy[i - 1] = numsCopy[i];
        countRuleBroken++;
      } else {
        console.log('second if');
        numsCopy[i] = numsCopy[i - 1];
        countRuleBroken++;
      }
    }

    if (countRuleBroken >= 2) {
      console.log(numsCopy);
      return false;
    }
  }

  console.log(numsCopy);
  return countRuleBroken <= 1;
};

console.log(checkPossibility([4, 2, 3]));
