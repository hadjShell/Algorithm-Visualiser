import ControlPanel from "../components/ControlPanel";
import VisualContainer from "../components/VisualContainer";
import PseudoCode from "../components/PseudoCode";
import ItemBinarySearch from "../components/ItemBinarySearch.jsx";
import ItemRange from "../components/ItemRange.jsx";
import { useState } from "react";
import { createAnimationState } from "../backend/state/searching/BinarySearchState.js";

export default function BinarySearchPage() {
  const [indexOfStates, setIndexOfStates] = useState(0);
  const [state, setState] = useState(createAnimationState);
  const [searchKey, setSearchKey] = useState(0);
  // used for resetting control panel
  const [key, setKey] = useState(0);

  function handleInputKey(e) {
    if (e.key === "Enter") {
      const key = Number(e.target.value);
      setState(createAnimationState(key, false));
      setSearchKey(key);
      setIndexOfStates(0);
      setKey(prev => prev + 1);
    }
  }

  // BUG: createAnimationState invoke twice
  function handleRandom() {
    setState(createAnimationState(NaN, true));
    setSearchKey(0);
    setIndexOfStates(0);
    setKey(prev => prev + 1);
  }

  return (
    <>
      <ControlPanel
        key={key}
        indexOfStates={indexOfStates}
        setIndexOfStates={setIndexOfStates}
        size={state.states.length}
        searchKey={searchKey}
        handleInputKey={handleInputKey}
        handleRandom={handleRandom}
        action="SEARCHING"
      />

      <VisualContainer>
        {state.originalArray.map((value, i) => (
          <ItemBinarySearch
            key={state.key[i]}
            originalIndex={i}
            value={value}
            maxValue={state.maxValue}
            size={state.originalArray.length}
            state={state.states[indexOfStates]}
          />
        ))}
        <ItemRange
          range={state.states[indexOfStates].range}
          size={state.originalArray.length}
        ></ItemRange>
      </VisualContainer>

      <PseudoCode
        pseudoCode={state.pseudoCode}
        step={state.states[indexOfStates].step}
      ></PseudoCode>
    </>
  );
}
