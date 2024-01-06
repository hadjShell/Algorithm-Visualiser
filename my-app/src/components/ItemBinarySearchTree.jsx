import { motion } from "framer-motion";
import { WIDTH_OF_VIZ_GRAPH } from "./VisualContainer";

export default function BinarySearchTreeItem({
  state,
  row,
  col,
  value,
  haveLeft,
  haveRight,
  level,
  ...props
}) {
  const section = WIDTH_OF_VIZ_GRAPH / 2 ** row;

  // Compute item color
  const isChecking = row === state.checking[0] && col === state.checking[1];
  const isFound = row === state.found[0] && col === state.found[1];
  const isGoingLeft = isChecking && state.going === -1;
  const isGoingRight = isChecking && state.going === 1;
  let color = "rgb(173, 216, 230)";
  if (isChecking) color = "rgb(255, 212, 59)";
  if (isFound) color = "rgb(148, 216, 45)";

  return (
    <>
      <motion.g
        initial={{ x: section / 2 + col * section, y: 0 }}
        animate={{
          x: section / 2 + col * section,
          y: (level - row) * (300 / level),
        }}
        transition={{ type: "tween", duration: 0.4 }}
        {...props}
      >
        <circle r="15" style={{ fill: color }}></circle>
        <text
          x="-8"
          y="5"
          style={{ fontSize: "15px", transform: "rotateX(180deg)" }}
        >
          {value}
        </text>
      </motion.g>
      <g>
        {haveLeft && (
          <line
            x1={section / 2 + col * section - 1}
            y1={(level - row) * (300 / level)}
            x2={section / 4 + (col * 2 * section) / 2 + 1}
            y2={(level - row - 1) * (300 / level)}
            stroke={isGoingLeft ? "rgb(255, 212, 59)" : "black"}
            strokeWidth="0.8"
          />
        )}
        {haveRight && (
          <line
            x1={section / 2 + col * section + 1}
            y1={(level - row) * (300 / level)}
            x2={section / 4 + ((col * 2 + 1) * section) / 2 - 1}
            y2={(level - row - 1) * (300 / level)}
            stroke={isGoingRight ? "rgb(255, 212, 59)" : "black"}
            strokeWidth="0.8"
          />
        )}
      </g>
    </>
  );
}
