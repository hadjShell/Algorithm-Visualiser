import { motion } from "framer-motion";
import {
  WIDTH_OF_VIZ_GRAPH,
  BASE_HEIGHT,
  MAX_HEIGHT,
  BAR_WIDTH,
} from "./VisualGraph";

export default function SelSortItem({
  state,
  originalIndex,
  value,
  maxValue,
  size,
  ...props
}) {
  const currentIndex = state.currentIndex[originalIndex];

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

  return (
    <motion.g
      initial={{ x: originalIndex * 50 + startPos, y: 300 }}
      animate={{ x: currentIndex * 50 + startPos, y: 0 }}
      transition={{ type: "tween", duration: 0.4 }}
      {...props}
    >
      <rect
        height={(BASE_HEIGHT + MAX_HEIGHT * (value / maxValue)).toFixed(2)}
        width={BAR_WIDTH}
        style={{ fill: color }}
      ></rect>
      <text
        x="11"
        y="-10"
        style={{ fontSize: "20px", transform: "rotateX(180deg)" }}
      >
        {value}
      </text>
    </motion.g>
  );
}
