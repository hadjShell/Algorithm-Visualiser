import { motion } from "framer-motion";
import {
  WIDTH_OF_VIZ_GRAPH,
  BASE_HEIGHT,
  MAX_HEIGHT,
  BAR_WIDTH,
} from "./VisualContainer";

export default function BinarySearchItem({
  state,
  originalIndex,
  value,
  maxValue,
  size,
  ...props
}) {
  const startPos = (WIDTH_OF_VIZ_GRAPH - BAR_WIDTH * size) / 2 - 15;

  // Compute item color
  const isChecking = originalIndex === state.checking;
  const isFound = originalIndex === state.found;
  let color = "rgb(173, 216, 230)";
  if (isChecking) color = "rgb(255, 212, 59)";
  if (isFound) color = "rgb(148, 216, 45)";

  return (
    <motion.g
      initial={{ x: originalIndex * 50 + startPos, y: 300 }}
      animate={{ x: originalIndex * 50 + startPos, y: 0 }}
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
