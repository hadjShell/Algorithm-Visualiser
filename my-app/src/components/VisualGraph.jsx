export const WIDTH_OF_VIZ_GRAPH = 1000,
  BASE_HEIGHT = 30,
  MAX_HEIGHT = 300,
  BAR_WIDTH = 45;

export default function VisualGraph({ children }) {
  return (
    <section id="viz" className="w-full flex flex-row justify-center">
      <svg
        id="viz-graph"
        className={`h-[380px] w-[1000px]`}
        style={{ transform: "rotateX(180deg)" }}
      >
        {children}
      </svg>
    </section>
  );
}
