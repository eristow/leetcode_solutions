const runningSum = function (nums) {
  if (nums.length === 1) {
    return nums;
  }

  const result = [];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(`sum: ${sum} | nums[i]: ${nums[i]}`);
    sum += nums[i];
    result.push(sum);
  }

  return result;
};

console.log(runningSum([1, 2, 3, 4]));
