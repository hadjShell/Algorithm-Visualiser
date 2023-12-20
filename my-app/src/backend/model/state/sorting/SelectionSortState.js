export default class SelectionSortState {
  #data;
  #isSorted = false;
  #isCurrentMin = false;
  #isChecked = false;

  constructor(data) {
    this.#data = data;
  }

  set isSorted(isSorted) {
    this.#isSorted = isSorted;
  }
  set isCurrentMin(isCurrentMin) {
    this.#isCurrentMin = isCurrentMin;
  }
  set isChecked(isChecked) {
    this.#isChecked = isChecked;
  }
  get isSorted() {
    return this.#isSorted;
  }
  get isCurrentMin() {
    return this.#isCurrentMin;
  }
  get isChecked() {
    return this.#isChecked;
  }
  get data() {
    return this.#data;
  }
}
