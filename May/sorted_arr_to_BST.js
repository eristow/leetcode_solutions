function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const height = (node) => {
  if (node === null) {
    return 0;
  } else {
    let lheight = height(node.left);
    let rheight = height(node.right);

    if (lheight > rheight) {
      return lheight + 1;
    } else {
      return rheight + 1;
    }
  }
};

const printLevelOrder = (root) => {
  let h = height(root);
  const range = Array.from({ length: h }, (_, i) => i + 1);
  for (let i of range) {
    printGivenLevel(root, i);
    console.log('------');
  }
};

const printGivenLevel = (root, level) => {
  if (root === null) {
    return;
  }
  if (level === 1) {
    console.log(root.val);
  } else if (level > 1) {
    printGivenLevel(root.left, level - 1);
    printGivenLevel(root.right, level - 1);
  }
};

const buildTree = (nums, left, right) => {
  if (left > right) {
    return null;
  }

  let mid = Math.floor(left + (right - left) / 2);
  let node = new TreeNode(nums[mid]);
  node.left = buildTree(nums, left, mid - 1);
  node.right = buildTree(nums, mid + 1, right);

  return node;
};

const sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  return buildTree(nums, 0, nums.length - 1);
};

const root = sortedArrayToBST([-10, -5, -3, 0, 5, 8, 9]);

console.log(printLevelOrder(root));
