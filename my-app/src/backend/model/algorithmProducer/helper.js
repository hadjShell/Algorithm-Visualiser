export function generateRandomArray(size) {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = randomInteger();
  }
  return arr;
}

function randomInteger() {
  return Math.floor(Math.random() * 100);
}
