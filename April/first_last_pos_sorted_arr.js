const binarySearch = (arr, x) => {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let mid;

    if (l === r && arr[l] === x) {
      mid = l;
    } else {
      mid = Math.floor((l + r) / 2);
    }

    console.log(`mid: ${mid} | l: ${l} | r: ${r}`);

    if (arr[mid] === x) {
      // Check if first index
      let i = -1;
      for (i = mid; i < arr.length; i--) {
        if (arr[i - 1] !== x) {
          break;
        }
      }
      console.log(`i: ${i}`);
      return i;
    }

    if (arr[mid] < x) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};

const searchRange = (nums, target) => {
  const result = [-1, -1];
  let targetIndex = -1;

  if (nums.length === 0) {
    return result;
  }

  // binary search (when find, check to see if first instance of target)
  targetIndex = binarySearch(nums, target);

  // iterate forward until nums[i] isn't target
  if (targetIndex !== -1) {
    result[0] = targetIndex;
    for (let i = targetIndex; i < nums.length; i++) {
      if (nums[i + 1] !== target) {
        result[1] = i;
        break;
      }
    }
  }

  return result;
};

const nums1 = [5, 7, 7, 8, 8, 10];
const target1 = 8;
const nums2 = [0, 0, 1, 1, 1, 4, 5];
const target2 = 2;

console.log(searchRange(nums1, target1));
