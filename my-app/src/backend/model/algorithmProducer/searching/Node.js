export default class Node {
  #data;
  #left = null;
  #right = null;

  constructor(data) {
    this.#data = data;
  }

  get data() {
    return this.#data;
  }

  get left() {
    return this.#left;
  }

  get right() {
    return this.#right;
  }

  set left(left) {
    this.#left = left;
  }

  set right(right) {
    this.#right = right;
  }
}
