import ControlPanel from "../components/ControlPanel";
import VisualContainer from "../components/VisualContainer";
import SelSortItem from "../components/UI/SelSortItem";

import { useState } from "react";
import { createAnimationState } from "../backend/state/sorting/SelectionSortState";

export default function SelectionSortPage() {
  const [indexOfStates, setIndexOfStates] = useState(0);
  const [state, setState] = useState(createAnimationState());
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
    <div>
      <ControlPanel
        key={key}
        indexOfStates={indexOfStates}
        setIndexOfStates={setIndexOfStates}
        size={state.states.length}
        handleRandom={handleRandom}
        handleAscending={handleAscending}
        handleDescending={handleDescending}
      />

      <VisualContainer>
        {state.originalArray.map((value, i) => (
          <SelSortItem
            key={state.key[i]}
            originalIndex={i}
            value={value}
            maxValue={state.maxValue}
            size={state.originalArray.length}
            state={state.states[indexOfStates]}
          />
        ))}
      </VisualContainer>
    </div>
  );
}
