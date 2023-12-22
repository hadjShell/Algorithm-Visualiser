export const WIDTH_OF_VIZ_GRAPH = 1000;

export default function VisualContainer({ children }) {
  return (
    <section
      id="viz"
      className="pt-12 h-[500px] w-full flex flex-row justify-center"
    >
      <svg
        id="viz-graph"
        className={`h-[400px] w-[1000px]`}
        style={{ transform: "rotateX(180deg)" }}
      >
        {children}
      </svg>
    </section>
  );
}
