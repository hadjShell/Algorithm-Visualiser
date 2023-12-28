import selectionSort from "../../algorithmExecutor/sorting/SelectionSort.js";
import {
  generateRandomArray,
  generateAscendingArray,
  generateDescendingArray,
} from "../../helper.js";

/**
 * Create selection sort algorithm execution state
 * @param {Integer} checking index of current checking element
 * @param {Integer} currentMin index of current min element
 * @param {Array of Integer} sorted array of sorted indexs
 * @param {Array of Integer} swapping indexs of current swapping elements, size of 2
 * @param {Array of Integer} currentIndex current index of the original element
 * @param {Integer} step index of current executed pseudo-code step
 * @returns {Object} algorithm execution state
 */
export function createAlgorithmState(
  checking,
  currentMin,
  swapping,
  sorted,
  currentIndex,
  step
) {
  return {
    checking,
    currentMin,
    swapping: [...swapping],
    sorted: [...sorted],
    currentIndex: [...currentIndex],
    step,
  };
}

/**
 * Create selection sort animation state
 * API exposed to the front end
 * @param {String} action
 * @returns animation state
 */
export function createAnimationState(action = "DEFAULT") {
  let arr;
  switch (action) {
    case "ASCENDING":
      arr = generateAscendingArray();
      break;
    case "DESCENDING":
      arr = generateDescendingArray();
      break;
    case "RANDOM":
    default:
      arr = generateRandomArray();
  }

  selectionSort.arr = [...arr];
  selectionSort.run();

  return {
    originalArray: [...arr],
    key: arr.map(() => crypto.randomUUID()),
    maxValue: selectionSort.maxValue(),
    pseudoCode: [...selectionSort.pseudoCode()],
    states: [...selectionSort.states],
  };
}
