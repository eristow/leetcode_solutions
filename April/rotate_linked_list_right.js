class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

const rotateRight = (list, k) => {
  if (list.head === null) {
    return null;
  }
  if (k === 0) {
    return list;
  }

  // get length of list
  let length = 0;
  let lengthNode = list.head;

  while (lengthNode !== null) {
    lengthNode = lengthNode.next;
    length++;
  }

  // calculate num spaces to move based off of list length and k
  let rotations = length - (k % length);

  if (rotations % length === 0) {
    return list;
  }

  // go to start of rotate
  let currentNode = list.head;
  for (let i = 1; i <= rotations; i++) {
    currentNode = currentNode.next;
  }

  // pop nodes onto new list
  let newList = new LinkedList(new Node(currentNode.data));
  let currentNewNode = newList.head;
  if (currentNode.next !== null) {
    currentNode = currentNode.next;
  } else {
    currentNode = list.head;
  }

  for (let i = 0; i < length - 1; i++) {
    if (currentNode.next === null) {
      currentNewNode.next = new Node(currentNode.data);
      currentNewNode = currentNewNode.next;
      currentNode = list.head;
    } else {
      currentNewNode.next = new Node(currentNode.data);
      currentNewNode = currentNewNode.next;
      currentNode = currentNode.next;
    }
  }

  currentNewNode.next = null;

  return newList;
};

const printList = (node) => {
  let currentNode = node;
  let result = '';

  while (currentNode !== null) {
    result += `${currentNode.data}->`;
    currentNode = currentNode.next;
  }

  console.log(`LIST: ${result}`);
};

const runner = (arg) => {
  switch (arg) {
    case 1:
      // 7 -> 7 -> 3 -> 5
      const node1_4 = new Node(5, null);
      const node1_3 = new Node(3, node1_4);
      const node1_2 = new Node(7, node1_3);
      const head1 = new Node(7, node1_2);
      const list1 = new LinkedList(head1);
      const k1 = 1;

      const newList1 = rotateRight(list1, k1);

      printList(newList1.head);
      break;
    case 2:
      // 1 -> 2 -> 3 -> 4 -> 5
      const node2_5 = new Node(5, null);
      const node2_4 = new Node(4, node2_5);
      const node2_3 = new Node(3, node2_4);
      const node2_2 = new Node(2, node2_3);
      const head2 = new Node(1, node2_2);
      const list2 = new LinkedList(head2);
      const k2 = 5;

      const newList2 = rotateRight(list2, k2);

      printList(newList2.head);
      break;
  }
};

runner(2);
