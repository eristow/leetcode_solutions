const canJump = function (nums) {
  let lastValidIndex = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= lastValidIndex) {
      lastValidIndex = i;
    }
  }

  return lastValidIndex === 0;
};

const canJumpReachable = function (nums) {
  let reachable = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const testReach = nums[i] + i;

    if (i > reachable) {
      return false;
    }

    reachable = Math.max(testReach, reachable);
  }

  return reachable >= nums.length - 1;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJumpReachable([2, 3, 1, 1, 4]));

/* 
[2,3,1,1,4]
[0,2,3]
[1,0,1,0]
[4,2,0,0,1,1,4,4,4,0,4,0]
[2,5,0,0]
[1,1,2,2,0,1,1]
[5,9,3,2,1,0,2,3,3,1,0,0]
*/
