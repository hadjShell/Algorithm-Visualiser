import { generateRandomArray } from "../helper.js";

class InsertionSort {
  #arr = [];

  constructor(arr) {
    this.#arr = [...arr];
  }

  /**
   * Run insertion sort on the copy of #arr
   * @returns the sorted array
   */
  run() {
    const sortedArr = [...this.#arr];
    let i, j, key;
    for (i = 1; i < sortedArr.length; i++) {
      key = sortedArr[i];
      j = i - 1;
      while (j >= 0 && key < sortedArr[j]) {
        sortedArr[j + 1] = sortedArr[j];
        j--;
      }
      sortedArr[j + 1] = key;
    }
    return sortedArr;
  }
}

const arr = generateRandomArray(20);
const test = new InsertionSort(arr);
console.log(arr);
console.log(test.run());
