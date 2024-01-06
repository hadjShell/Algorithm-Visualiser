import Node from "./algorithmExecutor/searching/Node.js";

/**
 * Generate a random size array by default with random integer values
 * Array length: [10, 15]
 * Item value: [0, 100]
 * @param {Integer} size of generated array
 * @returns {Array}
 */
function generateRandomArray(size = randomInteger(10, 15)) {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = randomInteger(0, 100);
  }
  return arr;
}
function generateAscendingArray() {
  return generateRandomArray().sort((a, b) => a - b);
}
function generateDescendingArray() {
  return generateRandomArray().sort((a, b) => b - a);
}

export function generateArray(action = "DEFAULT") {
  switch (action) {
    case "ASCENDING":
      return generateAscendingArray();
    case "DESCENDING":
      return generateDescendingArray();
    case "RANDOM":
    default:
      return generateRandomArray();
  }
}

/**
 * Generate a random binary search tree
 * @returns {Node} the root node of the BST
 */
export function generateRandomBST() {
  const arr = generateRandomArray();
  // 101 will always greater than the value in the arr
  const fakeRoot = new Node(100);

  arr.forEach(e => {
    let cur = fakeRoot;
    let prev = cur;
    let point = -1; // to left: 0 or to right: 1
    let row = 0,
      col = 0;
    const node = new Node(e);

    while (cur) {
      prev = cur;
      if (node.data < cur.data) {
        cur = cur.left;
        point = 0;
        row++;
        col = col * 2;
      } else if (node.data > cur.data) {
        cur = cur.right;
        point = 1;
        row++;
        col = col * 2 + 1;
      } else {
        point = -1;
        cur = null;
      }
    }

    node.row = row - 1;
    node.col = col;

    switch (point) {
      case 0: {
        prev.left = node;
        break;
      }
      case 1: {
        prev.right = node;
        break;
      }
      default:
        break;
    }
  });

  return fakeRoot.left;
}

/**
 * Generate a random integer within [start, end]
 * @param {Integer} start
 * @param {Integer} end
 * @returns {Integer}
 */
function randomInteger(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
