import SelectionSortState from "../../../model/state/sorting/SelectionSortState.js";

export class SelectionSort {
  #arr;
  #currentState = [];
  #states = [];

  constructor(arr) {
    this.#arr = [...arr];
    this.#currentState = this.#arr.map(e => new SelectionSortState(e));
    this._updateCurrentState();
  }

  /**
   * Run selection sort and create states
   * @returns {Array}
   */
  run() {
    const sortedArr = [...this.#arr];
    let i, j, min;
    for (i = 0; i < sortedArr.length; i++) {
      min = i;
      for (j = i + 1; j < sortedArr.length; j++)
        if (sortedArr[j] < sortedArr[min]) min = j;
      [sortedArr[i], sortedArr[min]] = [sortedArr[min], sortedArr[i]];
    }
    return sortedArr;
  }

  /**
   * Update current state and then
   * transfer it to an object array and push it into states
   */
  _updateCurrentState() {
    this.#states.push(
      this.#currentState.map(e => {
        return {
          data: e.data,
          isSorted: e.isSorted,
          isCurrentMin: e.isCurrentMin,
          isChecked: e.isChecked,
        };
      })
    );
  }
}
