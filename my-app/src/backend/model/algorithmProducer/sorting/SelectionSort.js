import { generateRandomArray } from "../helper.js";

class SelectionSort {
  #arr = [];

  constructor(arr) {
    this.#arr = [...arr];
  }

  /**
   * Run selection sort on the copy of #arr
   * @returns {Array}
   */
  run() {
    const sortedArr = [...this.#arr];
    let i, j, min;
    for (i = 0; i < sortedArr.length; i++) {
      min = i;
      for (j = i + 1; j < sortedArr.length; j++)
        if (sortedArr[j] < sortedArr[min]) min = j;
      [sortedArr[i], sortedArr[min]] = [sortedArr[min], sortedArr[i]];
    }
    return sortedArr;
  }
}

const arr = generateRandomArray();
const test = new SelectionSort(arr);
console.log(arr);
console.log(test.run());
