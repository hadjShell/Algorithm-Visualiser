export default class Node {
  #data;
  #left = null;
  #right = null;
  #row = -1;
  #col = -1;

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

  get row() {
    return this.#row;
  }

  get col() {
    return this.#col;
  }

  set row(row) {
    this.#row = row;
  }

  set col(col) {
    this.#col = col;
  }
}
