import Node from "./algorithmExecutor/searching/Node.js";

/**
 * Generate a random size array by default with random integer values
 * Array length: [10, 20]
 * Item value: [0, 100]
 * @param {Integer} size of generated array
 * @returns {Array}
 */
export function generateRandomArray(size = randomInteger(10, 15)) {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = randomInteger(0, 100);
  }
  return arr;
}

export function generateRandomSortedArray() {
  return generateRandomArray().sort((a, b) => a - b);
}

/**
 * Generate a random binary search tree
 * @returns {Node} the root node of the BST
 */
export function generateRandomBST() {
  const arr = generateRandomArray();
  // -1 will always less than the value in the arr
  const fakeRoot = new Node(-1);

  arr.forEach(e => {
    let cur = fakeRoot;
    let prev = cur;
    let point = -1; // to left: 0 or to right: 1
    const node = new Node(e);

    while (cur) {
      prev = cur;
      if (node.data < cur.data) {
        cur = cur.left;
        point = 0;
      } else if (node.data > cur.data) {
        cur = cur.right;
        point = 1;
      } else {
        point = -1;
        cur = null;
      }
    }

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

  return fakeRoot.right;
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

/**
 * Print out BST in order
 * @param {Node} root root node of BST
 */
export function printBST(root) {
  const arr = [];
  function traversal(node) {
    if (node) {
      traversal(node.left);
      arr.push(node.data);
      traversal(node.right);
    }
  }

  traversal(root);
  console.log(arr.join(" -> "));
}
