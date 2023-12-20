import selectionSort from "../../algorithmExecutor/sorting/SelectionSort";

/**
 * Create selection sort algorithm execution state
 * @param {Integer} checking index of current checking element
 * @param {Integer} currentMin index of current min element
 * @param {Array of Integer} sorted array of sorted indexs
 * @param {Array of Integer} swapping indexs of current swapping elements, size of 2
 * @param {Integer} step index of current executed pseudo-code step
 * @returns {Object} algorithm execution state
 */
export function createAlgorithmState(
  checking = NaN,
  currentMin = NaN,
  sorted = [],
  swapping = [],
  step = NaN
) {
  return {
    checking,
    currentMin,
    sorted: [...sorted],
    swapping: [...swapping],
    step,
  };
}

/**
 * Create selection sort animation state
 * API exposed to the front end
 * @param {Array of Integer} originalArray
 * @returns animation state
 */
export function createAnimationState(originalArray) {
  selectionSort.arr = [...originalArray];
  selectionSort.run();

  return {
    originalArray,
    maxValue: selectionSort.maxValue,
    pseudoCode: [...selectionSort.pseudoCode()],
    states: [...selectionSort.states],
  };
}
