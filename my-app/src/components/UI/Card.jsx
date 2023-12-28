import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Card({ img, name, to }) {
  return (
    <div className="flex justify-center">
      <motion.div
        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to={to}>
          <img
            className="rounded-t-lg w-full h-[80%]"
            src={img}
            alt="Card image"
          />
          <div className="py-5">
            <h5 className="text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
