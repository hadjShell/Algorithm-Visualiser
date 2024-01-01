import { createAlgorithmState } from "../../state/sorting/InsertionSortState.js";

class InsertionSort {
  #arr = [];
  #sorted = [];
  #currentIndex = [];
  #states = [];

  constructor() {}

  /**
   * Run insertion sort on the copy of #arr
   * @returns {Array}
   */
  run() {
    const sortedArr = [...this.#arr];

    let i, j, key;
    this.#sorted.push(0);
    this._updateStates(NaN, NaN, [], 0);
    for (i = 1; i < sortedArr.length; i++) {
      key = sortedArr[i];
      this._updateStates(NaN, i, [], 1);
      j = i - 1;
      while (j >= 0 && key < sortedArr[j]) {
        this._updateStates(j, j + 1, [], 2);
        sortedArr[j + 1] = sortedArr[j];
        //build currentIndex
        const curJ = this.#currentIndex.findIndex(e => e === j);
        const curJNext = this.#currentIndex.findIndex(e => e === j + 1);
        [this.#currentIndex[curJ], this.#currentIndex[curJNext]] = [
          this.#currentIndex[curJNext],
          this.#currentIndex[curJ],
        ];
        this._updateStates(j, j, [j, j + 1], 3);
        j--;
      }
      sortedArr[j + 1] = key;
      this.#sorted.push(i);
      this._updateStates(NaN, NaN, [], 4);
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
      "mark the first element as sorted",
      "for each unsorted element X\n\t'extract' element X",
      "\tloop sorted elements to index 0",
      "\t\tif current element > X\n\t\t\tmove current element to the right by 1",
      "\t\tbreak loop and insert X here",
    ];
  }

  /**
   * Update state to states
   * @param {Integer} checking index of current checking element
   * @param {Integer} extracting index of current extracting element
   * @param {Array of Integer} swapping indexs of current swapping elements, size of 2
   * @param {Integer} step index of current executed pseudo-code step
   */
  _updateStates(checking, extracting, swapping, step) {
    this.#states.push(
      createAlgorithmState(
        checking,
        extracting,
        swapping,
        [...this.#sorted],
        [...this.#currentIndex],
        step
      )
    );
  }
}

const insertionSort = new InsertionSort();
export default insertionSort;
