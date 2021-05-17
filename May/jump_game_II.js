const jump = function (nums) {
  let count = 0;
  let left = 0;
  let right = 0;

  // Go through nums in windows of maxJumps
  while (right < nums.length - 1) {
    let maxJump = -1;

    // Find maxJump distance in current window
    for (let i = left; i <= right; i++) {
      maxJump = Math.max(nums[i] + i, maxJump);
    }

    // Update window
    left = left + 1;
    right = maxJump;
    count++;
  }

  return count;
};

console.log(jump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]));
