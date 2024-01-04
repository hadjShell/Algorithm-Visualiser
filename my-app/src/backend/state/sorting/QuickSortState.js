import quickSort from "../../algorithmExecutor/sorting/QuickSort.js";
import { generateArray } from "../../helper.js";

/**
 *
 * @param {Array of Integer} partitionRange the range of partition, size of 2
 * @param {Integer} pivot the index of pivot
 * @param {Integer} checkingLeft the index of left pointer in the partition
 * @param {Integer} checkingRight the index of right pointer in the partition
 * @param {Array of Integer} swapping the indexes of current swapping elements, size of 2
 * @param {Array of Integer} sorted array of sorted indexs
 * @param {Array of Integer} currentIndex current index of the original element
 * @param {Integer} step the index of current executed pseudo-code step
 * @returns {Object} algorithm execution state
 */
export function createAlgorithmState(
  partitionRange,
  pivot,
  checkingLeft,
  checkingRight,
  swapping,
  sorted,
  currentIndex,
  step
) {
  return {
    partitionRange: [...partitionRange],
    pivot,
    checkingLeft,
    checkingRight,
    swapping: [...swapping],
    sorted: [...sorted],
    currentIndex: [...currentIndex],
    step,
  };
}

/**
 * Create quick sort animation state
 * API exposed to the front end
 * @param {String} action
 * @returns animation state
 */
export function createAnimationState(action = "DEFAULT") {
  const arr = generateArray(action);

  quickSort.arr = [...arr];
  quickSort.run();

  return {
    originalArray: [...arr],
    key: arr.map(() => crypto.randomUUID()),
    maxValue: quickSort.maxValue(),
    pseudoCode: [...quickSort.pseudoCode()],
    states: [...quickSort.states],
  };
}
