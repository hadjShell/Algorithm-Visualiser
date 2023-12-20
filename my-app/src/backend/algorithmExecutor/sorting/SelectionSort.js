import { createAlgorithmState } from "../../state/sorting/SelectionSortState.js";

class SelectionSort {
  #arr = [];
  #sorted = [];
  #states = [];

  constructor() {
    this._updateStates(createAlgorithmState());
  }

  /**
   * Run selection sort and produce states
   * @returns {Array} sorted array
   */
  run() {
    const _ = undefined;
    const sortedArr = [...this.#arr];

    let i, j, min;
    for (i = 0; i < sortedArr.length; i++) {
      min = i;
      this._updateStates(createAlgorithmState(_, min, this.#sorted, _, 0));
      for (j = i + 1; j < sortedArr.length; j++) {
        this._updateStates(createAlgorithmState(j, min, this.#sorted, _, 1));
        if (sortedArr[j] < sortedArr[min]) {
          min = j;
          this._updateStates(createAlgorithmState(j, min, this.#sorted, _, 2));
        }
      }
      [sortedArr[i], sortedArr[min]] = [sortedArr[min], sortedArr[i]];
      this._updateStates(createAlgorithmState(_, _, this.#sorted, [min, i], 3));
      this.#sorted.push(i);
      this._updateStates(createAlgorithmState(_, _, this.#sorted, _, 3));
    }

    return sortedArr;
  }

  set arr(arr) {
    this.#arr = [...arr];
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
      "loop array\n\tset the first unsorted element as the minimum value",
      "\tfor each of the unsorted elements",
      "\t\tif element < currentMin\n\t\t\tset element as new currentMin",
      "\tswap currentMin with first unsorted position",
    ];
  }

  /**
   * Update state to states
   * @param {Object} state algorithm execution state
   */
  _updateStates(state) {
    this.#states.push(state);
  }
}

const selectionSort = new SelectionSort();
export default selectionSort;
