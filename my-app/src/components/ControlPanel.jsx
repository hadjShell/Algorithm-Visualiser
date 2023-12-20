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

  return (
    <section id="control-panel">
      <h1>Control panel</h1>
      <button
        type="button"
        className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleBack}
      >
        Back
      </button>
      <button
        type="button"
        className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleNext}
      >
        Next
      </button>
    </section>
  );
}
