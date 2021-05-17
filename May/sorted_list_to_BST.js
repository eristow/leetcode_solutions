function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

const findMiddleVal = (head) => {
  let fast = head;
  let slow = head;
  let prev = head;

  while (fast && fast.next) {
    console.log(`prev: ${prev.val} | slow: ${slow.val} | fast: ${fast.val}`);
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (prev !== null) {
    prev.next = null;
  }

  return slow;
};

var sortedListToBST = function (head) {
  if (head === null) {
    return null;
  }

  // Find middle val of list
  const mid = findMiddleVal(head);
  // console.log(`mid: ${mid.val}`);

  const root = new TreeNode(mid.val);

  // Parse sub-trees
  if (head.val === root.val) {
    // console.log(`head == root | head: ${head.val} | root: ${root.val}`);
    return root;
  }
  // console.log(`head: ${head.val} | mid.next: ${mid.next}`);
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(mid.next);

  return root;
};

const node5 = new ListNode(5, null);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
const head = new ListNode(0, node1);

const tree = sortedListToBST(head);
printLevelOrder(tree);
