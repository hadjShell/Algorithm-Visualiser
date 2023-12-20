import VisualContainer from "../components/VisualContainer";
import SelSortItem from "../components/UI/SelSortItem";

import { DUMMY_SS } from "../backend/data";

export default function SelectionSortPage() {
  const size = DUMMY_SS.originalArray.length;

  return (
    <>
      <section id="control-panel">
        <h1>Control panel</h1>
      </section>

      <VisualContainer>
        {DUMMY_SS.originalArray.map((value, i) => (
          <SelSortItem
            key={i}
            initialIndex={i}
            value={value}
            maxValue={DUMMY_SS.maxValue}
            size={size}
            state={DUMMY_SS.states[1]}
          />
        ))}
      </VisualContainer>
    </>
  );
}
