import { generateRandomArray } from "../helper.js";

class QuickSort {
  #arr = [];

  constructor(arr) {
    this.#arr = [...arr];
  }

  /**
   * Run quick sort on the copy of #arr
   * @returns {Array}
   */
  run() {
    const sortedArr = [...this.#arr];

    function quickSort(arr, L, R) {
      if (R > L) {
        const pivot = partition(arr, L, R);
        quickSort(arr, L, pivot - 1);
        quickSort(arr, pivot + 1, R);
      }
    }

    function partition(arr, L, R) {
      const pivot = arr[R];
      let pL = L,
        pR = R;

      while (pL < pR) {
        while (arr[pL] < pivot) pL++;
        while (arr[pR] >= pivot && pR > L) pR--;
        if (pL < pR) [arr[pL], arr[pR]] = [arr[pR], arr[pL]];
      }
      [arr[pL], arr[R]] = [arr[R], arr[pL]];

      return pL;
    }

    quickSort(sortedArr, 0, sortedArr.length - 1);
    return sortedArr;
  }
}

const arr = generateRandomArray();
const test = new QuickSort(arr);
console.log(arr);
console.log(test.run());
