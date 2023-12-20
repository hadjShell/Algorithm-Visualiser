import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [a, setA] = useState([50, 150]);
  // const [scope, animate] = useAnimate();

  return (
    <div>
      <h1>Hello world!</h1>
      <motion.button
        animate={{ x: 100 }}
        onClick={() => {
          const b = [a[1], a[0]];
          setA(b);
        }}
      >
        ss
      </motion.button>
      <motion.section
        id="viz"
        className="h-[500px] w-full flex flex-row justify-center"
      >
        <svg id="viz-graph" className="basis-9/12">
          <motion.g
            animate={{ x: 0 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <rect
              height="169.75"
              width="45"
              style={{ fill: "rgb(220, 20, 60)" }}
            ></rect>
            <text className="">29</text>
            <text dy=".35em" x="22.5" y="154.75" style={{ fontSize: "20px" }}>
              29
            </text>
          </motion.g>
          <motion.g
            animate={{ x: a[0] }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <rect
              height="60.5"
              width="45"
              style={{ fill: "rgb(173, 216, 230)" }}
            ></rect>
            <text dy=".35em" x="22.5" y="45.5" style={{ fontSize: "20px" }}>
              10
            </text>
          </motion.g>
          <motion.g
            animate={{ x: 100 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <rect
              height="83.5"
              width="45"
              style={{ fill: "rgb(173, 216, 230)" }}
            ></rect>
            <text dy=".35em" x="22.5" y="68.5" style={{ fontSize: "20px" }}>
              14
            </text>
          </motion.g>
          <motion.g
            animate={{ x: a[1] }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <rect
              height="215.75"
              width="45"
              style={{ fill: "rgb(173, 216, 230)" }}
            ></rect>
            <text dy=".35em" x="22.5" y="200.75" style={{ fontSize: "20px" }}>
              37
            </text>
          </motion.g>
          <motion.g
            animate={{ x: 200 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <rect
              height="83.5"
              width="45"
              style={{ fill: "rgb(173, 216, 230)" }}
            ></rect>
            <text dy=".35em" x="22.5" y="68.5" style={{ fontSize: "20px" }}>
              14
            </text>
          </motion.g>
        </svg>
      </motion.section>
    </div>
  );
}
