import { generateRandomSortedArray } from "../helper.js";

class BinarySearch {
  #arr = [];

  constructor(arr) {
    this.#arr = [...arr];
  }

  /**
   * Run binary search on #arr
   * @param {Integer} key value to be searched
   * @returns {Integer} index of the searched value or -1 if not found
   */
  run(key) {
    function binarySearch(arr, key, L, R) {
      if (R < L) return -1;

      const middle = Math.floor((L + R) / 2);
      if (key === arr[middle]) return middle;
      if (key > arr[middle]) return binarySearch(arr, key, middle + 1, R);
      else return binarySearch(arr, key, L, middle - 1);
    }

    return binarySearch(this.#arr, key, 0, this.#arr.length - 1);
  }
}

const arr = generateRandomSortedArray();
const test = new BinarySearch(arr);
console.log(arr);
console.log(test.run(10));
