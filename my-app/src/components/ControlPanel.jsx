import playIcon from "../assets/play-button.png";
//import pauseIcon from "../assets/pause.png";
import forwardIcon from "../assets/forward.png";
import backwardIcon from "../assets/rewind.png";
import resetIcon from "../assets/reset.png";

export default function ControlPanel({
  indexOfStates,
  setIndexOfStates,
  size,
}) {
  function handleNext() {
    if (indexOfStates < size - 1) setIndexOfStates(prev => prev + 1);
  }
  function handleBack() {
    if (indexOfStates > 0) setIndexOfStates(prev => prev - 1);
  }
  function handleDragProgress(e) {
    setIndexOfStates(e.target.value);
  }
  function handleReset() {
    setIndexOfStates(0);
  }

  return (
    <section id="control-panel" className="pt-12 px-20 pl-24 flex flex-row">
      <div className="basis-6/12 pr-8 grid grid-flow-col gap-4 justify-stretch">
        <button
          type="button"
          className="text-gray-800 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Random
        </button>
        <button
          type="button"
          className="text-gray-800 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Ascending
        </button>
        <button
          type="button"
          className="text-gray-800 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Descending
        </button>
        <select
          id="speed"
          name="speed"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <option value="1">1.0x</option>
          <option value="0.5">0.5x</option>
          <option value="1.5">1.5x</option>
          <option value="2.0">2.0x</option>
        </select>
      </div>

      <div id="audio" className="basis-2/12 px-4 flex flex-row justify-between">
        <button onClick={handleBack}>
          <img src={backwardIcon} alt="backward" height="28" width="28" />
        </button>
        <button>
          <img src={playIcon} alt="play" height="28" width="28" />
        </button>
        <button onClick={handleNext}>
          <img src={forwardIcon} alt="forward" height="28" width="28" />
        </button>
        <button onClick={handleReset}>
          <img src={resetIcon} alt="reset" height="28" width="28" />
        </button>
      </div>

      <div className="basis-4/12 flex justify-center">
        <input
          className="w-[80%]"
          type="range"
          id="progress"
          name="progress"
          min="0"
          max={size - 1}
          value={indexOfStates}
          onChange={handleDragProgress}
        />
      </div>
    </section>
  );
}
