import { createAlgorithmState } from "../../state/sorting/QuickSortState.js";

class QuickSort {
  #arr = [];
  #sorted = [];
  #currentIndex = [];
  #states = [];

  constructor() {}

  /**
   * Run quick sort on the copy of #arr
   * @returns {Array}
   */
  run() {
    const sortedArr = [...this.#arr];

    function quickSort(arr, L, R) {
      if (R > L) {
        this._updateStates([], NaN, NaN, NaN, [], 0);
        const pivot = partition.call(this, arr, L, R);
        quickSort.call(this, arr, L, pivot - 1);
        quickSort.call(this, arr, pivot + 1, R);
      } else if (R === L) {
        this._updateStates([R, R], NaN, NaN, NaN, [], 0);
        this.#sorted.push(R);
        this._updateStates([], NaN, NaN, NaN, [], 0);
      }
    }

    function partition(arr, L, R) {
      const pivot = arr[R];
      let pL = L,
        pR = R;
      this._updateStates([L, R], R, pL, pR, [], 1);

      while (pL < pR) {
        while (arr[pL] < pivot) {
          pL++;
          this._updateStates([L, R], R, pL, pR, [], 2);
        }
        while (arr[pR] >= pivot && pR > L) {
          pR--;
          this._updateStates([L, R], R, pL, pR, [], 3);
        }
        if (pL < pR) {
          [arr[pL], arr[pR]] = [arr[pR], arr[pL]];
          this._updateCurrentIndex(pL, pR);
          this._updateStates([L, R], R, pL, pR, [pL, pR], 4);
        }
      }
      [arr[pL], arr[R]] = [arr[R], arr[pL]];
      this._updateCurrentIndex(pL, R);
      this._updateStates([L, R], R, NaN, NaN, [pL, R], 5);
      this.#sorted.push(pL);
      this._updateStates([L, R], NaN, NaN, NaN, [], 5);

      return pL;
    }

    quickSort.call(this, sortedArr, 0, sortedArr.length - 1);
    return sortedArr;
  }

  // reset and then set arr
  set arr(arr) {
    this.#arr = [...arr];
    this.#sorted = [];
    this.#currentIndex = this.#arr.map((_, i) => i);
    this.#states = [];
    this._updateStates([], NaN, NaN, NaN, [], NaN);
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
      "invoke quickSort",
      "\tinvoke partition\n\t\tset last element as pivot, leftest index as pL, rightest index as pR",
      "\t\twhile pL < pR\n\t\t\tleft pointer find element larger than pivot",
      "\t\t\tright pointer find element smaller than pivot",
      "\t\t\tif pL < pR\n\t\t\t\tswap arr[pL] and arr[pR]",
      "\t\tswap arr[pL] and pivot",
    ];
  }

  /**
   *
   * @param {Array of Integer} partitionRange the range of partition, size of 2
   * @param {*} pivot the index of pivot
   * @param {*} checkingLeft the index of left pointer in the partition
   * @param {*} checkingRight the index of right pointer in the partition
   * @param {*} swapping the indexes of current swapping elements, size of 2
   * @param {*} step the index of current executed pseudo-code step
   */
  _updateStates(
    partitionRange,
    pivot,
    checkingLeft,
    checkingRight,
    swapping,
    step
  ) {
    this.#states.push(
      createAlgorithmState(
        [...partitionRange],
        pivot,
        checkingLeft,
        checkingRight,
        swapping,
        [...this.#sorted],
        [...this.#currentIndex],
        step
      )
    );
  }

  _updateCurrentIndex(index1, index2) {
    const a = this.#currentIndex.findIndex(e => e === index1);
    const b = this.#currentIndex.findIndex(e => e === index2);
    [this.#currentIndex[a], this.#currentIndex[b]] = [
      this.#currentIndex[b],
      this.#currentIndex[a],
    ];
  }
}

const quickSort = new QuickSort();
export default quickSort;

quickSort.arr = [3, 2, 5];
console.log(quickSort.run());
