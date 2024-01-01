import { createAlgorithmState } from "../../state/sorting/SelectionSortState.js";

class SelectionSort {
  #arr = [];
  #sorted = [];
  #currentIndex = [];
  #states = [];

  constructor() {}

  /**
   * Run selection sort and produce states
   * @returns {Array} sorted array
   */
  run() {
    const sortedArr = [...this.#arr];

    let i, j, min;
    for (i = 0; i < sortedArr.length; i++) {
      min = i;
      this._updateStates(NaN, min, [], 0);
      for (j = i + 1; j < sortedArr.length; j++) {
        this._updateStates(j, min, [], 1);
        if (sortedArr[j] < sortedArr[min]) {
          min = j;
          this._updateStates(min, min, [], 2);
        }
      }
      [sortedArr[i], sortedArr[min]] = [sortedArr[min], sortedArr[i]];
      // Build currentIndex
      const curI = this.#currentIndex.findIndex(e => e === i);
      const curMin = this.#currentIndex.findIndex(e => e === min);
      [this.#currentIndex[curI], this.#currentIndex[curMin]] = [
        this.#currentIndex[curMin],
        this.#currentIndex[curI],
      ];
      this._updateStates(NaN, NaN, [min, i], 3);
      this.#sorted.push(i);
      this._updateStates(NaN, NaN, [], 3);
    }

    return sortedArr;
  }

  // reset and then set arr
  set arr(arr) {
    this.#arr = [...arr];
    this.#sorted = [];
    this.#currentIndex = this.#arr.map((_, i) => i);
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
      "loop array\n\tset the first unsorted element as the minimum value",
      "\tfor each of the unsorted elements",
      "\t\tif element < currentMin\n\t\t\tset element as new currentMin",
      "\tswap currentMin with first unsorted position",
    ];
  }

  /**
   * Update state to states
   * @param {Integer} checking index of current checking element
   * @param {Integer} currentMin index of current min element
   * @param {Array of Integer} swapping indexs of current swapping elements, size of 2
   * @param {Integer} step index of current executed pseudo-code step
   */
  _updateStates(checking, currentMin, swapping, step) {
    this.#states.push(
      createAlgorithmState(
        checking,
        currentMin,
        swapping,
        [...this.#sorted],
        [...this.#currentIndex],
        step
      )
    );
  }
}

const selectionSort = new SelectionSort();
export default selectionSort;
