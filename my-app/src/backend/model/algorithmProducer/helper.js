/**
 * Generate a random size array with random integer values
 * Array length: [10, 20]
 * Item value: [0, 100]
 * @returns {Array}
 */
export function generateRandomArray() {
  const size = randomInteger(10, 20);
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = randomInteger(0, 100);
  }
  return arr;
}

/**
 * Generate a random integer within [start, end]
 * @param {Integer} start
 * @param {Integer} end
 * @returns {Integer}
 */
function randomInteger(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
