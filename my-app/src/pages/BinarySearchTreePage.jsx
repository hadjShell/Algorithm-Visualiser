import ControlPanel from "../components/ControlPanel";
import VisualGraph from "../components/VisualGraph";
import PseudoCode from "../components/PseudoCode";
import ItemBinarySearchTree from "../components/ItemBinarySearchTree.jsx";
import { useState } from "react";
import { createAnimationState } from "../backend/state/searching/BinarySearchTreeState.js";

export default function BinarySearchTreePage() {
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

      <VisualGraph>
        {state.originalTree.map((node, i) => (
          <ItemBinarySearchTree
            key={state.key[i]}
            row={node.row}
            col={node.col}
            value={node.data}
            haveLeft={node.haveLeft}
            haveRight={node.haveRight}
            level={state.level}
            state={state.states[indexOfStates]}
          />
        ))}
      </VisualGraph>

      <PseudoCode
        pseudoCode={state.pseudoCode}
        step={state.states[indexOfStates].step}
      ></PseudoCode>
    </>
  );
}
