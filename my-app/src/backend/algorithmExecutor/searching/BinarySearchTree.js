import { generateRandomBST, printBST } from "../helper.js";

class BinarySearchTree {
  #root; // the root node of the BST

  constructor(root) {
    this.#root = root;
  }

  /**
   * Run binary search tree
   * @param {Integer} key value to be searched
   * @returns {Boolean} true if found otherwise false
   */
  run(key) {
    function searchBST(node, key) {
      if (node === null) return false;
      else {
        if (node.data > key) return searchBST(node.left, key);
        else if (node.data < key) return searchBST(node.right, key);
        else return true;
      }
    }

    return searchBST(this.#root, key);
  }
}

const root = generateRandomBST();
const test = new BinarySearchTree(root);
printBST(root);
console.log(test.run(10));
