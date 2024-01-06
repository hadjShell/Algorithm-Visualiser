import { generateRandomBST } from "../../helper.js";
import binarySearchTree from "../../algorithmExecutor/searching/BinarySearchTree.js";

/**
 * Create binary search algorithm execution state
 * @param {Array of Integer} checking the current checking node's coordinate
 * @param {Array of Integer} found the found node's coordinate
 * @param {Integer} going which side, -1: left, 1: right
 * @param {Integer} step the index of current executed pseudo-code step
 * @returns
 */
export function createAlgorithmState(checking, found, going, step) {
  return {
    checking: [...checking],
    found: [...found],
    going,
    step,
  };
}

/**
 * Create binary search tree animation state
 * API exposed to the front end
 * @param {Integer} key value to be searched
 * @param {Boolean} isNew generate new array or not
 * @returns animation state
 */
export function createAnimationState(key = NaN, isNew = true) {
  if (isNew) {
    const root = generateRandomBST();
    binarySearchTree.root = root;
  } else {
    binarySearchTree.reset();
  }

  binarySearchTree.run(key);
  const { tree, level } = traversalBST(binarySearchTree.root);

  return {
    originalTree: [...tree],
    level,
    key: tree.map(() => crypto.randomUUID()),
    pseudoCode: [...binarySearchTree.pseudoCode()],
    states: [...binarySearchTree.states],
  };
}

/**
 * Traversal BST in order and pack metadata
 * @param {Node} root root node of BST
 */
function traversalBST(root) {
  const tree = [];
  let level = -1;
  function traversal(node) {
    if (node) {
      traversal(node.left);
      if (level < node.row) level = node.row;
      tree.push({
        data: node.data,
        row: node.row,
        col: node.col,
        haveLeft: node.left !== null,
        haveRight: node.right !== null,
      });
      traversal(node.right);
    }
  }

  traversal(root);
  return { tree, level: level + 1 };
}
