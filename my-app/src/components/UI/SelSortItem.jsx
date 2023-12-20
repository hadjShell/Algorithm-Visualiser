import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { WIDTH_OF_VIZ_GRAPH } from "../VisualContainer";

const BASE_HEIGHT = 20,
  MAX_HEIGHT = 300,
  BAR_WIDTH = 45;
export default function SelSortItem({
  state,
  initialIndex,
  value,
  maxValue,
  size,
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const startPos = (WIDTH_OF_VIZ_GRAPH - BAR_WIDTH * size) / 2 - 15;

  // Compute item color
  const isChecking = currentIndex === state.checking;
  const isCurrentMin = currentIndex === state.currentMin;
  const isSwapping = state.swapping.includes(currentIndex);
  const isSorted = state.sorted.includes(currentIndex);
  let color = "rgb(173, 216, 230)";
  if (isChecking) color = "rgb(255, 212, 59)";
  if (isCurrentMin) color = "rgb(250, 82, 82)";
  if (isSwapping) color = "rgb(132, 94, 247)";
  if (isSorted) color = "rgb(148, 216, 45)";

  useEffect(() => {
    if (isSwapping) {
      const index = state.swapping.filter(index => index !== initialIndex)[0];
      setCurrentIndex(index);
    }
  }, [isSwapping, state.swapping, initialIndex]);

  return (
    <motion.g
      initial={{ x: initialIndex * 50 + startPos, y: 300 }}
      animate={{ x: currentIndex * 50 + startPos, y: 0 }}
      transition={{ type: "tween", duration: 0.4 }}
    >
      <rect
        height={(BASE_HEIGHT + MAX_HEIGHT * (value / maxValue)).toFixed(2)}
        // height={`${BASE_HEIGHT + MAX_HEIGHT}`}
        width={BAR_WIDTH}
        style={{ fill: color }}
      ></rect>
      <text
        x="11"
        y="-15"
        style={{ fontSize: "20px", transform: "rotateX(180deg)" }}
      >
        {value}
      </text>
    </motion.g>
  );
}