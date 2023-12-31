import insertionSort from "../../algorithmExecutor/sorting/InsertionSort.js";
import { generateArray } from "../../helper.js";

/**
 *
 * @param {Integer} checking index of current checking element
 * @param {Integer} extracting index of current extracting element
 * @param {Array of Integer} swapping indexs of current swapping elements, size of 2
 * @param {Array of Integer} sorted array of sorted indexs
 * @param {Array of Integer} currentIndex current index of the original element
 * @param {Integer} step index of current executed pseudo-code step
 * @returns
 */
export function createAlgorithmState(
  checking,
  extracting,
  swapping,
  sorted,
  currentIndex,
  step
) {
  return {
    checking,
    extracting,
    swapping: [...swapping],
    sorted: [...sorted],
    currentIndex: [...currentIndex],
    step,
  };
}

/**
 * Create insertion sort animation state
 * API exposed to the front end
 * @param {String} action
 * @returns animation state
 */
export function createAnimationState(action = "DEFAULT") {
  const arr = generateArray(action);

  insertionSort.arr = [...arr];
  insertionSort.run();

  return {
    originalArray: [...arr],
    key: arr.map(() => crypto.randomUUID()),
    maxValue: insertionSort.maxValue(),
    pseudoCode: [...insertionSort.pseudoCode()],
    states: [...insertionSort.states],
  };
}
