import ControlPanel from "../components/ControlPanel";
import VisualContainer from "../components/VisualContainer";
import SelSortItem from "../components/UI/SelSortItem";

import { useState, useRef } from "react";
import { createAnimationState } from "../backend/state/sorting/SelectionSortState";
import { generateRandomArray } from "../backend/helper.js";

export default function SelectionSortPage() {
  const [indexOfStates, setIndexOfStates] = useState(0);
  // One way to implement reset functon, but cannot used to imlement dragging progress feature
  // Refine state object structure instead
  // const [resetKey, setResetKey] = useState(0);
  const originalArray = useRef(generateRandomArray()).current;
  const states = useRef(createAnimationState(originalArray)).current;
  const size = states.originalArray.length;
  console.log(states);

  return (
    <>
      <ControlPanel
        indexOfStates={indexOfStates}
        setIndexOfStates={setIndexOfStates}
        size={states.states.length}
      />

      {/* BUG */}
      <VisualContainer>
        {originalArray.map((value, i) => (
          <SelSortItem
            key={i}
            originalIndex={i}
            value={value}
            maxValue={states.maxValue}
            size={size}
            state={states.states[indexOfStates]}
          />
        ))}
      </VisualContainer>
    </>
  );
}
