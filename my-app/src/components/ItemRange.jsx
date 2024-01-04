import { WIDTH_OF_VIZ_GRAPH, BAR_WIDTH } from "./VisualContainer";

export default function ItemRange({ range, size, ...props }) {
  const startPos = (WIDTH_OF_VIZ_GRAPH - BAR_WIDTH * size) / 2 - 17;

  return (
    range.length !== 0 && (
      <g {...props}>
        <line
          x1={range[0] * 50 + startPos}
          y1="0"
          x2={range[0] * 50 + startPos}
          y2="350"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={range[0] * 50 + startPos}
          y1="0"
          x2={(range[1] + 1) * 50 + startPos}
          y2="0"
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={(range[1] + 1) * 50 + startPos}
          y1="0"
          x2={(range[1] + 1) * 50 + startPos}
          y2="350"
          stroke="black"
          strokeWidth="2"
        />
      </g>
    )
  );
}
