import { createAlgorithmState } from "../../state/searching/BinarySearchTreeState.js";

class BinarySearchTree {
  #root = null; // the root node of the BST
  #states = [];

  constructor() {}

  /**
   * Run binary search tree
   * @param {Integer} key value to be searched
   * @returns {Boolean} true if found otherwise false
   */
  run(key) {
    if (isNaN(key)) return -1;

    function searchBST(node, key) {
      if (node === null) {
        this._updateStates([], [], NaN, 1);
        return false;
      } else {
        this._updateStates([node.row, node.col], [], NaN, 0);
        if (node.data > key) {
          this._updateStates([node.row, node.col], [], -1, 2);
          return searchBST.call(this, node.left, key);
        } else if (node.data < key) {
          this._updateStates([node.row, node.col], [], 1, 3);
          return searchBST.call(this, node.right, key);
        } else {
          this._updateStates([], [node.row, node.col], NaN, 4);
          return true;
        }
      }
    }

    return searchBST.call(this, this.#root, key);
  }

  // reset and then set arr
  set root(root) {
    this.#root = root;
    this.reset();
  }

  get root() {
    return this.#root;
  }

  get states() {
    return this.#states;
  }

  reset() {
    this.#states = [];
    this._updateStates([], [], NaN, NaN);
  }

  /**
   * @returns {Array of String} algorithm pseudo code array
   */
  pseudoCode() {
    return [
      "invoke binarySearchTree\n\tcheck current node N",
      "\tif N = null return false",
      "\telse\n\t\tif key < N search left",
      "\t\telse if key > N search right",
      "\t\telse key found return true",
    ];
  }

  /**
   * Update state to states
   * @param {Array of Integer} checking the current checking node's coordinate
   * @param {Array of Integer} found the found node's coordinate
   * @param {Integer} going which side, -1: left, 1: right
   * @param {Integer} step the index of current executed pseudo-code step
   */
  _updateStates(checking, found, going, step) {
    this.#states.push(createAlgorithmState(checking, found, going, step));
  }
}

const binarySearchTree = new BinarySearchTree();
export default binarySearchTree;
