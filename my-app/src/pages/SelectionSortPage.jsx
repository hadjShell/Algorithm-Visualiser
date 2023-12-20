import ControlPanel from "../components/ControlPanel";
import VisualContainer from "../components/VisualContainer";
import SelSortItem from "../components/UI/SelSortItem";

import { DUMMY_SS } from "../backend/data";
import { useState } from "react";

export default function SelectionSortPage() {
  const [indexOfStates, setIndexOfStates] = useState(0);

  const size = DUMMY_SS.originalArray.length;

  return (
    <>
      <ControlPanel
        indexOfStates={indexOfStates}
        setIndexOfStates={setIndexOfStates}
        size={DUMMY_SS.states.length}
      />

      <VisualContainer>
        {DUMMY_SS.originalArray.map((value, i) => (
          <SelSortItem
            key={i}
            initialIndex={i}
            value={value}
            maxValue={DUMMY_SS.maxValue}
            size={size}
            state={DUMMY_SS.states[indexOfStates]}
          />
        ))}
      </VisualContainer>
    </>
  );
}
