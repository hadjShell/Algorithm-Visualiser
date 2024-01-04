import { generateArray } from "../../helper.js";
import binarySearch from "../../algorithmExecutor/searching/BinarySearch.js";

/**
 * Create binary search algorithm execution state
 * @param {Integer} checking the current checking element
 * @param {Integer} found the index of found key
 * @param {Array of Integer} range the current checking array's range, size of 2
 * @param {Integer} step the index of current executed pseudo-code step
 * @returns
 */
export function createAlgorithmState(checking, found, range, step) {
  return {
    checking,
    found,
    range: [...range],
    step,
  };
}

/**
 * Create selection sort animation state
 * API exposed to the front end
 * @param {Integer} key value to be searched
 * @param {Boolean} isNew generate new array or not
 * @returns animation state
 */
export function createAnimationState(key = NaN, isNew = true) {
  if (isNew) {
    const arr = generateArray("ASCENDING");
    binarySearch.arr = [...arr];
  } else {
    binarySearch.arr = [...binarySearch.arr];
  }

  binarySearch.run(key);

  return {
    originalArray: [...binarySearch.arr],
    key: binarySearch.arr.map(() => crypto.randomUUID()),
    maxValue: binarySearch.maxValue(),
    pseudoCode: [...binarySearch.pseudoCode()],
    states: [...binarySearch.states],
  };
}
