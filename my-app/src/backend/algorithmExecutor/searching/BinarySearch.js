import { createAlgorithmState } from "../../state/searching/BinarySearchState.js";

class BinarySearch {
  #arr = [];
  #states = [];

  constructor() {}

  /**
   * Run binary search on #arr
   * @param {Integer} key value to be searched
   * @returns {Integer} index of the searched value or -1 if not found
   */
  run(key) {
    if (isNaN(key)) return -1;

    function binarySearch(arr, key, L, R) {
      if (R < L) {
        this._updateStates(NaN, NaN, [], 4);
        return -1;
      }

      const middle = Math.floor((L + R) / 2);
      this._updateStates(middle, NaN, [L, R], 0);
      if (key < arr[middle]) {
        this._updateStates(NaN, NaN, [L, middle - 1], 1);
        return binarySearch.call(this, arr, key, L, middle - 1);
      } else if (key > arr[middle]) {
        this._updateStates(NaN, NaN, [middle + 1, R], 2);
        return binarySearch.call(this, arr, key, middle + 1, R);
      } else {
        this._updateStates(NaN, middle, [], 3);
        return middle;
      }
    }

    return binarySearch.call(this, this.#arr, key, 0, this.#arr.length - 1);
  }

  // reset and then set arr
  set arr(arr) {
    this.#arr = [...arr];
    this.#states = [];
    this._updateStates(NaN, NaN, [], NaN);
  }

  get arr() {
    return this.#arr;
  }

  get states() {
    return this.#states;
  }

  /**
   *
   * @returns {Integer} max value of the array
   */
  maxValue() {
    let max = -1; // always less than the first element
    this.#arr.forEach(e => {
      if (max < e) max = e;
    });
    return max;
  }

  /**
   * @returns {Array of String} algorithm pseudo code array
   */
  pseudoCode() {
    return [
      "invoke binarySearch\n\tselect the middle element M",
      "\tif key < M binary search left",
      "\telse if key > M binary search right",
      "\telse key found return index of M",
      "key not found return -1",
    ];
  }

  /**
   * Update state to states
   * @param {Integer} checking the current checking element
   * @param {Integer} found the index of found key
   * @param {Array of Integer} range the current checking array's range, size of 2
   * @param {Integer} step the index of current executed pseudo-code step
   */
  _updateStates(checking, found, range, step) {
    this.#states.push(createAlgorithmState(checking, found, range, step));
  }
}

const binarySearch = new BinarySearch();
export default binarySearch;
