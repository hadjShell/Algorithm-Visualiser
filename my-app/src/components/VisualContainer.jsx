export const WIDTH_OF_VIZ_GRAPH = 1000;

export default function VisualContainer({ children }) {
  return (
    <section id="viz" className="h-[500px] w-full flex flex-row justify-center">
      <svg
        id="viz-graph"
        className={`h-[400px] w-[${WIDTH_OF_VIZ_GRAPH}px]`}
        style={{ transform: "rotateX(180deg)" }}
      >
        {children}
      </svg>
    </section>
  );
}
