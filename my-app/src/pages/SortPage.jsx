import ControlPanel from "../components/ControlPanel";
import VisualGraph from "../components/VisualGraph";
import PseudoCode from "../components/PseudoCode";
import ItemRange from "../components/ItemRange";

import { useState } from "react";

export default function SortPage({ SortItem, createAnimationState, action }) {
  const [indexOfStates, setIndexOfStates] = useState(0);
  const [state, setState] = useState(createAnimationState);
  // used for resetting control panel
  const [key, setKey] = useState(0);

  function handleRandom() {
    setState(createAnimationState("RANDOM"));
    setIndexOfStates(0);
    setKey(prev => prev + 1);
  }

  function handleAscending() {
    setState(createAnimationState("ASCENDING"));
    setIndexOfStates(0);
    setKey(prev => prev + 1);
  }
  function handleDescending() {
    setState(createAnimationState("DESCENDING"));
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
        handleRandom={handleRandom}
        handleAscending={handleAscending}
        handleDescending={handleDescending}
        action="SORTING"
      />

      <VisualGraph>
        {state.originalArray.map((value, i) => (
          <SortItem
            key={state.key[i]}
            originalIndex={i}
            value={value}
            maxValue={state.maxValue}
            size={state.originalArray.length}
            state={state.states[indexOfStates]}
          />
        ))}
        {action === "QUICK" && (
          <ItemRange
            range={state.states[indexOfStates].partitionRange}
            size={state.originalArray.length}
          ></ItemRange>
        )}
      </VisualGraph>

      <PseudoCode
        pseudoCode={state.pseudoCode}
        step={state.states[indexOfStates].step}
      ></PseudoCode>
    </>
  );
}
